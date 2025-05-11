"use client"

import { useEffect } from "react"
import { trackTikTokEvent } from "@/lib/tracking"

export default function PageWrapper({ children }) {
  useEffect(() => {
    // Rastreia visualização da página inicial
    trackTikTokEvent("ViewContent", { content_name: "landing_page" })
  }, [])

  return <>{children}</>
}
