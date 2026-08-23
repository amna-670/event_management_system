import React from "react";
import StatCard from "@/website/StatCard";

const DashboardSectionPage = ({ title, description, stats = [], children }) => {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground">
          {title}
        </h1>
        <p className="mt-2 max-w-3xl text-muted">{description}</p>
      </div>

      {stats.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      )}

      {children}
    </section>
  );
};

export default DashboardSectionPage;

