'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Pamela D. Pete
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/poems" className="text-foreground hover:text-primary transition">
            Poetry
          </Link>
          <Link href="/workshops" className="text-foreground hover:text-primary transition">
            Workshops
          </Link>
          <Link href="/events" className="text-foreground hover:text-primary transition">
            Events
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/poems" className="text-foreground hover:text-primary transition">
              Poetry
            </Link>
            <Link href="/workshops" className="text-foreground hover:text-primary transition">
              Workshops
            </Link>
            <Link href="/events" className="text-foreground hover:text-primary transition">
              Events
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition text-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
