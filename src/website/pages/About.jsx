
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  LayoutGrid,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { gsap } from "gsap";
import Navbar from "@/website/Navbar";
import Footer from "../Footer";
import aboutBanner from "@/assets/about-banner.jpg";

const roles = [
  {
    title: "Organizers & Admins",
    icon: Building2,
    color: "text-gold",
    description:
      "Create expos, assign booth space, and manage event operations.",
    features: [
      "Floor plan booth allocation",
      "Manage event schedules",
      "Real-time reports",
    ],
  },
  {
    title: "Exhibitors",
    icon: LayoutGrid,
    color: "text-emerald",
    description:
      "Register profiles, choose booths, and showcase your products.",
    features: [
      "Reserve booth locations",
      "Update profile details",
      "Message neighboring booths",
    ],
  },
  {
    title: "Attendees",
    icon: Users,
    color: "text-gold",
    description:
      "Explore events, find exhibitors, and manage your sessions.",
    features: [
      "View interactive floor plans",
      "Filter exhibitor lists",
      "Bookmark sessions",
    ],
  },
];

const About = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-banner-image", {
        scale: 1.15,
        duration: 1.6,
        ease: "power2.out",
      });

      gsap.from(".about-banner-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section
  ref={bannerRef}
  className="relative overflow-hidden border-b border-border"
>
  <div
    className="about-banner-image absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${aboutBanner})` }}
  />

  <div
    className="absolute inset-0"
    style={{ backgroundColor: "var(--image-overlay)" }}
  />

  <div className="relative z-10 text-center">
    <div className="w-full bg-background/70 px-6 py-24">
      <span className="about-banner-content font-mono text-xs uppercase tracking-[0.2em] text-gold">
        The EventSphere Experience
      </span>

      <h1 className="about-banner-content mt-4 font-display text-4xl font-bold sm:text-5xl text-foreground">
        Where Events Come Together
      </h1>

      <p className="about-banner-content mx-auto mt-5 max-w-2xl text-foreground/90">
        A unified platform designed to connect organizers, exhibitors, and
        attendees throughout every stage of an event.
      </p>
    </div>
  </div>
</section>

      <main className="min-h-screen bg-background px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["99%", "Target Uptime"],
              ["< 2s", "Response Time"],
              ["100+", "Concurrent Users"],
              ["50+", "Events Hosted"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-surface p-4 rounded-lg border border-border text-center"
              >
                <p className="text-2xl font-bold text-gold">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>

          {/* Roles */}
          <section>
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Built for Three Main Users
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {roles.map(({ title, icon: Icon, color, description, features }) => (
                <div
                  key={title}
                  className="bg-surface p-6 rounded-lg border border-border space-y-3"
                >
                  <Icon className={`w-8 h-8 ${color}`} />

                  <h3 className="font-bold text-lg">{title}</h3>

                  <p className="text-xs text-muted">{description}</p>

                  <ul className="text-xs space-y-2 pt-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Features */}
          <section className="bg-surface/50 p-6 md:p-8 rounded-lg border border-border">
            <h2 className="font-display text-xl font-bold mb-6">
              Key Technical Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Zap className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Fast Response Time</h4>
                  <p className="text-xs text-muted">
                    Built for fast and responsive user interactions.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">
                    Secure Authentication
                  </h4>
                  <p className="text-xs text-muted">
                    Role-based access control with secure authentication.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
