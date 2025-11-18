import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { FeaturedPoems } from '@/components/featured-poems'
import { UpcomingEvents } from '@/components/upcoming-events'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedPoems />
        <UpcomingEvents />
      </main>
      <Footer />
    </>
  )
}
