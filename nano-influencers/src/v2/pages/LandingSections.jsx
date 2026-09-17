import React, { useMemo, useRef, useState } from "react";
import "./landing-sections.css";

const sectionAssets = {
  serviceGrowth: "https://www.figma.com/api/mcp/asset/14297be1-f830-4365-9aa1-eaacce220336.svg",
  serviceWord: "https://www.figma.com/api/mcp/asset/c34dacee-5ba1-4a91-b092-b3422a96fa6a.svg",
  serviceCustom: "https://www.figma.com/api/mcp/asset/d8656186-d865-49d1-aa06-c6a78ce6cba1.svg",
  serviceSingle: "https://www.figma.com/api/mcp/asset/d066c3b6-0a55-4032-912d-fd724192f2a1.svg",
  testimonial1: "https://www.figma.com/api/mcp/asset/aab91433-d578-48f4-a0af-8ecce2fefbc1.png",
  testimonial2: "https://www.figma.com/api/mcp/asset/2daa86c5-e223-4a44-b59e-93ed8ab597f5.png",
  testimonial3: "https://www.figma.com/api/mcp/asset/f9257f11-bb58-401d-8dc3-fed8064dcc18.png",
  play: "https://www.figma.com/api/mcp/asset/be3ba274-fd1e-4fd9-8092-4a5b08567e35.svg",
  star: "https://www.figma.com/api/mcp/asset/e4bf250c-69b5-4718-94c5-57f2acbbf127.svg",
  arrowLeft: "https://www.figma.com/api/mcp/asset/d165d2c8-03bc-405e-baf2-77f348c6f99f.svg",
  arrowRight: "https://www.figma.com/api/mcp/asset/136d4f5f-dd6b-43c8-98ba-a22bef4d798d.svg",
  youtube: "https://www.figma.com/api/mcp/asset/5e9ee6a3-2ff4-4eec-a5b2-7bc3a4c2056c.svg",
};

const services = [
  { icon: sectionAssets.serviceGrowth, tag: "Most Popular", title: "Engaged Growth", text: "Real people who are interested in your niche, follow you & interact with your posts consistently so the algorithm trusts your content and shows it to more audience.", chips: ["Share to attract new Audiences", "Comments that drive Engagements", "Follow you permanently"] },
  { icon: sectionAssets.serviceWord, tag: "High Trust", title: "Word of Mouth", text: "Real people organically talking about, sharing, and vouching for your brand across their private communities and group chats.", chips: ["DM & group recommendations", "Personal referral messaging", "Community penetration"] },
  { icon: sectionAssets.serviceCustom, tag: "Flexible", title: "Custom Tasks", text: "Define exactly what you need — specific actions, tailored messages, or niche targeting. We match you with influencers who can execute it.", chips: ["Custom action definitions", "Niche audience targeting", "Flexible campaign structure"] },
  { icon: sectionAssets.serviceSingle, tag: "Quick Start", title: "Single Tasks", text: "One-off campaign tasks for product launches, announcements, or time-sensitive promotions. Get results fast with minimal setup.", chips: ["Same-day activation", "One-time campaign setup", "One-time campaign setup"] },
];

const testimonials = [
  { image: sectionAssets.testimonial1, name: "Adaeze O.", role: "Brand Founder" },
  { image: sectionAssets.testimonial2, name: "Kwame A.", role: "CEO" },
  { image: sectionAssets.testimonial3, name: "Olivia M.", role: "Creative Director" },
];

const steps = [
  { n: "01", title: "Choose Your Service", text: "Select from Engaged Growth, Word of Mouth, Custom Tasks, or Single Tasks — each designed for a different marketing goal." },
  { n: "02", title: "Set Up Your Campaign", text: "Define your target audience, message, and budget. Our platform matches you with the right nano-influencers in your market." },
  { n: "03", title: "Watch Real Results", text: "Nano-influencers share your brand in DMs and Groups where people actually trust the message — driving real sales and awareness." },
];

function SectionHeader({ tag, title, text }) {
  return <div className="v2-section-heading"><span>{tag}</span><h2>{title}</h2><p>{text}</p></div>;
}

export function ServicesSection() {
  return <section className="v2-section v2-services" id="services">
    <div className="v2-section-inner">
      <SectionHeader tag="Our Services" title="Every marketing goal, covered" text="Four service types designed to match your exact business objective — from sustained growth to rapid launches." />
      <div className="v2-service-shell">
        {services.map((service) => <article className="v2-service-card" key={service.title}>
          <div className="v2-service-top"><img src={service.icon} alt=""/><span>{service.tag}</span></div>
          <div className="v2-service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
          <div className="v2-service-chips">{service.chips.map((chip, i) => <span key={`${chip}-${i}`}>{chip}</span>)}</div>
        </article>)}
      </div>
      <a className="v2-btn v2-btn-primary v2-services-cta" href="/register">Choose Your Service</a>
    </div>
  </section>;
}

function TestimonialCard({ item }) {
  return <article className="v2-testimonial-card">
    <div className="v2-testimonial-media"><img src={item.image} alt={`${item.name} testimonial`}/><span className="v2-media-shade"/><img className="v2-testimonial-play" src={sectionAssets.play} alt="Play testimonial"/></div>
    <div className="v2-testimonial-footer">
      <div className="v2-person"><img src={item.image} alt=""/><div><strong>{item.name}</strong><small>{item.role}</small></div></div>
      <div className="v2-stars">{[0,1,2,3].map(i => <img key={i} src={sectionAssets.star} alt=""/>)}</div>
    </div>
  </article>;
}

export function TestimonialsSection() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * .8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
    setPage(p => Math.max(0, Math.min(2, p + direction)));
  };
  return <section className="v2-section v2-testimonials" id="testimonials">
    <div className="v2-section-inner">
      <SectionHeader tag="Testimonials" title="Real results from real businesses" text="Don't take our word for it — here's what our customers say after running campaigns on The NanoInfluencers." />
      <div className="v2-testimonial-track" ref={trackRef}>{testimonials.map(item => <TestimonialCard item={item} key={item.name}/>)}</div>
      <div className="v2-testimonial-controls">
        <button onClick={() => scroll(-1)} aria-label="Previous testimonial"><img src={sectionAssets.arrowLeft} alt=""/></button>
        <button onClick={() => scroll(1)} aria-label="Next testimonial"><img src={sectionAssets.arrowRight} alt=""/></button>
      </div>
      <div className="v2-testimonial-progress" aria-hidden="true">{[0,1,2].map(i => <i className={page === i ? "active" : ""} key={i}/>)}</div>
    </div>
  </section>;
}

function DemoArtwork() {
  const tiles = useMemo(() => Array.from({ length: 12 }), []);
  return <div className="v2-demo-artwork">
    <div className="v2-demo-grid">{tiles.map((_, i) => <div className="v2-demo-tile" key={i}>
      <b>Stop Going for<br/><em>Empty Clicks.</em></b><span>Turn Everyday People<br/>into <strong>Powerful<br/>Advertisers</strong></span><div className="v2-demo-mini"><i/><i/><i/></div>
    </div>)}</div>
    <div className="v2-demo-play"><img src={sectionAssets.youtube} alt="Play demo"/></div>
  </div>;
}

export function HowItWorksSection() {
  return <section className="v2-section v2-how" id="how-it-works">
    <div className="v2-section-inner">
      <SectionHeader tag="How It Works" title="Three steps to real, trusted advertising" text="Get your brand in front of the right people in minutes. No complicated setup. No empty impressions." />
      <div className="v2-steps">
        {steps.map((step, index) => <article className={`v2-step v2-step-${index+1}`} key={step.n}><span className="v2-step-number">{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
      </div>
      <div className="v2-demo-card"><DemoArtwork/><div className="v2-demo-footer"><span>See how it works</span><span className="v2-demo-badge"><i/>Demo</span></div></div>
    </div>
  </section>;
}
