import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-3xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="gold-line mx-auto mb-6 bg-rose-500" />
        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-primary-foreground font-medium leading-tight tracking-tight">
          Elevating Beauty Into Timeless Art
        </h1>
        <p className="mt-4 text-primary-foreground/80 font-body text-base md:text-lg tracking-wide">
          Bridal & Editorial Makeup Artist | Kolkata & Worldwide
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-white   bg-rose-500 hover:bg-rose-600 font-medium text-sm tracking-widest   transition-opacity"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full border border-primary-foreground/60 text-primary-foreground font-body text-sm tracking-widest  hover:bg-primary-foreground/10 transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
