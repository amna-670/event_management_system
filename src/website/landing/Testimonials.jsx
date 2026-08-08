import { Quote } from "lucide-react";
import { mockTestimonials } from "@/data/mockData";

const Testimonials = () => {
  return (
    <section className="px-6 py-20">
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
              className="bg-surface border border-border rounded-xl p-6 flex flex-col"
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