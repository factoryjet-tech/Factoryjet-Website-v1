/** Keyboard containment and focus return for the site's modal overlays. */
export function containDialogFocus(panel: HTMLElement, close: () => void, returnTo?: HTMLElement | null): () => void {
  const doc = panel.ownerDocument;
  const trigger = returnTo ?? doc.activeElement as HTMLElement | null;
  const focusables = () => Array.from(panel.querySelectorAll<HTMLElement>(
    'a[href], button, input:not([type="hidden"]), textarea, select, [tabindex]',
  )).filter(el => el.tabIndex >= 0 && !el.matches(':disabled, [inert], [inert] *') && el.getClientRects().length > 0);
  const focusFirst = () => (focusables()[0] ?? panel).focus({ preventScroll: true });

  // Hide background branches from assistive technology without disabling the
  // backdrop's click-to-dismiss handler. Restore every original attribute.
  const background: Array<{ el: Element; inert: string | null; hidden: string | null }> = [];
  let branch: Element = panel;
  while (branch.parentElement) {
    for (const sibling of Array.from(branch.parentElement.children)) {
      if (sibling === branch || sibling.hasAttribute('data-dialog-backdrop') || ['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) continue;
      background.push({ el: sibling, inert: sibling.getAttribute('inert'), hidden: sibling.getAttribute('aria-hidden') });
      sibling.setAttribute('inert', '');
      sibling.setAttribute('aria-hidden', 'true');
    }
    branch = branch.parentElement;
    if (branch === doc.body) break;
  }
  const onKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (event.key === 'Tab') {
      const items = focusables(), first = items[0], last = items[items.length - 1];
      if (!first) { event.preventDefault(); panel.focus(); return; }
      if (!panel.contains(doc.activeElement) || (event.shiftKey && (doc.activeElement === first || doc.activeElement === panel))) {
        event.preventDefault(); (event.shiftKey ? last : first).focus();
      } else if (!event.shiftKey && doc.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  };
  const onFocus = (event: FocusEvent) => {
    if (!panel.contains(event.target as Node)) focusFirst();
  };
  doc.addEventListener('keydown', onKey, true);
  doc.addEventListener('focusin', onFocus);
  focusFirst();
  return () => {
    doc.removeEventListener('keydown', onKey, true);
    doc.removeEventListener('focusin', onFocus);
    for (const { el, inert, hidden } of background) {
      if (inert === null) el.removeAttribute('inert'); else el.setAttribute('inert', inert);
      if (hidden === null) el.removeAttribute('aria-hidden'); else el.setAttribute('aria-hidden', hidden);
    }
    if (trigger?.isConnected && !trigger.closest('[inert]') && trigger.getClientRects().length) trigger.focus({ preventScroll: true });
  };
}
