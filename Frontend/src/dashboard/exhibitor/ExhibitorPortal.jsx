import React from "react";
import StatCard from "@/website/StatCard";
import ExhibitorLayout from "@/dashboard/layouts/ExhibitorLayout";

const stats = [
  {
    label: "My Booth",
    value: "B-12",
  },
  {
    label: "Products",
    value: "18",
  },
  {
    label: "Meetings",
    value: "9",
  },
  {
    label: "Messages",
    value: "5",
  },
];

const ExhibitorPortal = () => {
  return (
    <ExhibitorLayout>
      <div className="p-8">
        <h1 className="mb-2 font-display text-4xl font-bold text-foreground">
          Exhibitor Dashboard
        </h1>

        <div className="mb-6">
          <p className="text-muted">
            Manage your booth, products, profile, and communications from one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </ExhibitorLayout>
  );
};

export default ExhibitorPortal;
