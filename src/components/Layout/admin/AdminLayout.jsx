import React from 'react'
import AdminSidebar from "./AdminSidebar"

const AdminLayout = ({ children }) => (
  <div className="flex">
    <AdminSidebar />
    <main className="flex-1 min-h-screen bg-background">{children}</main>
  </div>
)

export default AdminLayout