'use client';

/**
 * useLeadEnrichment — what an inline lead form does after submitLead() succeeds:
 *   1. count the lead now (fireLeadConversion), so a visitor who closes the tab
 *      with the modal open is still a conversion;
 *   2. lazy-load and open LeadEnrichModal;
 *   3. on Send or Skip, go to /thank-you?...&counted=1 (no second count there).
 * If the save failed, there is no token, or the modal code fails to load, it goes
 * straight to /thank-you as the forms always did.
 */

import React, { useCallback, useRef, useState } from 'react';
import { fireLeadConversion, thankYouUrl } from '@/utils/leadConversion';
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

  const start = useCallback((ctx: EnrichStart) => {
    fireLeadConversion({ lid: ctx.docId, region: ctx.region, source: ctx.source });
    if (!ctx.ok || !ctx.enrichToken) { finish(ctx); return; }
    loadModal()
      .then((Modal) => {
        pushToDataLayer({ event: 'lead_enrich_shown', form_name: ctx.source });
        setActive({ ctx, Modal });
      })
      .catch(() => finish(ctx));
  }, [finish]);

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
