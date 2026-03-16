import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Handshake,
  HardHat,
  Layers,
  Lightbulb,
  MapPin,
  Menu,
  Package,
  Palette,
  Phone,
  RectangleEllipsis,
  Sofa,
  Star,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const heroSlides = [
  {
    image: "/assets/generated/hero-1.dim_1400x700.jpg",
    title: "First Shriji Hospitality",
    subtitle:
      "Full-service FF&E and renovation solutions crafted to elevate hotel and motel interiors nationwide.",
    cta: "Learn More",
    ctaHref: "#about",
    ocid: "hero.slide.1",
    ctaOcid: "hero.cta.1.button",
  },
  {
    image: "/assets/generated/hero-2.dim_1400x700.jpg",
    title: "Expert Consultation",
    subtitle:
      "Over 18 years of delivering strategic FF&E, design, and renovation solutions for hospitality brands.",
    cta: "Contact Us",
    ctaHref: "#contact",
    ocid: "hero.slide.2",
    ctaOcid: "hero.cta.2.button",
  },
  {
    image: "/assets/generated/hero-3.dim_1400x700.jpg",
    title: "Coast to Coast Service",
    subtitle:
      "Providing full and partial renovation solutions for hotels and motels across the United States.",
    cta: "Our Services",
    ctaHref: "#services",
    ocid: "hero.slide.3",
    ctaOcid: "hero.cta.3.button",
  },
];

const services = [
  {
    icon: HardHat,
    title: "Hotel Renovation",
    desc: "Complete hotel and motel renovation designed to upgrade interiors, improve functionality, and elevate guest experience.",
  },
  {
    icon: Layers,
    title: "Luxury Flooring",
    desc: "Durable and stylish flooring options including carpeting and luxury vinyl plank tailored for high-traffic hospitality environments.",
  },
  {
    icon: RectangleEllipsis,
    title: "Window Treatments",
    desc: "Thoughtfully selected window treatments and décor elements that complement your interior design while enhancing guest comfort.",
  },
  {
    icon: Palette,
    title: "Surface Finishes",
    desc: "Carefully planned materials and finishes that balance aesthetics, durability, and long-term value for hospitality interiors.",
  },
  {
    icon: Sofa,
    title: "Furniture & FF&E",
    desc: "High-quality furniture and FF&E solutions selected to match your brand, budget, and operational needs.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    desc: "Functional and aesthetic lighting solutions designed to enhance ambience, improve visibility, and elevate the guest experience.",
  },
];

const products = [
  {
    title: "Furniture",
    image: "/assets/generated/product-furniture.dim_600x400.jpg",
    desc: "High-quality, durable furniture designed specifically for hotel and motel interiors.",
  },
  {
    title: "Carpeting",
    image: "/assets/generated/product-carpeting.dim_600x400.jpg",
    desc: "Comfortable and long-lasting carpeting ideal for high-traffic hospitality spaces.",
  },
  {
    title: "Luxury Vinyl Plank",
    image: "/assets/generated/product-vinyl.dim_600x400.jpg",
    desc: "Stylish, moisture-resistant flooring combining durability with a premium look.",
  },
  {
    title: "Wall Panel",
    image: "/assets/generated/product-wallpanel.dim_600x400.jpg",
    desc: "Modern wall panels that add texture, depth, and character to interior spaces.",
  },
  {
    title: "Lighting",
    image: "/assets/generated/product-lighting.dim_600x400.jpg",
    desc: "Functional and decorative lighting solutions that enhance ambience and visibility.",
  },
  {
    title: "Seating",
    image: "/assets/generated/product-seating.dim_600x400.jpg",
    desc: "Ergonomic and comfortable seating options crafted for guest comfort and longevity.",
  },
  {
    title: "Bed Frames",
    image: "/assets/generated/product-bedframes.dim_600x400.jpg",
    desc: "Strong, well-crafted bed frames designed for comfort, support, and long-term durability.",
  },
  {
    title: "Art & Mirror",
    image: "/assets/generated/product-artmirror.dim_600x400.jpg",
    desc: "Carefully selected artwork and mirrors that enhance space, light, and interior aesthetics.",
  },
];

const testimonials = [
  {
    quote:
      "Great service, selection and price, highly recommended. Shyam and his team delivered beyond our expectations.",
    name: "Peter Patel",
    hotel: "Holiday Inn, CO",
    stars: 5,
  },
  {
    quote:
      "Great customer service by everyone at First Shriji Hospitality; from start to finish. Our renovation was seamless.",
    name: "Anil Fernando",
    hotel: "Baymont Inn, CA",
    stars: 5,
  },
  {
    quote:
      "Easy and affordable process. We have been with Shyam for over 10 years now. Great company.",
    name: "Raj Singh",
    hotel: "Comfort Inn, MI",
    stars: 5,
  },
];

const productCheckboxes = [
  { id: "furniture", label: "Furniture", ocid: "quote.furniture.checkbox" },
  { id: "carpeting", label: "Carpeting", ocid: "quote.carpeting.checkbox" },
  { id: "vinyl", label: "Luxury Vinyl Plank", ocid: "quote.vinyl.checkbox" },
  { id: "wallpanel", label: "Wall Panel", ocid: "quote.wallpanel.checkbox" },
  { id: "lighting", label: "Lighting", ocid: "quote.lighting.checkbox" },
  { id: "seating", label: "Seating", ocid: "quote.seating.checkbox" },
  { id: "bedframes", label: "Bed Frames", ocid: "quote.bedframes.checkbox" },
  { id: "artmirror", label: "Art & Mirror", ocid: "quote.artmirror.checkbox" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropOpen, setProductsDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const sliderRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    sliderRef.current = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroSlides.length);
    }, 5000);
    return () => {
      if (sliderRef.current) clearInterval(sliderRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    if (sliderRef.current) clearInterval(sliderRef.current);
    sliderRef.current = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroSlides.length);
    }, 5000);
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const navLinks = [
    { label: "Home", href: "#top", ocid: "nav.home.link" },
    { label: "About Us", href: "#about", ocid: "nav.about.link" },
    { label: "Services", href: "#services", ocid: "nav.services.link" },
    { label: "Financing", href: "#quote" },
    { label: "Contact Us", href: "#contact", ocid: "nav.contact.link" },
  ];

  return (
    <div id="top" className="min-h-screen font-body">
      <Toaster />

      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1">
          <span className="flex items-center gap-1.5">
            <Phone size={12} />
            Cell: (331) 575-0939 &nbsp;|&nbsp; Office: (630) 225-5915
          </span>
          <span className="flex items-center gap-1.5 opacity-80">
            <MapPin size={12} />
            1461 W. Tallyho Court Addison, IL 60101
          </span>
        </div>
      </div>

      {/* ─── Sticky Navbar ─── */}
      <header
        className={`sticky top-0 z-50 navbar-gold-line transition-all duration-500 ${
          scrolled ? "navbar-glass" : "navbar-base"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-shrink-0 group"
              aria-label="Go to top"
            >
              <img
                src="/assets/generated/logo-transparent.dim_300x80.png"
                alt="First Shriji Hospitality"
                className="h-10 md:h-14 w-auto object-contain brightness-200 group-hover:brightness-[2.5] transition-all duration-300"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  data-ocid={link.ocid}
                  className="nav-link"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              ))}

              {/* Products Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  data-ocid="nav.products.link"
                  className="nav-link flex items-center gap-1"
                  onClick={() => setProductsDropOpen(!productsDropOpen)}
                  onBlur={() =>
                    setTimeout(() => setProductsDropOpen(false), 150)
                  }
                >
                  Products
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: productsDropOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      color: productsDropOpen ? "#f0c060" : "currentColor",
                    }}
                  />
                </button>

                {productsDropOpen && (
                  <div className="products-dropdown">
                    <div className="dropdown-header">Our Products</div>
                    {products.map((p) => (
                      <button
                        key={p.title}
                        type="button"
                        className="dropdown-item"
                        onClick={() => {
                          handleNavClick("#products");
                          setProductsDropOpen(false);
                        }}
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Specials + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-ocid="nav.specials.button"
                className="btn-specials hidden sm:inline-block"
                onClick={() => handleNavClick("#quote")}
              >
                ✦ Specials
              </button>
              <button
                type="button"
                data-ocid="nav.mobile.toggle"
                className="nav-hamburger lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mobile-menu-panel">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {[
                ...navLinks,
                {
                  label: "Products",
                  href: "#products",
                  ocid: "nav.products.link",
                },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  data-ocid={item.ocid}
                  className="mobile-nav-item"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                data-ocid="nav.specials.button"
                className="btn-specials mt-3 text-center"
                onClick={() => handleNavClick("#quote")}
              >
                ✦ Specials
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Slider */}
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.ocid}
              data-ocid={slide.ocid}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-6 animate-slide-in">
                  <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                    Welcome to First Shriji Hospitality
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <button
                    type="button"
                    data-ocid={slide.ctaOcid}
                    className="btn-gold"
                    onClick={() => handleNavClick(slide.ctaHref)}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            data-ocid="hero.prev.button"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2.5 transition-all duration-200 hover:scale-110"
            onClick={() =>
              goToSlide(
                (currentSlide - 1 + heroSlides.length) % heroSlides.length,
              )
            }
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            data-ocid="hero.next.button"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2.5 transition-all duration-200 hover:scale-110"
            onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={`dot-${idx}-${heroSlides[idx].ocid}`}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 h-3 bg-gold"
                    : "w-3 h-3 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="section-subtitle">About Us</p>
                <h2 className="section-title">First Shriji Hospitality</h2>
                <p className="text-muted-foreground text-sm font-semibold mb-5 italic">
                  We Have the Right Products to Fit Your Needs and Budget
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  At First Shriji Hospitality, we specialize in delivering
                  thoughtful FF&E and interior solutions for hotels and motels.
                  Our team focuses on balancing design, functionality, and cost
                  to create spaces that enhance guest experience while aligning
                  with your brand goals.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  From full-scale renovations to carefully curated furnishings,
                  flooring, and lighting, we manage every detail with precision
                  and transparency. With a collaborative approach and years of
                  industry experience, we help hospitality owners bring their
                  vision to life while ensuring durability, efficiency, and
                  long-term value.
                </p>
                <div className="border-l-4 border-gold pl-4 py-2 bg-secondary rounded-r-lg">
                  <p className="text-foreground italic font-medium">
                    &ldquo;Our goal is to deliver spaces that guests remember
                    and owners are proud of.&rdquo;
                  </p>
                  <p className="text-sm font-bold text-primary mt-2">
                    — Shyam Ahuja, Founder, First Shriji Hospitality
                  </p>
                </div>
              </div>

              <div>
                <div className="relative">
                  <img
                    src="/assets/generated/about-team.dim_600x500.jpg"
                    alt="Our team"
                    className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                  {[
                    {
                      icon: CheckSquare,
                      title: "Awesome Team",
                      sub: "Professionals",
                    },
                    {
                      icon: Package,
                      title: "Faster Performance",
                      sub: "Process Driven",
                    },
                    {
                      icon: Handshake,
                      title: "Excellent Support",
                      sub: "Client Focused",
                    },
                  ].map((pill) => (
                    <div
                      key={pill.title}
                      className="flex flex-col items-center text-center p-4 bg-secondary rounded-xl border border-border"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <pill.icon size={18} className="text-primary" />
                      </div>
                      <p className="font-bold text-sm text-primary">
                        {pill.title}
                      </p>
                      <p className="text-xs text-gold font-semibold">
                        {pill.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subtitle">What We Do</p>
              <h2 className="section-title">Our Best Services</h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <div
                  key={svc.title}
                  data-ocid={`services.item.${i + 1}`}
                  className="service-card group"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500 rounded-l-lg" />
                  <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <svc.icon
                      size={26}
                      className="text-primary group-hover:text-gold transition-colors"
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <button
                    type="button"
                    className="text-gold font-semibold text-sm hover:underline flex items-center gap-1"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Read More <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="section-subtitle">What We Offer</p>
              <h2 className="section-title">Our Products</h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((prod, i) => (
                <div
                  key={prod.title}
                  data-ocid={`products.item.${i + 1}`}
                  className="product-card group"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-base text-primary mb-2">
                      {prod.title}
                    </h3>
                    <p className="text-foreground/70 text-xs leading-relaxed mb-4">
                      {prod.desc}
                    </p>
                    <button
                      type="button"
                      className="btn-gold text-xs py-2 px-4 inline-block"
                      onClick={() => handleNavClick("#quote")}
                    >
                      View Products
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                18+ Years of Excellence
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Built for Hospitality Excellence
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Complete FF&E &amp; Interior Solutions for Hotels &amp; Motels
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  data-ocid="cta.quote.button"
                  className="btn-gold"
                  onClick={() => handleNavClick("#quote")}
                >
                  Request a Quote
                </button>
                <button
                  type="button"
                  data-ocid="cta.explore.button"
                  className="btn-outline-white"
                  onClick={() => handleNavClick("#services")}
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-4">
              {[
                {
                  icon: HardHat,
                  title: "Full Renovation",
                  desc: "Comprehensive hotel and motel renovation services designed to modernize interiors, improve functionality, and enhance the overall guest experience.",
                },
                {
                  icon: Package,
                  title: "FF&E Supply",
                  desc: "High-quality furniture, fixtures, and equipment carefully selected to match your brand standards, operational needs, and long-term durability requirements.",
                },
                {
                  icon: Handshake,
                  title: "Trusted Partner",
                  desc: "A reliable hospitality partner with proven experience delivering consistent results through transparent communication, planning, and nationwide project execution.",
                },
              ].map((box) => (
                <div
                  key={box.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <box.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-display text-white font-bold text-lg mb-2">
                    {box.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section id="quote" className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="section-subtitle">Our Expertise</p>
                <h2 className="section-title">
                  Designed for Hotels &amp; Motels
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  We are dedicated to delivering thoughtful hotel and motel
                  interiors that balance comfort, functionality, and design.
                  Every project is completed with care and attention to detail.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Handshake,
                      title: "Client Focus",
                      desc: "We prioritize your satisfaction and complete projects only when expectations are met.",
                    },
                    {
                      icon: Star,
                      title: "Guest First",
                      desc: "Designs are planned from the guest's perspective for real-world comfort and usability.",
                    },
                    {
                      icon: Lightbulb,
                      title: "Clear Vision",
                      desc: "We help define an interior vision that aligns with your brand and business goals.",
                    },
                    {
                      icon: Building2,
                      title: "Reliable Team",
                      desc: "Our experienced team ensures smooth execution from planning to completion.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                        <item.icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-primary">
                          {item.title}
                        </p>
                        <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
                <p className="section-subtitle">Get in Touch</p>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Request for Free Quotation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Select Products:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {productCheckboxes.map((cb) => (
                        <div key={cb.id} className="flex items-center gap-2">
                          <Checkbox id={cb.id} data-ocid={cb.ocid} />
                          <Label
                            htmlFor={cb.id}
                            className="text-sm cursor-pointer"
                          >
                            {cb.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        data-ocid="quote.name.input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        data-ocid="quote.phone.input"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="quote.email.input"
                      placeholder="you@hotel.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="quote.message.textarea"
                      placeholder="Tell us about your project…"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    data-ocid="quote.submit_button"
                    className="w-full bg-accent text-accent-foreground hover:brightness-110 font-semibold uppercase tracking-wide"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Testimonials
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                What Our Clients Say
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star
                        key={`star-${t.name}-${si}`}
                        size={16}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-white/90 italic leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-gold text-xs">{t.hotel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#0f1c2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <img
                src="/assets/generated/logo-transparent.dim_300x80.png"
                alt="First Shriji Hospitality"
                className="h-12 w-auto object-contain mb-4 brightness-150"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                First Shriji Hospitality is a full-service FF&E company
                providing expert consultation, renovation solutions, and quality
                furnishings for hotels and motels nationwide.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-base mb-4 text-gold">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#top", ocid: "footer.home.link" },
                  { label: "About Us", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Financing", href: "#quote" },
                  {
                    label: "Contact Us",
                    href: "#contact",
                    ocid: "footer.contact.link",
                  },
                  { label: "Specials", href: "#quote" },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      data-ocid={link.ocid}
                      className="text-white/70 hover:text-gold text-sm transition-colors flex items-center gap-2"
                      onClick={() => handleNavClick(link.href)}
                    >
                      <ChevronRight size={12} className="text-gold" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-base mb-4 text-gold">
                Products
              </h4>
              <ul className="space-y-2">
                {products.map((p) => (
                  <li key={p.title}>
                    <button
                      type="button"
                      className="text-white/70 hover:text-gold text-sm transition-colors flex items-center gap-2"
                      onClick={() => handleNavClick("#products")}
                    >
                      <ChevronRight size={12} className="text-gold" />
                      {p.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-base mb-4 text-gold">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/70 text-sm">
                    1461 W. Tallyho Court
                    <br />
                    Addison, IL 60101
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span className="text-white/70 text-sm">(331) 575-0939</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span className="text-white/70 text-sm">(630) 225-5915</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
            <p>
              © {new Date().getFullYear()} First Shriji Hospitality. All Rights
              Reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
