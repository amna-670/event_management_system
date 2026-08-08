import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link to="/" className="font-display text-xl font-semibold text-gold">
          EventSphere
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/home" className="text-sm text-muted transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/#events" className="text-sm text-muted transition-colors hover:text-foreground">
  Events
</Link>
<Link to="/#gallery" className="text-sm text-muted transition-colors hover:text-foreground">
  Gallery
</Link>
          <Link to="/about" className="text-sm text-muted transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/#faq" className="text-sm text-muted transition-colors hover:text-foreground">
  FAQ
</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/admin"
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Enter Dashboard
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-8 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            
            <Link
  to="/#events"
  onClick={() => setIsOpen(false)}
  className="text-sm text-muted transition-colors hover:text-foreground"
>
  Events
</Link>

<Link
  to="/#gallery"
  onClick={() => setIsOpen(false)}
  className="text-sm text-muted transition-colors hover:text-foreground"
>
  Gallery
</Link>

<Link
  to="/#faq"
  onClick={() => setIsOpen(false)}
  className="text-sm text-muted transition-colors hover:text-foreground"
>
  FAQ
</Link>

            <Link
  to="/#features"
  onClick={() => setIsOpen(false)}
  className="text-sm text-muted transition-colors hover:text-foreground"
>

              Features
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md bg-gold px-4 py-2 text-center text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Enter Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar