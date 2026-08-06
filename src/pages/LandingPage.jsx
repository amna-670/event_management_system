import React from 'react'
import Navbar from '@/components/common/Navbar'
import Hero from './landing/Hero'
import PartnerMarquee from './landing/PartnerMarquee'
import WelcomeSection from './landing/WelcomeSection'
import Features from './landing/Features'
import Stats from './landing/Stats'
import Footer from './landing/Footer'


const LandingPage = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <PartnerMarquee />
    <WelcomeSection />
    <Features />
    <Stats />
    <Footer />
  </div>
)

export default LandingPage