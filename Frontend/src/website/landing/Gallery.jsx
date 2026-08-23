import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mockGallery } from "@/data/mockData";

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

const previewGallery = mockGallery.slice(0, 8);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, galleryRef);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section id="gallery" className="px-6 py-20 scroll-mt-24" ref={galleryRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-foreground mb-2">
            Moments Worth Remembering
          </h2>
          <p className="text-muted">
            A glimpse into the events we've helped bring to life.
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4 w-full"
          columnClassName="flex flex-col gap-4"
        >
          {previewGallery.map((item) => (
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

        <div className="text-center mt-10">
  <Link
    to="/gallery"
    className="inline-block rounded-md border border-gold px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/10"
  >
    View Full Gallery →
  </Link>
</div>
      </div>
    </section>
  );
};

export default Gallery;