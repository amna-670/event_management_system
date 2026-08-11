import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/website/Navbar";
import Footer from "../Footer";
import EventCategories from "../landing/EventCategories";
import { CalendarDays, MapPin } from "lucide-react";
import { mockEvents } from "@/data/mockData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventsBanner from "@/assets/events-banner.jpg";

gsap.registerPlugin(ScrollTrigger);

const statusStyles = {
  upcoming: "bg-emerald/30 text-emerald",
  ongoing: "bg-gold/30 text-gold",
  past: "bg-muted/30 text-muted",
};

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const sectionRef = useRef(null);
  const bannerRef = useRef(null);

  const filteredEvents =
    activeCategory === "all"
      ? mockEvents
      : mockEvents.filter((event) => event.category === activeCategory);

  useEffect(() => {
  const ctx = gsap.context(() => {
    // Banner background animation
    gsap.from(".banner-image", {
      scale: 1.15,
      duration: 1.8,
      ease: "power2.out",
    });

    // Banner text animation
    gsap.from(".banner-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.2,
    });

    // Event cards animation
    gsap.from(".event-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

    
<section ref={bannerRef} className="relative overflow-hidden border-b border-border">
  <div
  className="banner-image absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${eventsBanner})`,
  }}
/>

  <div className="absolute inset-0 bg-background/60" />

  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-gold/10" />

  <div className="relative px-6 py-24">
    <div className="max-w-6xl mx-auto text-center">
      <span className="banner-content font-mono text-xs uppercase tracking-[0.2em] text-gold">
  Browse All
</span>

<h1 className="banner-content font-display mt-4 text-4xl sm:text-5xl font-bold text-foreground">
  All Events
</h1>

<p className="banner-content mt-5 text-muted max-w-2xl mx-auto leading-relaxed">
  Explore every expo, conference, concert, and workshop hosted on EventSphere.
</p>
    </div>
  </div>
</section>


      <EventCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section ref={sectionRef} className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-muted py-16">
              No events found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-card bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-colors duration-200 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <span
                      className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium capitalize ${statusStyles[event.status]}`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-mono uppercase tracking-wide text-gold">
                      {event.category}
                    </span>

                    <h3 className="font-display text-lg text-foreground mt-1 mb-2">
                      {event.title}
                    </h3>

                    <p className="text-sm text-muted mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex flex-col gap-1.5 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={14} className="text-gold" />

                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-gold" />

                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;

