import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { EventsList } from '@/components/events-list'

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="mb-4">Speaking Events</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join Pamela D. at upcoming speaking engagements, poetry readings, and literary events across the country.
            </p>
          </div>
          <EventsList />
        </div>
      </main>
      <Footer />
    </>
  )
}
