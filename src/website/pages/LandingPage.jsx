import React from 'react'
import Navbar from '@/website/Navbar'
import Hero from '../landing/Hero'
import PartnerMarquee from '../landing/PartnerMarquee'
import WelcomeSection from '../landing/WelcomeSection'
import Features from '../landing/Features'
import Stats from '../landing/Stats'
import Footer from '../landing/Footer'
import EventCategories from '../landing/EventCategories'
import UpcomingEvents from '../landing/UpcomingEvents'
import { useState } from 'react'
import Gallery from '../landing/Gallery'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'
import FAQ from '../landing/FAQ'
import Testimonials from '../landing/Testimonials'

const LandingPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return(
  <div className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <PartnerMarquee />
    <WelcomeSection />
    <Features />
    <EventCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
<UpcomingEvents activeCategory={activeCategory} />
<Gallery />
<Testimonials />
<FAQ />
    <Stats />
    <Footer />
  </div>
)
}

export default LandingPage