import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="mb-8">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl">
            Have a question about workshops, speaking engagements, or collaborations? I'd love to hear from you. Reach out and let's connect.
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
