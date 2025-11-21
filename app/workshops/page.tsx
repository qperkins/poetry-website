import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { WorkshopsGrid } from '@/components/workshops-grid'

export default function WorkshopsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="mb-4">Poetry Workshops</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join interactive workshops led by Pamela D. Learn the craft of poetry, discover your voice, and connect with fellow poets.
            </p>
          </div>
          <WorkshopsGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
