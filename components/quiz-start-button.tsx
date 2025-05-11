"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Gift } from "lucide-react"
import Link from "next/link"
import { trackTikTokEvent } from "@/lib/tracking"

export default function QuizStartButton() {
  const [showModal, setShowModal] = useState(false)

  const handleStartButtonClick = () => {
    // Rastreia clique no botão "Fazer o Quiz Agora"
    trackTikTokEvent("ClickButton", { button_name: "start_quiz" })
    setShowModal(true)
  }

  const handleStartQuiz = () => {
    // Rastreia clique no botão "Começar Agora" do modal
    trackTikTokEvent("ClickButton", { button_name: "begin_quiz" })
  }

  return (
    <>
      <Button
        size="lg"
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl w-full"
        onClick={handleStartButtonClick}
      >
        <span className="flex items-center gap-2">
          Fazer o Quiz Agora
          <ArrowRight className="h-5 w-5" />
        </span>
      </Button>

      {/* Modal de incentivo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Gift className="h-10 w-10 text-yellow-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">
              Você está prestes a descobrir algo incrível!
            </h3>
            <p className="text-blue-700 mb-4 text-center">
              Complete o quiz até o final e ganhe um <span className="font-bold">presente especial</span> que pode
              transformar o bem-estar do seu filho para sempre!
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                <p className="text-yellow-700 text-sm">
                  <span className="font-bold">Bônus:</span> Acumule pontos respondendo às perguntas e desbloqueie
                  recompensas exclusivas!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700"
                onClick={() => setShowModal(false)}
              >
                Voltar
              </Button>
              <Link href="/quiz" className="w-full">
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white" onClick={handleStartQuiz}>
                  <span className="flex items-center gap-2">
                    Começar Agora
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
