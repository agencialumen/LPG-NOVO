// Função para rastrear eventos do TikTok
export const trackTikTokEvent = (eventName: string, properties?: Record<string, any>) => {
  try {
    if (typeof window !== "undefined" && window.ttq) {
      window.ttq.track(eventName, properties || {})
      console.log(`TikTok event tracked: ${eventName}`, properties || {})
    }
  } catch (error) {
    console.error("Error tracking TikTok event:", error)
  }
}

// Declaração de tipos para o TikTok Pixel
declare global {
  interface Window {
    ttq: any
  }
}
