import { useLayoutEffect, useRef, useState } from "react";
import { toast } from "sonner";
import gsap from "gsap";
import { Mail, Phone, MapPin, Clock, Send} from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "../Navbar";
import Footer from "../Footer";

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "eventsphere@gmail.com" },
  { icon: Phone, label: "Call Us", value: "+92 300 1234567" },
  { icon: MapPin, label: "Visit Us", value: "Sharah-e-Faisal, Karachi, PK" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9AM – 7PM" },
];

const socials = [FaInstagram, FaLinkedinIn, FaXTwitter];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const containerRef = useRef(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".contact-row", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(".form-field", {
      opacity: 0,
      y: 16,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.4,
    });
  }, containerRef);

  return () => ctx.revert();
}, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
  const isEmpty = Object.values(formData).some((f) => f.trim() === "");
  if (isEmpty) return toast.error("Please fill in all fields before sending.");
  toast.success("Message sent! We'll get back to you shortly.");
  setFormData({ name: "", email: "", subject: "", message: "" });
};

  return (
    <>
    <Navbar />

    <section ref={containerRef} className="relative min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gold/10 blur-3xl animate-float-glow" />
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-28">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
            Let's Start a <span className="text-gold italic">Conversation</span>
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            Questions about hosting, exhibiting, or attending? Drop us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left panel */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-fade-in-up">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h2 className="font-display text-2xl text-foreground mb-6">Convention Floor HQ</h2>
              <div className="flex flex-col gap-5">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="contact-row flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-wider uppercase text-muted mb-0.5">{label}</p>
                      <p className="text-foreground font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">Follow Us</p>
              <div className="flex gap-2">
  {socials.map((Icon, i) => (
    <button
      key={i}
      className="w-9 h-9 rounded-full border border-border text-foreground hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
    >
      <Icon className="w-4 h-4" />
    </button>
  ))}
</div>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-3 bg-surface border border-border rounded-2xl p-8 md:p-10 animate-fade-in-up">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="form-field flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/60 outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="form-field flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/60 outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="form-field flex flex-col gap-2 mb-6">
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Booth availability for Tech Expo 2026"
                className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/60 outline-none focus:border-gold transition-colors"
              />
            </div>

            <div className="form-field flex flex-col gap-2 mb-8">
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us a bit about what you're looking for..."
                className="bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/60 outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="group inline-flex items-center gap-2 bg-gold text-background font-medium px-7 py-3.5 rounded-lg hover:bg-gold/90 transition-colors"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
</>
  );
};

export default Contact;