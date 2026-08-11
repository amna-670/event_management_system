import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { mockEvents } from "@/data/mockData";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const statusStyles = {
  upcoming: "bg-emerald/30 text-emerald",
  ongoing: "bg-gold/30 text-gold",
  past: "bg-muted/30 text-muted",
};

const UpcomingEvents = () => {
  const featuredEvents = mockEvents.filter((event) => event.featured);

  const sectionRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".event-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
    });
  }, sectionRef);
  return () => ctx.revert();
}, []);

  return (
    <section id="events" ref={sectionRef} className="px-6 pb-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-foreground mb-2">
            Upcoming Events
          </h2>
          <p className="text-muted">
            A few highlights from what's happening on EventSphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
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

        <div className="text-center mt-10">
          <Link
            to="/events"
            className="inline-block rounded-md border border-gold px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/10"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;