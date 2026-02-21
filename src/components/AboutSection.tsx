import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-off-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <div className="relative animate-fade-in">
          <img
            src={artistPortrait}
            alt="Mehnaz Shahin - Professional Makeup Artist"
            className="w-full max-w-md mx-auto lg:mx-0 rounded-sm object-cover shadow-xl"
          />
          {/* bottom-right decorative box removed */}
        </div>

        {/* Content */}
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="section-title text-left">About me</h2>
          <div className="gold-line mt-4 mb-6" />

          <div className="space-y-4 rounded-lg font-body text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Mehnaz Shahin, a Kolkata-based professional makeup artist passionate about enhancing natural beauty. 
              with over 8 years of experience in the beauty industry, I've had
              the privilege of transforming thousands of faces for their most
              cherished moments — from intimate weddings to high-fashion
              editorials.
            </p>

            <p className="font-heading text-lg italic text-foreground">
              "I believe in enhancing natural beauty with elegance, precision,
              and timeless artistry."
            </p>

            <p>
              Trained and certified by leading beauty academies, my approach
              blends global techniques with an understanding of diverse skin
              tones and cultural aesthetics. Every face tells a story — I simply
              help it shine brighter.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                Based in Kolkata, available worldwide
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                Certified professional makeup educator
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                Specializing in bridal, editorial & fashion makeup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;