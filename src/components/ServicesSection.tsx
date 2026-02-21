import { Sparkles, Heart, Camera, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bridal Makeup Packages",
    description:
      "Complete bridal beauty — from engagement to reception. Includes trials, touch-up kits, and draping assistance.",
    price: "₹25,000",
  },
  {
    icon: Sparkles,
    title: "Event & Party Glam",
    description:
      "Look stunning at any occasion — cocktail parties, receptions, festivals, and celebrations.",
    price: "₹8,000",
  },
  {
    icon: Camera,
    title: "Editorial / Photoshoot Makeup",
    description:
      "Fashion-forward looks for photoshoots, magazine features, and creative campaigns.",
    price: "₹12,000",
  },
  {
    icon: GraduationCap,
    title: "Professional Makeup Courses",
    description:
      "Learn the art of professional makeup. Hands-on training with certification for aspiring artists.",
    price: "₹35,000",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="text-center mb-14">
        <h2 className="section-title">Services & Pricing</h2>
        <p className="section-subtitle">
          Tailored makeup artistry for your special moments
        </p>
        <div className="gold-line mx-auto mt-4 bg-rose-500" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="group bg-card border border-border rounded-sm p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-medium text-card-foreground">
                  {service.title}
                </h3>
                <div className="gold-line mt-2 mb-3 bg-rose-500" />
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-body">
                    Starting at{" "}
                    <span className="text-foreground font-semibold">
                      {service.price}
                    </span>
                  </span>
                  <a
                    href="#contact"
                    className="text-sm font-body text-primary text-rose-400 hover:text-rose-600 transition-colors tracking-wide"
                  >
                    Check Availability →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
