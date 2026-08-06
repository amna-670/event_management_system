import React from 'react'
import StatCard from "@/components/common/StatCard"
import { dashboardStats } from "@/data/mockData"
import BoothTrafficChart from '@/components/BoothTrafficChart'
import AdminLayout from '@/components/Layout/admin/AdminLayout'

const AdminDashboard = () => (
  <AdminLayout>
    <div className="p-8">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">
        Admin Dashboard
      </h1>
      <p className="text-muted mb-6">Manage your expos, exhibitors, and schedules.</p>

      <div className="grid grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div className="mt-6">
        <BoothTrafficChart />
      </div>
    </div>
  </AdminLayout>
)

export default AdminDashboard