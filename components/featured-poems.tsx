import Link from 'next/link'

const poems = [
  {
    id: 1,
    title: "Echoes in Silence",
    excerpt: "In the spaces between words, in the quiet where hearts speak...",
    collection: "Echoes of Tomorrow"
  },
  {
    id: 2,
    title: "The Resilience of Light",
    excerpt: "Even when shadows grow long, there is always a spark that refuses...",
    collection: "Whispers in Silence"
  },
  {
    id: 3,
    title: "Conversations",
    excerpt: "We are all stories waiting to be told, poems waiting to be heard...",
    collection: "Words Unbound"
  }
]

export function FeaturedPoems() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-4">Featured Poems</h2>
          <p className="text-lg text-muted-foreground">A selection of recent works</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {poems.map((poem) => (
            <div key={poem.id} className="bg-card p-8 rounded-lg border border-border hover:border-primary transition">
              <h3 className="text-primary font-semibold mb-2">{poem.title}</h3>
              <p className="text-muted-foreground mb-4">{poem.excerpt}</p>
              <p className="text-sm text-muted-foreground italic mb-4">{poem.collection}</p>
              <Link href="/poems" className="text-primary hover:text-primary/80 transition font-medium">
                Read Full Poem →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/poems" className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary/5 transition inline-block">
            View All Poems
          </Link>
        </div>
      </div>
    </section>
  )
}
