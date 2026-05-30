'use client';

/**
 * ContactForm — /contact page form.
 *
 * Rebuilt 2026-05-30 to the v3 low-friction standard: this is now a thin
 * wrapper around the canonical <LeadFormInline>. Only Name + Email are
 * required; everything else is optional. Replaces the previous 4-step,
 * ~12-field form that was driving heavy abandonment. Writes to the same
 * Firestore collection ('contactpage') so the existing lead pipeline is
 * unchanged.
 */

import React from 'react';
import LeadFormInline from '@/components/LeadFormInline';

const ContactForm: React.FC = () => (
  <section id="contact-form" className="py-12 md:py-16 bg-slate-50">
    <div className="container mx-auto px-4 max-w-3xl">
      <LeadFormInline
        source="contact_page"
        collectionName="contactpage"
        heading="Get a custom proposal for your project"
        subheading="Just your name and email to start — we reply within 2 business hours."
      />
    </div>
  </section>
);

export default ContactForm;
