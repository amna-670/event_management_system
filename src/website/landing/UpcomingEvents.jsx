import { CalendarDays, MapPin } from "lucide-react";
import { mockEvents } from "@/data/mockData";

const statusStyles = {
  upcoming: "bg-emerald/30 text-emerald",
  ongoing: "bg-gold/30 text-gold",
  past: "bg-muted/30 text-muted",
};

const UpcomingEvents = ({ activeCategory }) => {
  const filteredEvents =
    activeCategory === "all"
      ? mockEvents
      : mockEvents.filter((event) => event.category === activeCategory);

  return (
    <section id="events" className="px-6 pb-20 scroll-mt-24">
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
                className="bg-surface border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-colors duration-200 group"
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
  );
};

export default UpcomingEvents;