import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Users, LayoutGrid, ShieldCheck, Zap, CheckCircle2, ArrowRight } from 'lucide-react'
import Navbar from '@/website/Navbar'
import Footer from '../landing/Footer'

const About = () => {
  return (
   <>
    <Navbar />
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      {/* Container to center content */}
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Top Header Section */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-gold border border-gold/30 px-3 py-1 rounded-full inline-block">
            About Our Project
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What is EventSphere Management?
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-sm md:text-base">
            EventSphere is an expo management platform designed to replace manual registration 
            and static floor plans with a real-time system for organizers, exhibitors, and attendees.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface p-4 rounded-lg border border-border text-center">
            <p className="text-2xl font-bold text-gold">99%</p>
            <p className="text-xs text-muted">Target Uptime</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-border text-center">
            <p className="text-2xl font-bold text-gold">&lt; 2s</p>
            <p className="text-xs text-muted">Response Time</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-border text-center">
            <p className="text-2xl font-bold text-gold">100+</p>
            <p className="text-xs text-muted">Concurrent Users</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-border text-center">
            <p className="text-2xl font-bold text-gold">MERN</p>
            <p className="text-xs text-muted">Tech Stack</p>
          </div>
        </div>

        {/* User Roles Section */}
        <div>
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Built for Three Main Users
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Organizers / Admins */}
            <div className="bg-surface p-6 rounded-lg border border-border space-y-3">
              <Building2 className="w-8 h-8 text-gold" />
              <h3 className="font-bold text-lg">Organizers & Admins</h3>
              <p className="text-xs text-muted">
                Create expos, assign booth space on floor plans, and view analytics.
              </p>
              <ul className="text-xs space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Floor plan booth allocation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Manage event schedules
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Real-time reports
                </li>
              </ul>
            </div>

            {/* Exhibitors */}
            <div className="bg-surface p-6 rounded-lg border border-border space-y-3">
              <LayoutGrid className="w-8 h-8 text-emerald" />
              <h3 className="font-bold text-lg">Exhibitors</h3>
              <p className="text-xs text-muted">
                Register profiles, choose available booths, and display products.
              </p>
              <ul className="text-xs space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald" /> Reserve booth locations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald" /> Update profile details
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald" /> Message neighbor booths
                </li>
              </ul>
            </div>

            {/* Attendees */}
            <div className="bg-surface p-6 rounded-lg border border-border space-y-3">
              <Users className="w-8 h-8 text-gold" />
              <h3 className="font-bold text-lg">Attendees</h3>
              <p className="text-xs text-muted">
                Explore schedules, search for exhibitors, and bookmark favorite sessions.
              </p>
              <ul className="text-xs space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> View interactive floor plan
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Filter exhibitor list
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Bookmark sessions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* System Features Section */}
        <div className="bg-surface/50 p-6 md:p-8 rounded-lg border border-border space-y-6">
          <h2 className="font-display text-xl font-bold">Key Technical Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <Zap className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Fast Response Time</h4>
                <p className="text-xs text-muted">Built to respond to user actions within 1-2 seconds.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Secure Authentication</h4>
                <p className="text-xs text-muted">Encrypted passwords, role-based access control, and GDPR privacy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <Link 
            to="/admin" 
            className="inline-flex items-center gap-2 bg-gold text-background px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Go to Admin Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default About