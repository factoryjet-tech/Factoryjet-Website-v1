'use client';

import { lazy, Suspense } from 'react';
import { useContactModal } from '../context/ContactModalContext';

// Lazy load ContactFormModal - only loads when modal is opened
const ContactFormModal = lazy(() => import('./ContactFormModal'));

// Component that conditionally renders ContactFormModal only when needed
export default function ConditionalContactModal() {
  const { isOpen } = useContactModal();

  if (!isOpen) return null;

  return (
    <Suspense fallback={null}>
      <ContactFormModal />
    </Suspense>
  );
}
