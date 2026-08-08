import React from 'react'

const rolesData = [
  {
    role: "For Organizers",
    title: "Run the Whole Show",
    desc: "Create expos, allocate booths, approve exhibitors, and track real-time analytics — all from one dashboard.",
    textColor: "text-gold",
    glow: "bg-gold/10",
    hoverBorder: "hover:border-gold/40"
  },
  {
    role: "For Exhibitors",
    title: "Claim Your Booth",
    desc: "Register your company, reserve a booth space, and manage your profile, products, and staff details.",
    textColor: "text-emerald",
    glow: "bg-emerald/10",
    hoverBorder: "hover:border-emerald/40"
  },
  {
    role: "For Attendees",
    title: "Never Miss a Session",
    desc: "Browse the floor plan, search exhibitors, bookmark sessions, and get reminders before they start.",
    textColor: "text-sky-400",
    glow: "bg-sky-400/10",
    hoverBorder: "hover:border-sky-400/40"
  }
]

const Features = () => (
  <section id="features" className="border-t border-border px-8 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mb-16 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          One Floor, Three Roles
        </span>
        <h2 className="font-display mt-4 text-4xl font-bold text-foreground">
          Built for Everyone on the Floor
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {rolesData.map((card, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-lg border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 ${card.hoverBorder}`}
          >
            <div className={`absolute -left-16 -top-16 h-36 w-36 rounded-full ${card.glow} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

            <div className="relative z-10">
              <span className={`font-mono text-xs ${card.textColor} font-bold`}>
                {card.role}
              </span>
              <h3 className="font-display mt-2 text-2xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Features