import React, { useState } from "react";
import "./v2-landing.css";
import { ServicesSection, TestimonialsSection, HowItWorksSection } from "./LandingSections.jsx";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/ca145df1-e216-4f40-a0f3-96fc3f47f8b0.svg",
  brandMobile: "https://www.figma.com/api/mcp/asset/492cb73a-8d47-4b88-b723-6c2d61a52e5f.svg",
  menu: "https://www.figma.com/api/mcp/asset/26d276ca-9ab5-4580-a637-68e8cef18c45.svg",
  live: "https://www.figma.com/api/mcp/asset/cb414880-76dd-42c4-a389-134149b7fcfd.svg",
  hero1: "https://www.figma.com/api/mcp/asset/5db21ca1-9991-4422-810f-3ef03cd2417b.png",
  hero2: "https://www.figma.com/api/mcp/asset/1a67fc85-e18f-4714-bf72-e3cd032b38b8.png",
  hero3: "https://www.figma.com/api/mcp/asset/60f5daa3-5f36-4986-b34b-58f5fa757f63.png",
  hero4: "https://www.figma.com/api/mcp/asset/bd95362b-0e5d-4a3b-ac61-548dfb646685.png",
  hero5: "https://www.figma.com/api/mcp/asset/dde1f35a-0eda-4011-b9ee-8374788e777c.png",
  hero6: "https://www.figma.com/api/mcp/asset/5e1dea46-8bb2-4ba1-913a-cd90eb2223b3.png",
  statBusiness: "https://www.figma.com/api/mcp/asset/35ad8c59-1654-46dd-8fb6-f953aa7db4e5.svg",
  statInfluencers: "https://www.figma.com/api/mcp/asset/cfd0f753-50bd-499b-8bc5-2ed86bd5c214.svg",
  statCountries: "https://www.figma.com/api/mcp/asset/253fc3f2-df23-495e-9739-c1512db53c26.svg",
  statTrust: "https://www.figma.com/api/mcp/asset/368cb1cc-103b-40df-ae50-6febc564a0bf.svg",
};

const navItems = [
  ["Home", "#top"],
  ["Services", "#services"],
  ["Testimonials", "#testimonials"],
  ["How It Works", "#how-it-works"],
  ["Who It's For", "#who-its-for"],
  ["Offerings", "#offerings"],
  ["FAQs", "#faqs"],
];

const stats = [
  [assets.statBusiness, "7K+", "Businesses & Clients"],
  [assets.statInfluencers, "200k+", "Nano-Influencers"],
  [assets.statCountries, "2", "Countries"],
  [assets.statTrust, "98%", "Message Trust Rate"],
];

function DesktopNav() {
  return (
    <header className="v2-nav v2-nav-desktop">
      <a className="v2-brand" href="#top" aria-label="The Nano Influencers home">
        <img src={assets.brand} alt="" />
        <span>The Nano Influencers</span>
      </a>
      <nav className="v2-nav-links" aria-label="Main navigation">
        {navItems.map(([label, href], index) => (
          <a className={index === 0 ? "active" : ""} href={href} key={label}>{label}</a>
        ))}
      </nav>
      <div className="v2-nav-actions">
        <a className="v2-btn v2-btn-nav" href="/login">Log In</a>
        <a className="v2-btn v2-btn-primary" href="/register">Get Started</a>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="v2-nav v2-nav-mobile">
        <a className="v2-brand" href="#top" aria-label="The Nano Influencers home">
          <img src={assets.brandMobile} alt="" />
          <span>The Nano Influencers</span>
        </a>
        <button className="v2-menu-btn" type="button" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <img src={assets.menu} alt="" />
        </button>
      </header>
      {open && (
        <div className="v2-mobile-menu">
          {navItems.slice(1).map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="/login">Log In</a>
          <a className="v2-mobile-menu-cta" href="/register">Get Started</a>
        </div>
      )}
    </>
  );
}

function FloatingImage({ src, className, alt = "Nano influencer" }) {
  return <figure className={`v2-floating-image ${className}`}><img src={src} alt={alt} /></figure>;
}

function StatCard({ icon, value, label }) {
  return (
    <article className="v2-stat-card">
      <div className="v2-stat-value"><img src={icon} alt="" /><span>{value}</span></div>
      <p>{label}</p>
    </article>
  );
}

function Hero() {
  return (
    <section className="v2-hero" id="top">
      <DesktopNav />
      <MobileNav />

      <div className="v2-floating-images-desktop" aria-hidden="true">
        <FloatingImage src={assets.hero1} className="image-a" />
        <FloatingImage src={assets.hero2} className="image-b" />
        <FloatingImage src={assets.hero3} className="image-c" />
        <FloatingImage src={assets.hero4} className="image-d" />
        <FloatingImage src={assets.hero5} className="image-e" />
        <FloatingImage src={assets.hero6} className="image-f" />
      </div>

      <div className="v2-hero-copy">
        <div className="v2-live-pill"><img src={assets.live} alt="" /><span>Now live across Nigeria & Ghana</span></div>
        <h1>
          <span>Stop Going for <strong className="navy">Empty Clicks.</strong></span>
          <span>Turn Everyday People into <strong className="orange">Your Brand's Most Powerful Advertisers</strong></span>
        </h1>
        <p className="v2-hero-description">Advertise across Nigeria & Ghana with millions of nano-influencers who will share, engage, and recommend your brand, content or business in DMs and Groups where people actually trust the message.</p>
        <div className="v2-hero-actions">
          <a className="v2-btn v2-btn-primary" href="/register">Get Started</a>
          <a className="v2-btn v2-btn-secondary" href="#how-it-works">See How it Works</a>
        </div>
        <p className="v2-trusted">Trusted by <strong>7k+ Businesses & Clients</strong> across West Africa</p>
      </div>

      <div className="v2-mobile-images" aria-label="Nano influencer community">
        {[assets.hero6, assets.hero5, assets.hero1, assets.hero3, assets.hero4].map((src, index) => (
          <figure key={index}><img src={src} alt="Nano influencer" /></figure>
        ))}
      </div>

      <div className="v2-stats-track">
        {stats.map(([icon, value, label]) => <StatCard icon={icon} value={value} label={label} key={label} />)}
      </div>
    </section>
  );
}

export default function V2Landing() {
  return (
    <main className="v2-landing">
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
    </main>
  );
}
