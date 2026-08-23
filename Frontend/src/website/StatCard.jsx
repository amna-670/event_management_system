import React from 'react'

const StatCard = ({ label, value }) => (
  <div className="relative bg-surface border border-border rounded-lg p-6">
    {/* ticket-stub notches */}
    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full border border-border" />
    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full border border-border" />

    <p className="text-muted text-sm mb-2">{label}</p>
    <p className="font-mono text-3xl font-semibold text-foreground">{value}</p>
  </div>
)

export default StatCard