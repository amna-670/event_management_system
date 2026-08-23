import { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mockGallery } from "@/data/mockData";
import galleryBanner from "@/assets/gallery-banner.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const breakpointColumns = {
  default: 4,
  1024: 3,
  640: 2,
};

const sizeClasses = {
  small: "h-48",
  medium: "h-64",
  large: "h-80",
};

const GalleryPage = () => {
  const galleryRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".gallery-banner-image",
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.6,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".gallery-banner-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, []);

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden border-b border-border">
  <div
    className="gallery-banner-image absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${galleryBanner})` }}
  />

  <div
    className="absolute inset-0"
    style={{ backgroundColor: "var(--image-overlay)" }}
  />

  <div className="relative z-10 text-center">
    <div className="w-full bg-background/50 px-6 py-24">
      <span className="gallery-banner-content font-mono text-xs uppercase tracking-[0.2em] text-gold">
        EventSphere Gallery
      </span>

      <h1 className="gallery-banner-content mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
        Moments Worth Remembering
      </h1>

      <p className="gallery-banner-content mx-auto mt-5 max-w-2xl text-foreground/90">
        Explore the people, places, and moments that bring every EventSphere
        experience to life.
      </p>
    </div>
  </div>
</section>

      <section className="px-6 py-24" ref={galleryRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Full Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Moments Worth Remembering
            </h1>
            <p className="text-muted max-w-lg mx-auto">
              Every expo, every stage, every handshake — captured.
            </p>
          </div>

          <Masonry
            breakpointCols={breakpointColumns}
            className="flex gap-4 w-full"
            columnClassName="flex flex-col gap-4"
          >
            {mockGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-item relative group overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className={`w-full ${sizeClasses[item.size]} object-cover transition-transform duration-300 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-foreground font-medium">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;