import React, { useEffect, useRef, useState } from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { mockEvents } from "@/data/mockData";

const EventCountdown = () => {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const nextEvent = mockEvents
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  useEffect(() => {
    if (!nextEvent) return;

    const updateCountdown = () => {
      const difference = new Date(nextEvent.date) - new Date();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [nextEvent]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".countdown-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!nextEvent) return null;

  const countdownItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="p-8 text-center md:p-12">

          <span className="countdown-content font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Next Event
          </span>

          <h2 className="countdown-content mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            {nextEvent.title}
          </h2>

          <div className="countdown-content mt-4 flex flex-wrap justify-center gap-5 text-sm text-muted">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-gold" />
              {new Date(nextEvent.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" />
              {nextEvent.location}
            </span>
          </div>

          <div className="countdown-content mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {countdownItems.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="font-mono text-3xl font-bold text-gold md:text-4xl">
                  {String(value).padStart(2, "0")}
                </div>

                <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/events"
            className="countdown-content mt-8 inline-flex items-center gap-2 rounded-md border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            View Event
            <ArrowRight size={16} />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default EventCountdown;