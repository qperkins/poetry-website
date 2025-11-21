import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroSlideshow } from '@/components/hero-slideshow'

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-6 text-6xl md:text-7xl leading-tight">
          Words That <span className="text-primary">Resonate</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover contemporary poetry, transformative workshops, and inspiring speaking engagements with Pamela D.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/poems" className="bg-primary text-primary-foreground px-8 py-3 rounded hover:bg-primary/90 transition flex items-center justify-center gap-2">
            Explore Poetry
            <ArrowRight size={18} />
          </Link>
          <Link href="/events" className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary/5 transition">
            Upcoming Events
          </Link>
        </div>
      </div>

      {/* Hero Slideshow */}
      <div className="mt-16 max-w-5xl mx-auto">
        <HeroSlideshow />
      </div>
    </section>
  )
}
