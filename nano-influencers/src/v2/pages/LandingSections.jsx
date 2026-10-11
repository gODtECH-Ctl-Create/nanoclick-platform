import React, { useState } from "react";
import "./landing-sections.css";

const serviceAssets = {
  growth: "https://www.figma.com/api/mcp/asset/d8caa1a8-3518-4705-b1e6-c59ab095cd21.svg",
  word: "https://www.figma.com/api/mcp/asset/7ca48941-6cdc-4c5c-9812-eac6fb5a1862.svg",
  task: "https://www.figma.com/api/mcp/asset/95f0bc6d-a7bc-4c24-a0a9-fa2329e78d71.svg",
  single: "https://www.figma.com/api/mcp/asset/658da907-3229-4f4b-8250-b94794c7d41d.svg",
};

const testimonialAssets = {
  ada: "https://www.figma.com/api/mcp/asset/9aab1bf2-6fd6-44d8-8d56-c881909ebc3f.png",
  kwame: "https://www.figma.com/api/mcp/asset/ee0a7fd6-7166-4da7-82a3-797cb4163b43.png",
  olivia: "https://www.figma.com/api/mcp/asset/24dca251-f977-48d0-912c-f442a61e2f81.png",
  play: "https://www.figma.com/api/mcp/asset/d19d0b22-f1ae-43fd-b5ad-07ef738db374.svg",
  star: "https://www.figma.com/api/mcp/asset/68e1537a-4cf9-40c9-a660-64d8e5d7811c.svg",
  left: "https://www.figma.com/api/mcp/asset/9000a621-bb74-4a4f-8e1f-6963e5c94d13.svg",
  right: "https://www.figma.com/api/mcp/asset/19fc5889-1938-4089-997d-b63a990ff699.svg",
};

const hiwAssets = {
  desktopDemo: "https://www.figma.com/api/mcp/asset/a961277d-c8bb-4d8d-82cb-613cab449dbd.png",
  mobileDemo: "https://www.figma.com/api/mcp/asset/16fb3528-5d59-42e5-acfd-81df27cf8377.png",
};

const audienceAssets = [
  "https://www.figma.com/api/mcp/asset/bf61e394-6611-448e-bfc3-23b7cc06bf8c.png",
  "https://www.figma.com/api/mcp/asset/aca06357-5f38-43ad-a71a-8c4662d1cb01.png",
  "https://www.figma.com/api/mcp/asset/f8dd2618-7a05-4cb8-9ce1-807fcb7bc427.png",
  "https://www.figma.com/api/mcp/asset/48c9e039-d313-4a3b-9c56-5d1ec50b5776.png",
  "https://www.figma.com/api/mcp/asset/afa573da-9604-46d3-ad2b-3e6b6ee54cdb.png",
  "https://www.figma.com/api/mcp/asset/8af6dcc9-a82c-40c4-a2d9-de7c0547ee58.png",
];

const specialAssets = {
  crypto: "https://www.figma.com/api/mcp/asset/54646c46-3601-423c-9166-9495f1d7664f.svg",
  ideas: "https://www.figma.com/api/mcp/asset/b5727c87-7aeb-451a-a6d9-32af2149fff3.svg",
  website: "https://www.figma.com/api/mcp/asset/a2417d29-eff4-4874-bfee-29426aa4d63d.svg",
  star: "https://www.figma.com/api/mcp/asset/112662d4-0c29-4e2a-b23a-90595243812e.svg",
};

const faqAssets = {
  down: "https://www.figma.com/api/mcp/asset/96fad2f9-2fe4-46d0-95e2-544ef5e7105d.svg",
  up: "https://www.figma.com/api/mcp/asset/e5973652-b4a4-45d7-b1f7-78bbf6d764fc.svg",
};

const footerAssets = {
  brand: "https://www.figma.com/api/mcp/asset/33a7ddc5-d395-4fa8-ae5e-e0e566995c21.svg",
  x: "https://www.figma.com/api/mcp/asset/4f98241c-f970-43fb-a755-60c03aa6cc42.svg",
  facebook: "https://www.figma.com/api/mcp/asset/7c0a190f-e55c-4afc-8fbc-0543b23a3f05.svg",
  youtube: "https://www.figma.com/api/mcp/asset/3a602767-2623-4884-9587-220f2fef0aa0.svg",
  instagram: "https://www.figma.com/api/mcp/asset/1017b2e2-dfaa-483a-a244-8c7f0dac0c03.svg",
};

const services = [
  {
    icon: serviceAssets.growth,
    badge: "Most Popular",
    title: "Engaged Growth",
    text: "Real people who are Interested in your Niche, follows you & interact with your posts consistently so the algorithm trusts your content and shows it to more audience.",
    chips: ["Share to attract new Audiences", "Comments that drive Engagements", "Follow you permanently"],
  },
  {
    icon: serviceAssets.word,
    badge: "High Trust",
    title: "Word of Mouth",
    text: "Real people organically talking about, sharing, and vouching for your brand across their private communities and group chats",
    chips: ["DM & group recommendations", "Personal referral messaging", "Community penetration"],
  },
  {
    icon: serviceAssets.task,
    badge: "Flexible",
    title: "Custom Tasks",
    text: "Define exactly what you need — specific actions, tailored messages, or niche targeting. We match you with influencers who can execute it.",
    chips: ["Custom action definitions", "Niche audience targeting", "Flexible campaign structure"],
  },
  {
    icon: serviceAssets.single,
    badge: "Quick Start",
    title: "Single Tasks",
    text: "One-off campaign tasks for product launches, announcements, or time-sensitive promotions. Get results fast with minimal setup.",
    chips: ["Same-day activation", "One-time campaign setup", "One-time campaign setup"],
  },
];

const testimonials = [
  { image: testimonialAssets.ada, name: "Adaeze O.", role: "Brand Founder" },
  { image: testimonialAssets.kwame, name: "Kwame A.", role: "CEO" },
  { image: testimonialAssets.olivia, name: "Olivia M.", role: "Creative Director" },
];

const steps = [
  ["01", "Choose Your Service", "Select from Engaged Growth, Word of Mouth, Custom Tasks, or Single Tasks — each designed for a different marketing goal."],
  ["02", "Set Up Your Campaign", "Define your target audience, message, and budget. Our platform matches you with the right nano-influencers in your market."],
  ["03", "Watch Real Results", "Nano-influencers share your brand in DMs and Groups where people actually trust the message — driving real sales and awareness."],
];

const audiences = [
  ["Content Creators & Influencers", "Build an active, loyal community that supports, engage & share your work & contents with real people interested in your content and are within your niche for more visibility."],
  ["Entrepreneurs, Businesses, & SMEs", "Grow your business with affordable, real engagements and recommendations that drives sales, lead, visibility and awareness."],
  ["Event Organizers/ Businesses Preparing to Launch", "Fill seats, get new users/customers and drive buzz across WhatsApp groups and DMs about your launch or event."],
  ["Musicians & Entertainers", "Promote your music with real fans who dance share and boost your streams, helping your singles, albums, or shows rank higher across social platforms."],
  ["Political & Campus Campaigns", "Reach grassroots audiences through trusted word-of-mouth circles."],
  ["Persons looking for General Visibility & Awareness", "Anyone who wants to sell more, win contests, or create organic awareness/visibility for a good cause, product, or idea."],
];

const specialOffers = [
  [specialAssets.crypto, "Buy & Sell Crypto", "Your one-stop ramp for all digital assets at affordable rates on WhatsApp. Trusted, fast and secure.", "Start a Swap"],
  [specialAssets.ideas, "Get Business Plans & Ideas", "Never run out of plausible combinations to build or launch. Expert-crafted plans tailored to your market.", "Explore Ideas"],
  [specialAssets.website, "Get a Website for Your Business", "Professional websites built fast and affordably. Go online in days, not weeks — backed by local support.", "Get Started"],
];

const faqs = [
  [
    "How do i know the engagement is from real people and not bots?",
    "We only use verified nano-influencers with active social accounts. Each account is screened for authenticity (real posts, followers, and activity). You also get access to analytics.",
  ],
  [
    "If i pay for Engaged Growth, do the followers remain after my subscription ends?",
    "Engaged Growth is designed around lasting audience relationships. The people who follow your account are real users; continued interaction depends on the audience and your content after the campaign ends.",
  ],
  [
    "How do I know people are actually recommending my brand in real conversation?",
    "Campaign activity is tied to real nano-influencer accounts and delivery evidence so you can review campaign performance rather than relying on empty impressions.",
  ],
  [
    "Why Should I use Word-of-Mouth instead of just running Ads?",
    "Word-of-Mouth is built for trusted, person-to-person recommendations in DMs, groups, and communities, while paid ads are primarily impression- and click-driven.",
  ],
  [
    "What kind of Custom Tasks can i recreate?",
    "You can define specific actions, tailored messages, niche targeting, and flexible campaign structures that fit the objective of your campaign.",
  ],
  [
    "How fast can a Custom Task be completed?",
    "Completion time depends on the task, target audience, campaign size, and availability of matching nano-influencers.",
  ],
  [
    "What happens if my Campaign doesn’t deliver as promised?",
    "Campaign delivery is tracked in the platform so issues can be reviewed against the agreed campaign setup and delivery records.",
  ],
  [
    "How do i track campaign performance?",
    "Your advertiser workspace provides campaign status, delivery activity, and analytics so you can monitor performance as the campaign progresses.",
  ],
];

function SectionHeading({ tag, title, children }) {
  return (
    <div className="v2-section-heading">
      <span>{tag}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="v2-section v2-services" id="services">
      <div className="v2-section-inner">
        <SectionHeading tag="Our Services" title="Every marketing goal, covered">
          Four service types designed to match your exact business objective — from sustained growth to rapid launches.
        </SectionHeading>
        <div className="v2-service-shell">
          {services.map(service => (
            <article className="v2-service-card" key={service.title}>
              <div className="v2-service-top"><img src={service.icon} alt="" /><span>{service.badge}</span></div>
              <div className="v2-service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
              <div className="v2-service-chips">{service.chips.map((chip, index) => <span key={`${service.title}-${index}`}>{chip}</span>)}</div>
            </article>
          ))}
        </div>
        <a className="v2-btn v2-btn-primary v2-services-cta" href="/register">Choose Your Service</a>
      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="v2-testimonial-card">
      <div className="v2-testimonial-media">
        <img src={item.image} alt="" />
        <span className="v2-media-shade" />
        <img className="v2-testimonial-play" src={testimonialAssets.play} alt="" />
      </div>
      <div className="v2-testimonial-footer">
        <div className="v2-person">
          <img src={item.image} alt="" />
          <div><strong>{item.name}</strong><small>{item.role}</small></div>
        </div>
        <div className="v2-stars" aria-label="4 star rating">
          {[0, 1, 2, 3].map(i => <img src={testimonialAssets.star} alt="" key={i} />)}
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  return (
    <section className="v2-section v2-testimonials" id="testimonials">
      <div className="v2-section-inner">
        <SectionHeading tag="Testimonials" title="Real results from real businesses">
          Don&apos;t take our word for it — here&apos;s what our customers say after running campaigns on The NanoInfluencers.
        </SectionHeading>
        <div className="v2-testimonial-viewport">
          <div className="v2-testimonial-track">
            {testimonials.map(item => <TestimonialCard item={item} key={item.name} />)}
          </div>
        </div>
        <div className="v2-testimonial-controls">
          <button type="button" aria-label="Previous testimonial" onClick={() => setIndex(v => Math.max(0, v - 1))}><img src={testimonialAssets.left} alt="" /></button>
          <button type="button" aria-label="Next testimonial" onClick={() => setIndex(v => Math.min(2, v + 1))}><img src={testimonialAssets.right} alt="" /></button>
        </div>
        <div className="v2-testimonial-progress" aria-hidden="true">
          {[0, 1, 2].map(i => <i className={i === index ? "active" : ""} key={i} />)}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="v2-section v2-how" id="how-it-works">
      <div className="v2-section-inner">
        <SectionHeading tag="How It Works" title="Three steps to real, trusted advertising">
          Get your brand in front of the right people in minutes. No complicated setup. No empty impressions.
        </SectionHeading>
        <div className="v2-steps">
          {steps.map(([n, title, text], index) => (
            <article className={`v2-step v2-step-${index + 1}`} key={n}>
              <span className="v2-step-number">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <article className="v2-demo-card">
          <picture className="v2-demo-picture">
            <source media="(max-width:760px)" srcSet={hiwAssets.mobileDemo} />
            <img src={hiwAssets.desktopDemo} alt="The Nano Influencers product demonstration" />
          </picture>
          <div className="v2-demo-footer">
            <span>See how it works</span>
            <span className="v2-demo-badge"><i />Demo</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export function WhoItsForSection() {
  return (
    <section className="v2-section v2-who" id="who-its-for">
      <div className="v2-section-inner">
        <SectionHeading tag="Who Is It For" title="Built for Everyone">
          Grow your business with affordable, real engagement and recommendations that drive sales, leads, identity and awareness.
        </SectionHeading>
        <div className="v2-audience-grid">
          {audiences.map(([title, text], index) => (
            <article className="v2-audience-card" key={title}>
              <img src={audienceAssets[index]} alt="" />
              <div className="v2-audience-copy">
                <span>{title}</span>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpecialOfferingsSection() {
  return (
    <section className="v2-section v2-special" id="offerings">
      <div className="v2-section-inner">
        <SectionHeading tag="Special Offerings" title="More ways we help your business grow">
          Beyond influencer marketing — practical tools and services to fuel your business at every stage.
        </SectionHeading>
        <div className="v2-special-grid">
          {specialOffers.map(([icon, title, text, button]) => (
            <article className="v2-special-card" key={title}>
              <span className="v2-special-icon"><img src={icon} alt="" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <a href="/register">{button}<b>⟶</b></a>
            </article>
          ))}
        </div>
        <div className="v2-sme-proof">
          <span>Trusted by <strong>900,000+</strong> SMEs across West Africa</span>
          <div>{[0, 1, 2, 3, 4].map(i => <img src={specialAssets.star} alt="" key={i} />)}</div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="v2-section v2-faq-section" id="faqs">
      <div className="v2-section-inner">
        <SectionHeading tag="FAQs" title="Have Questions?">
          Everything you need to know before getting started.
        </SectionHeading>
        <div className="v2-faqs">
          {faqs.map(([question, answer], index) => {
            const expanded = open === index;
            return (
              <article className={`v2-faq-card ${expanded ? "expanded" : ""}`} key={question}>
                <button type="button" aria-expanded={expanded} onClick={() => setOpen(expanded ? -1 : index)}>
                  <span>{question}</span>
                  <img src={expanded ? faqAssets.up : faqAssets.down} alt="" />
                </button>
                {expanded && <p>{answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="v2-cta-section">
      <div className="v2-cta-inner">
        <div className="v2-cta-heading">
          <p>Start today for free.</p>
          <p>No time wasted — only real results that satisfy.</p>
        </div>
        <div className="v2-cta-copy v2-cta-copy-desktop">
          7k+ Businesses &amp; Clients have already begun. Join them and grow your business with trusted nano-influencer marketing across Nigeria &amp; Ghana.
        </div>
        <div className="v2-cta-copy v2-cta-copy-mobile">
          900,000+ SMEs have already begun. Join them and grow your business with trusted nano-influencer marketing across Nigeria &amp; Ghana.
        </div>
        <span className="v2-cta-tag launch">Launch</span>
        <span className="v2-cta-tag growth">Growth</span>
        <div className="v2-cta-actions">
          <a className="v2-btn v2-btn-primary" href="/register">Get Started</a>
          <a className="v2-btn v2-btn-secondary" href="/login">Log In</a>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, src, label }) {
  return <a className="v2-social-link" href={href} aria-label={label}><img src={src} alt="" /></a>;
}

export function LandingFooter() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-inner">
        <div className="v2-footer-main">
          <div className="v2-footer-brand-block">
            <a className="v2-footer-brand" href="#home"><img src={footerAssets.brand} alt="" /><span>The Nano Influencers</span></a>
            <p>Turn everyday People into your brand&apos;s most powerful advertisers. Affordable, authentic, and effective - the smarter way to advertise</p>
            <a className="v2-btn v2-btn-primary" href="mailto:hello@nanoinfluencers.ng">Contact Us</a>
          </div>
          <div className="v2-footer-contact">
            <div className="v2-socials">
              <SocialLink href="#" src={footerAssets.x} label="X" />
              <SocialLink href="#" src={footerAssets.facebook} label="Facebook" />
              <SocialLink href="#" src={footerAssets.youtube} label="YouTube" />
              <SocialLink href="#" src={footerAssets.instagram} label="Instagram" />
            </div>
            <a className="v2-footer-email" href="mailto:hello@nanoinfluencers.ng">Email:&nbsp; hello@nanoinfluencers.ng</a>
          </div>
        </div>
        <div className="v2-footer-bottom">
          <span>Copyright © 2026 – All Right Reserved</span>
          <div><a href="#">Privacy Policy</a><b>·</b><a href="#">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}
