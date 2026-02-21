import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`font-heading text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Mehnaz Shahin
          </span>
          <span
            className={`text-[10px] tracking-[0.3em] uppercase font-body transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Makeup Artist
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-body tracking-wide transition-colors duration-500 hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className=" bg-rose-500 hover:bg-rose-600 ml-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-body tracking-wide hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-body text-sm tracking-wide hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-2.5 rounded-full  bg-rose-500 text-primary-foreground text-sm font-body tracking-wide"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
