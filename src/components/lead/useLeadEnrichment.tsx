'use client';

/**
 * useLeadEnrichment — what an inline lead form does after submitLead() succeeds:
 *   1. lazy-load LeadEnrichModal;
 *   2. once it has loaded, count the lead (fireLeadConversion) and open it, so a
 *      visitor who closes the tab with the modal open is still a conversion;
 *   3. on Send or Skip, go to /thank-you?...&counted=1 (no second count there).
 * A failed save throws back to the form's existing retry error. A saved lead
 * without a token, or whose modal code fails to load, goes straight to
 * /thank-you WITHOUT counted=1, where the destination counts the saved lead.
 */

import React, { useCallback, useRef, useState } from 'react';
import { afterSubmitPlan, fireLeadConversion, thankYouUrl } from '@/utils/leadConversion';
import { enrichLead } from '@/utils/enrichLead';
import { pushToDataLayer } from '@/utils/gtm';
import type { EnrichFields, LeadEnrichModalProps } from './LeadEnrichModal';

export interface EnrichStart {
  ok: boolean;
  docId: string;
  enrichToken?: string | null;
  name: string;
  email: string;
  source: string;
  region: string;
}

type ModalComponent = React.ComponentType<LeadEnrichModalProps>;

const loadModal = () => import('./LeadEnrichModal').then((m) => m.default as ModalComponent);

export function useLeadEnrichment() {
  const [active, setActive] = useState<{ ctx: EnrichStart; Modal: ModalComponent } | null>(null);
  const doneRef = useRef(false);

  const finish = useCallback((ctx: EnrichStart) => {
    if (doneRef.current) return;
    doneRef.current = true;
    window.location.assign(thankYouUrl({ lid: ctx.docId, region: ctx.region, source: ctx.source, counted: true }));
  }, []);

  const prefetch = useCallback(() => { loadModal().catch(() => {}); }, []);

  // Straight to /thank-you, uncounted, so the destination page counts the lead.
  const bail = useCallback((ctx: EnrichStart) => {
    if (doneRef.current) return;
    doneRef.current = true;
    window.location.assign(thankYouUrl({ lid: ctx.docId, region: ctx.region, source: ctx.source }));
  }, []);

  const start = useCallback((ctx: EnrichStart) => {
    const plan = afterSubmitPlan(ctx);
    if (plan === 'error') throw new Error('Lead capture was not confirmed');
    if (plan === 'thank-you') { bail(ctx); return; }
    loadModal()
      .then((Modal) => {
        fireLeadConversion({ lid: ctx.docId, region: ctx.region, source: ctx.source });
        pushToDataLayer({ event: 'lead_enrich_shown', form_name: ctx.source });
        setActive({ ctx, Modal });
      })
      .catch(() => bail(ctx));
  }, [bail]);

  const onSkip = useCallback(() => {
    if (!active) return;
    pushToDataLayer({ event: 'lead_enrich_skipped', form_name: active.ctx.source });
    finish(active.ctx);
  }, [active, finish]);

  const onSubmit = useCallback(async (f: EnrichFields) => {
    if (!active) return;
    const { ctx } = active;
    const filled = (['phone', 'company', 'message'] as const).filter((k) => f[k].trim() !== '');
    if (filled.length === 0 || f.honeypot.trim() !== '') {
      pushToDataLayer({ event: 'lead_enrich_skipped', form_name: ctx.source });
      finish(ctx);
      return;
    }
    pushToDataLayer({ event: 'lead_enrich_submitted', form_name: ctx.source, fields_filled: filled.join(',') });
    await enrichLead({
      docId: ctx.docId,
      enrichToken: ctx.enrichToken || '',
      name: ctx.name,
      email: ctx.email,
      phone: f.phone.trim(),
      company: f.company.trim(),
      message: f.message.trim(),
      source: ctx.source,
    });
    finish(ctx);
  }, [active, finish]);

  const firstName = active ? active.ctx.name.trim().split(/\s+/)[0].slice(0, 30) : '';
  const modal = active ? <active.Modal firstName={firstName} onSkip={onSkip} onSubmit={onSubmit} /> : null;

  return { start, prefetch, modal };
}
