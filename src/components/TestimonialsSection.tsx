import { Star, Instagram } from "lucide-react";

const testimonials = [
  {
    name: "Priya Mukherjee",
    event: "Bride",
    text: "Mehnaz made me feel like the most beautiful bride. Her attention to detail and calming presence made my wedding day even more special.",
    stars: 5,
  },
  {
    name: "Ananya Sen",
    event: "Editorial Shoot",
    text: "Working with Mehnaz was a dream. She understood the creative brief perfectly and delivered stunning, camera-ready looks every time.",
    stars: 5,
  },
  {
    name: "Rishika Dey",
    event: "Engagement",
    text: "I received so many compliments on my engagement look! Mehnaz truly understands how to enhance natural beauty with elegance.",
    stars: 5,
  },
];

const instagramGrid = [
  "portfolio-bridal-1",
  "portfolio-editorial-1",
  "portfolio-occasion-1",
  "portfolio-bridal-2",
  "portfolio-transform-1",
  "portfolio-editorial-2",
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="text-center mb-14">
        <h2 className="section-title">Loved by Brides & Clients Worldwide</h2>
        <p className="section-subtitle">
     Don't just take my word for it - hear from my happy clients
        </p>
        <div className="gold-line mx-auto mt-4 bg-rose-500" />
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-card border border-border rounded-sm p-6 animate-fade-in"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 fill-rose-500 text-rose-500"
                />
              ))}
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <div>
              <p className="font-heading text-sm font-medium text-card-foreground">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground font-body">
                {t.event}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* As Seen In */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body mb-6">
          As Seen In
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-40">
          {["Vogue India", "Elle", "Femina", "Brides Today"].map((brand) => (
            <span
              key={brand}
              className="font-heading text-lg md:text-xl text-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Instagram Preview */}
      <div className="text-center">
        <a
          href="https://www.instagram.com/mehna_zmakeover"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <Instagram className="w-4 h-4" />
          Follow @mehna_zmakeover
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
