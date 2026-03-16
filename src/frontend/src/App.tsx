import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    image: "/assets/generated/hero-1.dim_1400x700.jpg",
    subtitle: "Premium Hospitality Solutions",
    title: "Elevate Every Guest Experience",
    desc: "From luxury furniture to bespoke interiors — we furnish the spaces where memories are made.",
  },
  {
    image: "/assets/generated/hero-2.dim_1400x700.jpg",
    subtitle: "Trusted By Leading Hotels",
    title: "Crafted for Comfort & Elegance",
    desc: "Decades of expertise supplying world-class hospitality brands with exceptional interior solutions.",
  },
  {
    image: "/assets/generated/hero-3.dim_1400x700.jpg",
    subtitle: "End-to-End Interior Solutions",
    title: "Your Vision, Beautifully Realised",
    desc: "Custom design, sourcing, and installation — a complete turnkey service for hotels & resorts.",
  },
];

const SERVICES = [
  {
    icon: "🏨",
    title: "Hotel Furnishing",
    desc: "Complete furniture solutions for lobbies, rooms, restaurants, and all hotel spaces.",
  },
  {
    icon: "🛋️",
    title: "Interior Design",
    desc: "Tailored design concepts that reflect your brand identity and delight your guests.",
  },
  {
    icon: "🪵",
    title: "Floor & Wall Cladding",
    desc: "Premium carpeting, vinyl, and wall panel installations by certified specialists.",
  },
  {
    icon: "💡",
    title: "Lighting Design",
    desc: "Atmospheric lighting solutions that set the perfect mood throughout your property.",
  },
  {
    icon: "🔧",
    title: "Renovation Services",
    desc: "Full property renovation and refurbishment to bring tired spaces back to life.",
  },
  {
    icon: "🚚",
    title: "Logistics & Install",
    desc: "Nationwide delivery and professional installation with minimal downtime.",
  },
];

const PRODUCTS = [
  {
    img: "/assets/generated/product-furniture.dim_600x400.jpg",
    cat: "Bedroom",
    name: "Hotel Furniture",
    desc: "Bespoke wardrobes, beds, desks, and casegoods built for hotel durability and style.",
  },
  {
    img: "/assets/generated/product-carpeting.dim_600x400.jpg",
    cat: "Flooring",
    name: "Carpeting & Flooring",
    desc: "Wool and synthetic carpets, tufted and woven, designed for high-traffic hospitality spaces.",
  },
  {
    img: "/assets/generated/product-wallpanel.dim_600x400.jpg",
    cat: "Wall Décor",
    name: "Wall Panels",
    desc: "Fabric, timber, and acoustic wall panels that add texture, warmth, and character.",
  },
  {
    img: "/assets/generated/product-vinyl.dim_600x400.jpg",
    cat: "Flooring",
    name: "Vinyl Flooring",
    desc: "LVT and rigid core vinyl in wood and stone looks — waterproof and exceptionally durable.",
  },
  {
    img: "/assets/generated/product-seating.dim_600x400.jpg",
    cat: "Lounge & Dining",
    name: "Seating Solutions",
    desc: "Chairs, sofas, banquettes, and ottomans crafted for comfort and commercial longevity.",
  },
  {
    img: "/assets/generated/product-lighting.dim_600x400.jpg",
    cat: "Lighting",
    name: "Lighting Fixtures",
    desc: "Pendant, wall, and ceiling lights that create atmosphere in every corner of your hotel.",
  },
  {
    img: "/assets/generated/product-bedframes.dim_600x400.jpg",
    cat: "Bedroom",
    name: "Bed Frames & Headboards",
    desc: "Upholstered and timber bed frames with matching headboard designs for any style.",
  },
  {
    img: "/assets/generated/product-artmirror.dim_600x400.jpg",
    cat: "Accessories",
    name: "Art & Mirrors",
    desc: "Curated artwork, decorative mirrors, and finishing pieces that complete a room's story.",
  },
  {
    img: "/assets/generated/service-renovation.dim_600x400.jpg",
    cat: "Services",
    name: "Full Renovation",
    desc: "End-to-end refurbishment from concept to completion — on time and on budget.",
  },
];

const TESTIMONIALS = [
  {
    text: "Shriji Hospitality transformed our lobby with stunning furniture and flooring. The quality exceeded our expectations and the project was delivered on schedule.",
    name: "Rajesh Mehta",
    title: "GM, The Grand Horizon Hotel",
    initials: "RM",
  },
  {
    text: "Outstanding service from start to finish. The team understood our brand vision perfectly and delivered an interior that our guests consistently compliment.",
    name: "Priya Sharma",
    title: "Director, Heritage Suites Resort",
    initials: "PS",
  },
  {
    text: "We've worked with Shriji on three hotel renovations now. Their attention to detail, product range, and professionalism make them our go-to partner.",
    name: "Anand Patel",
    title: "Owner, Patel Hospitality Group",
    initials: "AP",
  },
];

const PRODUCT_CATEGORIES = [
  "Hotel Furniture",
  "Carpeting & Flooring",
  "Wall Panels",
  "Vinyl Flooring",
  "Seating Solutions",
  "Lighting",
  "Bed Frames",
  "Art & Mirrors",
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  function handleFormChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-inner">
          <button
            type="button"
            className="navbar-logo"
            onClick={() => scrollTo("hero")}
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Shriji Hospitality"
            />
          </button>

          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`navbar-nav-wrap${menuOpen ? " open" : ""}`}>
            <ul className="navbar-nav">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("hero")}
                  data-ocid="nav.link"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("services")}
                  data-ocid="nav.link"
                >
                  Services
                </button>
              </li>
              <li>
                <button type="button" data-ocid="nav.dropdown_menu">
                  Products <span className="nav-caret">▾</span>
                </button>
                <ul className="dropdown-menu">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => scrollTo("products")}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("testimonials")}
                  data-ocid="nav.link"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  data-ocid="nav.link"
                >
                  Contact
                </button>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => scrollTo("quote")}
              className="navbar-quote-btn"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO SLIDER ===== */}
      <section id="hero" className="hero-slider">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className={`hero-slide${i === activeSlide ? " active" : ""}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="hero-text">
                <p className="hero-subtitle">{slide.subtitle}</p>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-desc">{slide.desc}</p>
                <button
                  type="button"
                  onClick={() => scrollTo("quote")}
                  className="hero-btn"
                  data-ocid="hero.primary_button"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="hero-arrow prev"
          onClick={() =>
            setActiveSlide((p) => (p - 1 + SLIDES.length) % SLIDES.length)
          }
          aria-label="Previous slide"
          data-ocid="hero.pagination_prev"
        >
          ‹
        </button>
        <button
          type="button"
          className="hero-arrow next"
          onClick={nextSlide}
          aria-label="Next slide"
          data-ocid="hero.pagination_next"
        >
          ›
        </button>

        <div className="hero-slider-controls">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={`slider-dot${i === activeSlide ? " active" : ""}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">
              Comprehensive Hospitality Solutions
            </h2>
            <div className="section-divider" />
            <p className="section-desc">
              From concept through to completion, Shriji Hospitality delivers
              the full spectrum of interior furnishing and design services for
              the hospitality industry.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="service-card"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="products-section">
        <div className="products-container">
          <div className="products-header">
            <p className="section-label">Our Range</p>
            <h2 className="section-title">Premium Hospitality Products</h2>
            <div className="section-divider" />
            <p className="section-desc">
              Browse our extensive range of hospitality-grade furniture,
              flooring, lighting, and décor — all designed to meet the demands
              of commercial environments.
            </p>
          </div>
          <div className="products-grid" data-ocid="products.list">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.name}
                className="product-card"
                data-ocid={`products.item.${i + 1}`}
              >
                <img src={p.img} alt={p.name} className="product-img" />
                <div className="product-info">
                  <p className="product-category">{p.cat}</p>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUOTE FORM ===== */}
      <section id="quote" className="quote-section">
        <div className="quote-container">
          <div className="quote-header">
            <p className="section-label">Work With Us</p>
            <h2 className="section-title">Get a Free Quote</h2>
            <div className="section-divider" />
            <p className="section-desc">
              Tell us about your project and our team will be in touch within 24
              hours with a tailored proposal.
            </p>
          </div>

          {submitted ? (
            <div className="quote-success" data-ocid="quote.success_state">
              <div className="quote-success-icon">✅</div>
              <h3 className="quote-success-title">Thank You!</h3>
              <p className="quote-success-desc">
                We&apos;ve received your enquiry and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              className="quote-form"
              onSubmit={handleSubmit}
              data-ocid="quote.modal"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    data-ocid="quote.input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@hotel.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    data-ocid="quote.input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleFormChange}
                    data-ocid="quote.input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hotel">Hotel / Property Name</label>
                  <input
                    id="hotel"
                    name="hotel"
                    type="text"
                    placeholder="The Grand Palace Hotel"
                    value={formData.hotel}
                    onChange={handleFormChange}
                    data-ocid="quote.input"
                  />
                </div>
              </div>
              <div className="form-group form-group-full">
                <label htmlFor="service">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  data-ocid="quote.select"
                >
                  <option value="">Select a service...</option>
                  <option>Hotel Furniture Supply</option>
                  <option>Carpeting &amp; Flooring</option>
                  <option>Wall Panels</option>
                  <option>Lighting Design</option>
                  <option>Full Room Renovation</option>
                  <option>Complete Interior Package</option>
                </select>
              </div>
              <div className="form-group form-group-full">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project — number of rooms, timeline, special requirements..."
                  value={formData.message}
                  onChange={handleFormChange}
                  data-ocid="quote.textarea"
                />
              </div>
              <div className="form-submit">
                <button
                  type="submit"
                  className="submit-btn"
                  data-ocid="quote.submit_button"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <p className="section-label">Client Stories</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-divider" />
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="testimonial-card"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="testimonial-quote">&ldquo;</div>
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <p className="author-name">{t.name}</p>
                    <p className="author-title">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="site-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="/assets/generated/logo-transparent.dim_300x80.png"
                alt="Shriji Hospitality"
              />
              <p>
                Your trusted partner for premium hospitality interiors.
                Supplying hotels, resorts, and serviced apartments across India
                with quality furniture, flooring, and décor.
              </p>
              <div className="footer-social">
                <button
                  type="button"
                  className="social-link"
                  aria-label="Facebook"
                  data-ocid="footer.link"
                >
                  f
                </button>
                <button
                  type="button"
                  className="social-link"
                  aria-label="Instagram"
                  data-ocid="footer.link"
                >
                  in
                </button>
                <button
                  type="button"
                  className="social-link"
                  aria-label="LinkedIn"
                  data-ocid="footer.link"
                >
                  li
                </button>
                <button
                  type="button"
                  className="social-link"
                  aria-label="Twitter"
                  data-ocid="footer.link"
                >
                  tw
                </button>
              </div>
            </div>

            <div>
              <p className="footer-col-title">Quick Links</p>
              <ul className="footer-links">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("hero")}
                    data-ocid="footer.link"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("services")}
                    data-ocid="footer.link"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("products")}
                    data-ocid="footer.link"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("quote")}
                    data-ocid="footer.link"
                  >
                    Get a Quote
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("testimonials")}
                    data-ocid="footer.link"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Products</p>
              <ul className="footer-links">
                {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                  <li key={cat}>
                    <button type="button" onClick={() => scrollTo("products")}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Contact Us</p>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>
                  Office No. 101, Business Hub, Sector 12, Navi Mumbai – 400
                  614, Maharashtra, India
                </span>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <span>info@shrijihospitality.com</span>
              </div>
              <div className="footer-contact-item">
                <span>🕒</span>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {year} Shriji Hospitality. All rights reserved.</span>
            <span>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
