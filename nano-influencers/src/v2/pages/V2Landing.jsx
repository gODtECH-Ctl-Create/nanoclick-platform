import React, { useState } from "react";
import "./v2-landing.css";
import {
  ServicesSection,
  TestimonialsSection,
  HowItWorksSection,
  WhoItsForSection,
  SpecialOfferingsSection,
  FAQSection,
  CTASection,
  LandingFooter,
} from "./LandingSections.jsx";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/83fa14d8-cb86-4da9-9463-7908fb31e2ee.svg",
  brandMobile: "https://www.figma.com/api/mcp/asset/fdbda33f-2447-4f09-b859-dc44b14ef95a.svg",
  menu: "https://www.figma.com/api/mcp/asset/c6d05699-fae1-4eb8-82e9-95bbe5eed195.svg",
  close: "https://www.figma.com/api/mcp/asset/befb9175-bba0-42d6-93fe-7d02b6bcfde5.svg",
  live: "https://www.figma.com/api/mcp/asset/0d734788-7869-4fcb-b568-f3d34d0075c5.svg",
  hero1: "https://www.figma.com/api/mcp/asset/493dc80b-251a-4be3-a6b4-80ab1b7115b9.png",
  hero2: "https://www.figma.com/api/mcp/asset/03d7477a-55ab-4b57-91dc-238b751f33a5.png",
  hero3: "https://www.figma.com/api/mcp/asset/866bba81-5f01-4075-a25e-1310aaeb231d.png",
  hero4: "https://www.figma.com/api/mcp/asset/964c4204-9d5a-4a4e-ab76-73585838cf4f.png",
  hero5: "https://www.figma.com/api/mcp/asset/b600a918-d235-43d2-b9fb-73b474a8eeb8.png",
  hero6: "https://www.figma.com/api/mcp/asset/079a883f-35ac-403e-8ca4-a668f5adaffd.png",
  mobile1: "https://www.figma.com/api/mcp/asset/4f88bc59-d4ae-42ef-a508-e9d3128c0bfd.png",
  mobile2: "https://www.figma.com/api/mcp/asset/ce7928ad-40b0-41a5-9307-ad56a6bfc36b.png",
  mobile3: "https://www.figma.com/api/mcp/asset/06a7f89e-f806-47b9-989f-61bd1d000af7.png",
  mobile4: "https://www.figma.com/api/mcp/asset/49647e37-f720-49fc-9501-0b0e81110db5.png",
  mobile5: "https://www.figma.com/api/mcp/asset/29998098-cf7a-4381-8210-efc812739fe0.png",
  statBusiness: "https://www.figma.com/api/mcp/asset/98e000f2-7897-4bba-8d2a-b73e64c90ced.svg",
  statPeople: "https://www.figma.com/api/mcp/asset/6eefe1d9-0def-4419-8804-eb5082d67f20.svg",
  statFlag: "https://www.figma.com/api/mcp/asset/75eb2531-070a-4f1c-9eeb-48c3248d0260.svg",
  statRate: "https://www.figma.com/api/mcp/asset/5130a3b5-e539-4226-a4ad-aaa24d37fb1d.svg",
};

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Testimonials", "#testimonials"],
  ["How It Works", "#how-it-works"],
  ["Who It's For", "#who-its-for"],
  ["Offerings", "#offerings"],
  ["FAQs", "#faqs"],
];

const stats = [
  [assets.statBusiness, "7K+", "Businesses & Clients"],
  [assets.statPeople, "200k+", "Nano-Influencers"],
  [assets.statFlag, "2", "Countries"],
  [assets.statRate, "98%", "Message Trust Rate"],
];

const mobileImages = [assets.mobile1, assets.mobile2, assets.mobile3, assets.mobile4, assets.mobile5];

function DesktopNav() {
  return (
    <header className="v2-nav v2-nav-desktop">
      <a className="v2-brand" href="#home" aria-label="The Nano Influencers home">
        <img src={assets.brand} alt="" />
        <span>The Nano Influencers</span>
      </a>
      <nav className="v2-nav-links" aria-label="Landing page navigation">
        {navItems.map(([label, href], index) => (
          <a className={index === 0 ? "active" : ""} href={href} key={label}>{label}</a>
        ))}
      </nav>
      <div className="v2-nav-actions">
        <a className="v2-btn v2-btn-white" href="/login">Log In</a>
        <a className="v2-btn v2-btn-primary" href="/register">Get Started</a>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className={`v2-mobile-nav ${open ? "open" : ""}`}>
      <div className="v2-mobile-nav-bar">
        <a className="v2-brand" href="#home" onClick={close}>
          <img src={assets.brandMobile} alt="" />
          <span>The Nano Influencers</span>
        </a>
        <button
          className="v2-menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          <img className={open ? "close-icon" : ""} src={open ? assets.close : assets.menu} alt="" />
        </button>
      </div>
      {open && (
        <div className="v2-mobile-dropdown">
          <nav>
            {navItems.map(([label, href], index) => (
              <a className={index === 0 ? "active" : ""} href={href} onClick={close} key={label}>{label}</a>
            ))}
          </nav>
          <div className="v2-mobile-actions">
            <a href="/login">Log In</a>
            <a className="v2-btn v2-btn-primary" href="/register">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <article className="v2-stat-card">
      <div className="v2-stat-value"><img src={icon} alt="" /><span>{value}</span></div>
      <p>{label}</p>
    </article>
  );
}

function MobileImageMarquee() {
  return (
    <div className="v2-mobile-image-strip" aria-label="Nano influencer community">
      <div className="v2-mobile-image-track">
        {[0, 1].map(copy => (
          <div className="v2-mobile-image-group" aria-hidden={copy === 1 ? "true" : undefined} key={copy}>
            {mobileImages.map((src, index) => <img src={src} alt="" key={`${copy}-${index}`} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileStatsMarquee() {
  return (
    <div className="v2-mobile-stats" aria-label="Nano Influencers statistics">
      <div className="v2-mobile-stats-track">
        {[0, 1].map(copy => (
          <div className="v2-mobile-stats-group" aria-hidden={copy === 1 ? "true" : undefined} key={copy}>
            {stats.map(([icon, value, label]) => <StatCard icon={icon} value={value} label={label} key={`${copy}-${label}`} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="v2-hero" id="home">
      <DesktopNav />
      <MobileNav />

      <div className="v2-hero-content">
        <div className="v2-live-pill"><img src={assets.live} alt="" /><span>Now live across Nigeria &amp; Ghana</span></div>

        <h1 className="v2-hero-heading v2-desktop-heading">
          <span>Stop Going for</span>
          <strong className="navy">Empty Clicks.</strong>
          <span>Turn Everyday People</span>
          <span>into <strong className="orange">Your Brand&apos;s Most Powerful</strong></span>
          <strong className="orange">Advertisers</strong>
        </h1>

        <h1 className="v2-hero-heading v2-mobile-heading">
          <span>Stop Going for <strong className="navy">Empty Clicks.</strong></span>
          <span>Turn Everyday People into</span>
          <strong className="orange">Powerful Advertisers</strong>
        </h1>

        <p className="v2-hero-description">
          Advertise across Nigeria &amp; Ghana with millions of nano-influencers who will share,
          engage, and recommend your brand, content or business in DMs and Groups where people
          actually trust the message.
        </p>

        <div className="v2-hero-actions">
          <a className="v2-btn v2-btn-primary" href="/register">Get Started</a>
          <a className="v2-btn v2-btn-secondary" href="#how-it-works">See How it Works</a>
        </div>

        <p className="v2-trusted">Trusted by <strong>7k+ Businesses &amp; Clients</strong> across West Africa</p>
      </div>

      <div className="v2-hero-images v2-hero-images-desktop" aria-hidden="true">
        <figure className="hero-img hero-img-1"><img src={assets.hero1} alt="" /></figure>
        <figure className="hero-img hero-img-2"><img src={assets.hero2} alt="" /></figure>
        <figure className="hero-img hero-img-3"><img src={assets.hero3} alt="" /></figure>
        <figure className="hero-img hero-img-4"><img src={assets.hero4} alt="" /></figure>
        <figure className="hero-img hero-img-5"><img src={assets.hero5} alt="" /></figure>
        <figure className="hero-img hero-img-6"><img src={assets.hero6} alt="" /></figure>
      </div>

      <MobileImageMarquee />

      <div className="v2-stats v2-stats-desktop">
        {stats.map(([icon, value, label]) => <StatCard icon={icon} value={value} label={label} key={label} />)}
      </div>

      <MobileStatsMarquee />
    </section>
  );
}

export default function V2Landing() {
  return (
    <div className="v2-landing">
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <SpecialOfferingsSection />
      <FAQSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
}
