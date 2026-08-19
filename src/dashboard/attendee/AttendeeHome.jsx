import React from "react";
import AttendeeLayout from "@/dashboard/layouts/AttendeeLayout";
import StatCard from "@/website/StatCard";


const stats = [
  {
    label: "Events",
    value: "8",
  },
  {
    label: "Sessions",
    value: "12",
  },
  {
    label: "Bookmarked",
    value: "4",
  },
  {
    label: "Exhibitors",
    value: "56",
  },
];

const AttendeeHome = () => {
  return (
    <AttendeeLayout>
      <div className="p-8">
        <h1 className="mb-2 font-display text-4xl font-bold text-foreground">
          Attendee Dashboard
        </h1>

        <div className="mb-6">
          <p className="text-muted">
            Explore events, discover exhibitors, and manage your personalized event schedule.
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
    </AttendeeLayout>
  );
};

export default AttendeeHome;
