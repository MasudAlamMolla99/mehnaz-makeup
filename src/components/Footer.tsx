import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 px-6 text-center">
      <a
        href="https://www.instagram.com/mehna_zmakeover"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors text-sm font-body mb-4"
      >
        <Instagram className="w-4 h-4" />
        @mehna_zmakeover
      </a>
      <p className="text-primary-foreground/40 font-body text-xs tracking-wide">
        © 2026 Mehnaz Shahin | Makeup Artist in Kolkata & Worldwide
      </p>
    </footer>
  );
};

export default Footer;
