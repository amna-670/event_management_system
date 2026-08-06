import React from 'react'

const statsData = [
  { value: "120+", label: "Expos Hosted" },
  { value: "3,400+", label: "Exhibitors Onboarded" },
  { value: "85K+", label: "Attendee Check-ins" },
  { value: "99%", label: "Uptime Reliability" }
]

const Stats = () => (
  <section id="stats" className="border-t border-border bg-surface px-8 py-20">
    <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
      {statsData.map((stat, idx) => (
        <div key={idx}>
          <p className="font-display text-4xl font-bold text-gold md:text-5xl">{stat.value}</p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Stats