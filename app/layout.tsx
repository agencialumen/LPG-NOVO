import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import TikTokPixel from "@/components/tiktok-pixel"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quiz para Mães Preocupadas",
  description: "Descubra como melhorar o bem-estar do seu filho com nosso quiz interativo",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TikTokPixel />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
