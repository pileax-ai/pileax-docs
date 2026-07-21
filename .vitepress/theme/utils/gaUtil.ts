export const initGaEvent = () => {
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement)?.closest('[data-ga]')
    if (!target) return

    // GA attributes
    const eventName = target.getAttribute('data-ga') || 'button_click'
    const category = target.getAttribute('data-ga-category') || 'engagement'
    const label = target.getAttribute('data-ga-label') || undefined
    const value = target.getAttribute('data-ga-value') ? parseInt(target.getAttribute('data-ga-value')!) : undefined

    if (typeof window.gtag !== 'undefined') {
      if ((import.meta as any).env.PROD) {
        window.gtag('event', eventName, {
          event_category: category,
          event_label: label,
          value: value,
        })
      }

      if ((import.meta as any).env.DEV) {
        console.log('[GA Event]', eventName, { category, label, value })
      }
    }
  })
}

