import Link from 'next/link'
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/pamlogo.png" alt="Pamela D." className="h-8 w-auto" />
              <h4 className="font-semibold text-foreground">Pamela D.</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Poet, educator, and speaker inspiring transformation through words.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/poems" className="hover:text-primary transition">Poetry</Link></li>
              <li><Link href="/workshops" className="hover:text-primary transition">Workshops</Link></li>
              <li><Link href="/events" className="hover:text-primary transition">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">More</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Mail size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Pamela D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
