import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventDate: "",
    location: "",
    people: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integration-ready
    alert("Thank you! Your inquiry has been sent. We'll get back to you soon.");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to book your look? Fill in the details and I'll get back to
            you within 24 hours.
          </p>
          <div className="gold-line mx-auto mt-4 bg-rose-500" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            className="col-span-1 px-5 py-3.5 rounded-sm border border-border bg-card text-card-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            maxLength={255}
            value={form.email}
            onChange={handleChange}
            className="col-span-1 px-5 py-3.5 rounded-sm border border-border bg-card text-card-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className="col-span-1 px-5 py-3.5 rounded-sm border border-border bg-card text-card-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            maxLength={200}
            value={form.location}
            onChange={handleChange}
            className="col-span-1 px-5 py-3.5 rounded-sm border border-border bg-card text-card-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <input
            type="number"
            name="people"
            placeholder="Number of People"
            min={1}
            max={50}
            value={form.people}
            onChange={handleChange}
            className="col-span-1 px-5 py-3.5 rounded-sm border border-border bg-card text-card-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Tell me about your event..."
            rows={4}
            maxLength={1000}
            value={form.message}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 px-5 py-3.5 rounded-sm border border-border bg-card text-card-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          />
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-10  bg-rose-500 hover py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Secure Your Date
            </button>
          </div>
        </form>
      </div>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </section>
  );
};

export default ContactSection;
