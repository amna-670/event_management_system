import React from 'react'
import Navbar from '@/website/Navbar'
import Hero from '../landing/Hero'
import PartnerMarquee from '../landing/PartnerMarquee'
import WelcomeSection from '../landing/WelcomeSection'
import Features from '../landing/Features'
import Stats from '../landing/Stats'
import Footer from '../Footer'
import UpcomingEvents from '../landing/UpcomingEvents'
import Gallery from '../landing/Gallery'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import FAQ from '../landing/FAQ'
import Testimonials from '../landing/Testimonials'
import EventCountdown from '../landing/EventCountdown'

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <WelcomeSection />
      <Features />
      <UpcomingEvents />
      <EventCountdown />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Stats />
      <Footer />
    </div>
  )
}

export default LandingPage