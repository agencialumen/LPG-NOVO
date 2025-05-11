import TikTokPixel from "@/components/tiktok-pixel"
import ResultsPageWrapper from "./page-wrapper"
import ResultsContent from "./results-content"

export default function ResultsPage() {
  return (
    <>
      <TikTokPixel />
      <ResultsPageWrapper>
        <ResultsContent />
      </ResultsPageWrapper>
    </>
  )
}
