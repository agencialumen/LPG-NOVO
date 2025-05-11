"use client"

import { useEffect } from "react"

export default function TikTokPixel() {
  useEffect(() => {
    // Carrega o pixel do TikTok
    !((w, d, t) => {
      w.TiktokAnalyticsObject = t
      var ttq = (w[t] = w[t] || [])
      ttq.methods = [
        "page",
        "track",
        "identify",
        "instances",
        "debug",
        "on",
        "off",
        "once",
        "ready",
        "alias",
        "group",
        "enableCookie",
        "disableCookie",
        "holdConsent",
        "revokeConsent",
        "grantConsent",
      ]
      ttq.setAndDefer = (t, e) => {
        t[e] = () => {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
      }
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i])
      ttq.instance = (t) => {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n])
        return e
      }
      ttq.load = (e, n) => {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js"
        var o = n && n.partner
        ttq._i = ttq._i || {}
        ttq._i[e] = []
        ttq._i[e]._u = r
        ttq._t = ttq._t || {}
        ttq._t[e] = +new Date()
        ttq._o = ttq._o || {}
        ttq._o[e] = n || {}
        n = document.createElement("script")
        n.type = "text/javascript"
        n.async = !0
        n.src = r + "?sdkid=" + e + "&lib=" + t
        e = document.getElementsByTagName("script")[0]
        e.parentNode.insertBefore(n, e)
      }

      ttq.load("D0GGQDJC77U9TS4J8D00")
      ttq.page() // Rastreia visualização de página
    })(window, document, "ttq")

    // Disponibiliza o ttq globalmente
    window.ttq = window.ttq || []

    return () => {
      // Cleanup se necessário
    }
  }, [])

  return null
}
