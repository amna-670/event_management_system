import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mockTestimonials } from "@/data/mockData";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-foreground mb-2">
            What People Are Saying
          </h2>
          <p className="text-muted">
            Real feedback from organizers, exhibitors, and attendees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockTestimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-card bg-surface border border-border rounded-xl p-6 flex flex-col"
            >
              <Quote className="text-gold mb-4" size={28} />
              <p className="text-sm text-foreground mb-6 flex-1">
                "{item.quote}"
              </p>
              <div>
                <p className="font-medium text-foreground text-sm">
                  {item.name}
                </p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;