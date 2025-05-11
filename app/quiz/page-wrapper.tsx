"use client"

import { useEffect } from "react"
import { trackTikTokEvent } from "@/lib/tracking"

export default function QuizPageWrapper({ children }) {
  useEffect(() => {
    // Rastreia visualização da página do quiz
    trackTikTokEvent("ViewContent", { content_name: "quiz_page" })
    trackTikTokEvent("StartQuiz")
  }, [])

  return <>{children}</>
}
