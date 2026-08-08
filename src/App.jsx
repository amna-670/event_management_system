import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './dashboard/admin/AdminDashboard'
import ExhibitorPortal from './dashboard/exhibitor/ExhibitorPortal'
import AttendeeHome from './dashboard/attendee/AttendeeHome'
import AdminExpos from './dashboard/admin/AdminExpos'
import AdminBooths from './dashboard/admin/AdminBooths'
import AdminSchedule from './dashboard/admin/AdminSchedule'
import { Toaster } from 'sonner'
import LandingPage from './website/pages/LandingPage'
import About from './website/pages/About'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'


function App() {
  return (
    <>
     <Toaster
  theme="dark"
  position="top-right"
  toastOptions={{
    style: {
      background: "#232733",
      border: "1px solid #2A2E38",
      borderLeft: "4px solid #C9A227",
      color: "#F0EDE4",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    },
  }}
/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/exhibitor" element={<ExhibitorPortal />} />
      <Route path="/attendee" element={<AttendeeHome />} />
      <Route path="/admin/expos" element={<AdminExpos />} />
      <Route path="/admin/booths" element={<AdminBooths />} />
      <Route path="/admin/schedule" element={<AdminSchedule />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>

    </>
  )
}

export default App