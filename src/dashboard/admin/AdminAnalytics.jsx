import React from "react";
import AdminLayout from "@/dashboard/layouts/AdminLayout";
import BoothTrafficChart from "./BoothTrafficChart";
import StatCard from "@/website/StatCard";
import { dashboardStats } from "@/data/mockData";

const AdminAnalytics = () => (
  <AdminLayout>
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-4xl font-bold text-foreground">
          Analytics
        </h1>
        <p className="mt-2 text-muted">
          Review dashboard metrics, booth traffic, and platform performance from the shared layout.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <BoothTrafficChart />
    </div>
  </AdminLayout>
);

export default AdminAnalytics;
