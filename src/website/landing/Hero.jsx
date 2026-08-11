import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/hero-banner.png'

const Hero = () => (
  <section 
    className="relative overflow-hidden px-8 py-20 md:py-32 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImage})` }}>
 
    <div className="pointer-events-none absolute inset-0 bg-background/80" />
    <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 animate-pan-grid" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl animate-float-glow" />

    <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center">
      <span
        className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-gold animate-fade-in-up"
        style={{ animationDelay: '100ms' }}>
        Expo & Trade Show Management
      </span>

      <h1
        className="font-display mt-6 text-4xl font-bold leading-tight bg-gradient-to-r from-foreground via-gold to-foreground bg-[length:200%_auto] bg-clip-text text-transparent sm:text-5xl md:text-6xl animate-fade-in-up animate-gradient-shift"
        style={{ animationDelay: '250ms' }}>
        Where Every Expo
        <br />
        Finds Its Floor
      </h1>

      <p
        className="mt-6 max-w-xl text-base text-muted animate-fade-in-up"
        style={{ animationDelay: '400ms' }}
      >
        EventSphere brings organizers, exhibitors, and attendees onto one
        floor plan — from booth allocation to real-time schedules.
      </p>

      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
        style={{ animationDelay: '550ms' }}
      >
        <Link
          to="/login"
          className="rounded-md bg-gold px-6 py-3 font-semibold text-background transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98]"
        >
           Sign In
        </Link>
        
        <a 
          href="#features"
          className="rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:border-gold hover:bg-surface/30 active:scale-[0.98]"
        >
          See How It Works
        </a>
      </div>
    </div>
  </section>
)

export default Hero