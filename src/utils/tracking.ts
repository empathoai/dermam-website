export const trackEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log(`[Tracking] ${eventName}`, params);
};

export const trackLead = () => {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: 'whatsapp_click'
  });
};

export const trackSchedule = () => {
  trackEvent('schedule', {
    event_category: 'conversion',
    event_label: 'booking_click'
  });
};
