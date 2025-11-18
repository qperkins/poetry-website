import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="mb-8">About Pamela D. Pete</h1>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1">
                <div className="w-full aspect-square bg-muted rounded-lg mb-4" />
                <p className="text-sm text-muted-foreground">Author portrait placeholder</p>
              </div>
              <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
                <p>
                  Pamela D. Pete is an accomplished poet, educator, and speaker dedicated to the transformative power of words. With over two decades of experience in contemporary poetry, she has touched the lives of thousands through her written works and dynamic presentations.
                </p>
                <p>
                  Her poetry explores themes of identity, resilience, love, and social consciousness. Known for her lyrical voice and profound insights, Pamela's work has been featured in prestigious literary journals and anthologies.
                </p>
                <p>
                  Beyond her poetry, Pamela is passionate about mentoring emerging writers through her workshops and speaking engagements. She believes poetry is a universal language that connects us all.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-border">
              <div>
                <h3 className="text-primary font-semibold mb-2">Awards & Recognition</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• National Poetry Prize 2022</li>
                  <li>• Literary Excellence Award</li>
                  <li>• Featured Poet, International Review</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Publications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "Echoes of Tomorrow" (2021)</li>
                  <li>• "Whispers in Silence" (2019)</li>
                  <li>• "Words Unbound" (2017)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-2">Speaking Topics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Poetry as Activism</li>
                  <li>• Finding Your Poetic Voice</li>
                  <li>• Words for Healing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
