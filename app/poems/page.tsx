import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PoemsGrid } from '@/components/poems-grid'

export default function PoemsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="mb-4">Poetry Collections</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore the complete works of Pamela D. Each poem is a journey through emotion, reflection, and the human experience.
            </p>
          </div>
          <PoemsGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
