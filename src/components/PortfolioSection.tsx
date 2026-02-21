import { useState } from "react";
import { X } from "lucide-react";

import bridal1 from "@/assets/portfolio-bridal-1.jpg";
import bridal2 from "@/assets/portfolio-bridal-2.jpg";
import editorial1 from "@/assets/portfolio-editorial-1.jpg";
import editorial2 from "@/assets/portfolio-editorial-2.jpg";
import occasion1 from "@/assets/portfolio-occasion-1.jpg";
import transform1 from "@/assets/portfolio-transform-1.jpg";

type Category = "all" | "bridal" | "editorial" | "occasion" | "transformation";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "bridal", label: "Bridal Makeup" },
  { key: "editorial", label: "Editorial / Fashion" },
  { key: "occasion", label: "Special Occasion" },
  { key: "transformation", label: "Transformations" },
];

const images: { src: string; alt: string; category: Category }[] = [
  { src: bridal1, alt: "Traditional bridal look", category: "bridal" },
  { src: editorial1, alt: "Editorial glam", category: "editorial" },
  { src: occasion1, alt: "Party glam look", category: "occasion" },
  { src: bridal2, alt: "Pink bridal look", category: "bridal" },
  { src: transform1, alt: "Before & after transformation", category: "transformation" },
  { src: editorial2, alt: "Fashion editorial", category: "editorial" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "all" ? images : images.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="section-padding bg-off-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          Explore my work and see the artistry behind every look
        </p>
        <div className="gold-line mx-auto mt-4 bg-rose-500" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-body tracking-wide transition-all duration-300 ${
              active === cat.key
                ? "bg-primary text-primary-foreground  bg-rose-500 font-medium"
                : "bg-background text-muted-foreground hover:text-foreground font-medium border border-border"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((img, i) => (
          <div
            key={img.src + i}
            className="group relative overflow-hidden rounded-sm cursor-pointer animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
            onClick={() => setLightbox(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
        className="w-full h-80 sm:h-96 lg:h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Portfolio"
            className="max-h-[85vh] max-w-full object-contain rounded-sm"
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
