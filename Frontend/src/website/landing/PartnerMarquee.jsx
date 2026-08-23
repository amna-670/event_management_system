import React from 'react'

const partnerLogos = [
  "TechExpo Global", "World Trade Fair", "SummitSphere",
  "EduCon Summit", "BioMed Convention", "AutoShow International"
]

const PartnerMarquee = () => (
  <div className="relative w-full overflow-hidden border-y border-border bg-surface/20 py-6">
    <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
      {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
        <span
          key={idx}
          className="font-mono text-xs font-semibold tracking-[0.2em] text-muted/40 uppercase"
        >
          {logo}
        </span>
      ))}
    </div>
  </div>
)

export default PartnerMarquee