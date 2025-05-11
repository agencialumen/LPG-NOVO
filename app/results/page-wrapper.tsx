"use client"

import { useEffect } from "react"
import { trackTikTokEvent } from "@/lib/tracking"

export default function ResultsPageWrapper({ children }) {
  useEffect(() => {
    // Rastreia visualização da página de resultados
    trackTikTokEvent("ViewContent", { content_name: "results_page" })
    trackTikTokEvent("CompleteQuiz")
  }, [])

  return <>{children}</>
}
