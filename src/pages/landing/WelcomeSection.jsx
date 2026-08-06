import React, { useEffect, useRef, useState } from 'react'

const pillars = [
  { label: "Industrial Fairs", dot: "bg-gold", hover: "hover:border-gold/30" },
  { label: "Trade Exhibitions", dot: "bg-emerald", hover: "hover:border-emerald/30" },
  { label: "Business Seminars", dot: "bg-sky-400", hover: "hover:border-sky-400/30" }
]

const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className={`border-t border-border bg-surface/10 px-8 py-20 relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="absolute left-0 right-0 top-0 h-[1.5px] bg-linear-to-r from-transparent via-gold to-transparent bg-size-[200%_auto] animate-gradient-shift" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-87.5 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/5 blur-3xl animate-float-glow" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Who We Are
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          Welcome to EventSphere
        </h2>
        <p className="mt-6 text-sm md:text-base leading-relaxed text-muted max-w-3xl mx-auto">
          We are honored to welcome you to our next-generation expo management platform.
          EventSphere provides a comprehensive, one-window digital floor plan solution for
          organizing industrial fairs, trade exhibitions, business seminars, conferences,
          and corporate events. From real-time booth bookings to live attendee schedules,
          we turn your floor plans into interactive experiences.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 transition-colors duration-300 ${item.hover}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${item.dot} animate-pulse`} />
              <span className="text-[10px] font-mono text-foreground uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection