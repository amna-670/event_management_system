import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { target: 120, suffix: "+", label: "Expos Hosted" },
  { target: 3400, suffix: "+", label: "Exhibitors Onboarded" },
  { target: 85, suffix: "K+", label: "Attendee Check-ins" },
  { target: 99, suffix: "%", label: "Uptime Reliability" },
];

const Stats = () => {
  const numberRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, idx) => {
        const stat = statsData[idx];
        const counter = { val: 0 };

        gsap.to(counter, {
          val: stat.target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toLocaleString() + stat.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="border-t border-border bg-surface px-8 py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
        {statsData.map((stat, idx) => (
          <div key={idx}>
            <p
              ref={(el) => (numberRefs.current[idx] = el)}
              className="font-display text-4xl font-bold text-gold md:text-5xl"
            >
              0{stat.suffix}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;