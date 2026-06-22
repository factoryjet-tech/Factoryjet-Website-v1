// Google Tag Manager utility functions for tracking events

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Google Ads Conversion Labels
export const CONVERSIONS = {
  WHATSAPP_CLICK:  "AW-11127037244/N5PhCPWusNQbELy65Lkp", // already live
  FORM_SUBMISSION: "AW-11127037244/aqsvCJCk8ZQcELy65Lkp", // form submit conversion
};

// Fire a Google Ads form submission conversion event via gtag
export const trackFormSubmission = () => {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", "conversion", {
      send_to: CONVERSIONS.FORM_SUBMISSION,
    });
  }
};

// Fire a Google Ads WhatsApp/Call click conversion event via gtag
export const trackWhatsAppConversion = () => {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", "conversion", {
      send_to: CONVERSIONS.WHATSAPP_CLICK,
    });
  }
};

// Push event to dataLayer - lazily initialize dataLayer
export const pushToDataLayer = (data: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
};

// Track button clicks
export const trackButtonClick = (
  buttonName: string,
  buttonLocation: string,
  additionalData?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData,
  });
};

// Track CTA clicks
export const trackCTAClick = (
  ctaName: string,
  ctaLocation: string,
  ctaType: 'primary' | 'secondary' | 'phone' | 'email' = 'primary'
) => {
  pushToDataLayer({
    event: 'cta_click',
    cta_name: ctaName,
    cta_location: ctaLocation,
    cta_type: ctaType,
  });
};

// Track modal events
export const trackModalOpen = (modalName: string, source?: string) => {
  pushToDataLayer({
    event: 'modal_open',
    modal_name: modalName,
    modal_source: source || 'unknown',
  });
};

export const trackModalClose = (modalName: string) => {
  pushToDataLayer({
    event: 'modal_close',
    modal_name: modalName,
  });
};

// Track form events
export const trackFormStart = (formName: string) => {
  pushToDataLayer({
    event: 'form_start',
    form_name: formName,
  });
};

export const trackFormStep = (formName: string, stepNumber: number, stepName: string) => {
  pushToDataLayer({
    event: 'form_step',
    form_name: formName,
    form_step_number: stepNumber,
    form_step_name: stepName,
  });
};

export const trackFormFieldInteraction = (
  formName: string,
  fieldName: string,
  fieldValue?: string
) => {
  pushToDataLayer({
    event: 'form_field_interaction',
    form_name: formName,
    field_name: fieldName,
    field_value: fieldValue,
  });
};

export const trackFormSubmit = (
  formName: string,
  formData?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: 'form_submit',
    form_name: formName,
    ...formData,
  });
};

export const trackFormSuccess = (formName: string) => {
  pushToDataLayer({
    event: 'form_success',
    form_name: formName,
  });
};

export const trackFormError = (formName: string, errorMessage: string) => {
  pushToDataLayer({
    event: 'form_error',
    form_name: formName,
    error_message: errorMessage,
  });
};

// Track navigation events
export const trackNavigation = (
  linkText: string,
  linkUrl: string,
  navLocation: 'header' | 'footer' | 'mobile_menu' | 'dropdown'
) => {
  pushToDataLayer({
    event: 'navigation_click',
    link_text: linkText,
    link_url: linkUrl,
    nav_location: navLocation,
  });
};

// Track social link clicks
export const trackSocialClick = (platform: string, location: string) => {
  pushToDataLayer({
    event: 'social_click',
    social_platform: platform,
    click_location: location,
  });
};

// Track phone/email/whatsapp clicks
export const trackContactClick = (
  contactType: 'phone' | 'email' | 'whatsapp',
  contactValue: string,
  location: string
) => {
  pushToDataLayer({
    event: 'contact_click',
    contact_type: contactType,
    contact_value: contactValue,
    click_location: location,
  });
};

// Track service/budget selection
export const trackServiceSelection = (serviceId: string, serviceName: string) => {
  pushToDataLayer({
    event: 'service_selection',
    service_id: serviceId,
    service_name: serviceName,
  });
};

export const trackBudgetSelection = (budgetId: string, budgetRange: string) => {
  pushToDataLayer({
    event: 'budget_selection',
    budget_id: budgetId,
    budget_range: budgetRange,
  });
};

// Track scroll depth (can be called at milestones)
export const trackScrollDepth = (percentage: number, pagePath: string) => {
  pushToDataLayer({
    event: 'scroll_depth',
    scroll_percentage: percentage,
    page_path: pagePath,
  });
};

// Track outbound link clicks
export const trackOutboundClick = (linkUrl: string, linkText: string) => {
  pushToDataLayer({
    event: 'outbound_click',
    outbound_url: linkUrl,
    link_text: linkText,
  });
};
