import React from "react";
import "./v2-help-support.css";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/47787418-316e-485c-8066-eccf660cd78b.svg",
  profile: "https://www.figma.com/api/mcp/asset/d52c8739-8de5-4d39-98b8-b4ee70cb2dd4.png",
  notification: "https://www.figma.com/api/mcp/asset/97a226ef-5f2e-4715-a0e2-6e251958a16c.svg",
  dashboard: "https://www.figma.com/api/mcp/asset/04a5872e-08b7-4894-9269-2d325e6a023b.svg",
  wallet: "https://www.figma.com/api/mcp/asset/cf9ac420-e62e-4eca-b131-fba1bd25e006.svg",
  analytics: "https://www.figma.com/api/mcp/asset/2034b23c-8993-4806-bad7-3fd0dd0d0aed.svg",
  settings: "https://www.figma.com/api/mcp/asset/81089502-9454-468a-9c5f-c5da7c21eb71.svg",
  help: "https://www.figma.com/api/mcp/asset/1ecd50a6-4a52-4891-8859-245f2658bb81.svg",
  logout: "https://www.figma.com/api/mcp/asset/4a1ac011-9d52-44d4-8d23-f32defc4580e.svg",
  collapse: "https://www.figma.com/api/mcp/asset/f520e936-dfef-4de0-95d9-5f5341e668d5.svg",
  dateChevron: "https://www.figma.com/api/mcp/asset/de35bbc3-c546-4c6c-a7f0-d9cd0cc7efc6.svg",
  faqChevron: "https://www.figma.com/api/mcp/asset/a9c71857-53cb-47a4-a1a6-d38c120d1851.svg",
};

const faqs = [
  "How do i know the engagement is from real people and not bots?",
  "If i pay for Engaged Growth, do the followers remain after my subscription ends?",
  "How do I know people are actually recommending my brand in real conversation?",
  "Why Should I use Word-of-Mouth instead of just running Ads?",
  "What kind of Custom Tasks can i recreate?",
  "How fast can a Custom Task be completed?",
  "What happens if my Campaign doesn’t deliver as promised?",
  "How do i track campaign performance?",
];

function Brand() {
  return (
    <a className="v2-help-brand" href="/" aria-label="The Nano Influencers home">
      <img src={assets.brand} alt="" />
      <span>The Nano Influencers</span>
    </a>
  );
}

function SidebarLink({ href, icon, children, active = false }) {
  return (
    <a className={`v2-help-sidebar-link${active ? " is-active" : ""}`} href={href}>
      <img src={icon} alt="" />
      <span>{children}</span>
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="v2-help-sidebar">
      <div>
        <div className="v2-help-sidebar-logo"><Brand /></div>
        <div className="v2-help-sidebar-group">
          <p>Main Menu</p>
          <SidebarLink href="/dashboard" icon={assets.dashboard}>Dashboard</SidebarLink>
          <SidebarLink href="/wallet" icon={assets.wallet}>Wallet</SidebarLink>
          <SidebarLink href="#campaigns" icon={assets.dashboard}>Campaigns</SidebarLink>
          <SidebarLink href="#analytics" icon={assets.analytics}>Analytics</SidebarLink>
        </div>
        <div className="v2-help-sidebar-group v2-help-sidebar-support">
          <p>Support</p>
          <SidebarLink href="/settings" icon={assets.settings}>Settings</SidebarLink>
          <SidebarLink href="/help-support" icon={assets.help} active>Help &amp; Support</SidebarLink>
        </div>
      </div>
      <button className="v2-help-logout" type="button"><span>Log Out</span><img src={assets.logout} alt="" /></button>
      <button className="v2-help-collapse" type="button" aria-label="Collapse sidebar"><img src={assets.collapse} alt="" /></button>
    </aside>
  );
}

function Header() {
  return (
    <>
      <header className="v2-help-topbar">
        <div className="v2-help-mobile-brand"><Brand /></div>
        <p className="v2-help-welcome">Welcome Back 👋</p>
        <div className="v2-help-user">
          <button className="v2-help-notification" type="button" aria-label="Notifications"><img src={assets.notification} alt="" /></button>
          <div className="v2-help-profile"><img src={assets.profile} alt="Adaeze O." /><span>Adaeze O.</span></div>
        </div>
      </header>
      <div className="v2-help-title-row">
        <div><h1>Help &amp; Support</h1><p>Find answers, and reach our team</p></div>
        <div className="v2-help-date">Last 30 days <img src={assets.dateChevron} alt="" /></div>
      </div>
    </>
  );
}

export default function V2HelpSupport() {
  return (
    <main className="v2-help-page">
      <Sidebar />
      <section className="v2-help-main">
        <Header />
        <div className="v2-help-grid">
          <section className="v2-help-card v2-help-email-card">
            <div className="v2-help-card-heading"><h2>Email Us</h2><p>We reply within 24h</p></div>
            <form className="v2-help-form" onSubmit={(event) => event.preventDefault()}>
              <div className="v2-help-form-row">
                <label><span>First Name</span><input type="text" placeholder="First Name" /></label>
                <label><span>Last Name</span><input type="text" placeholder="Last Name" /></label>
              </div>
              <label><span>Email</span><input type="email" placeholder="you@example.com" /></label>
              <label><span>Message</span><textarea placeholder="Enter your message here" /></label>
              <button type="submit" className="v2-help-submit">Submit</button>
            </form>
          </section>

          <section className="v2-help-card v2-help-faq-card">
            <div className="v2-help-card-heading"><h2>Frequently Asked Questions</h2><p>Browse common questions</p></div>
            <div className="v2-help-faq-scroll" aria-label="Frequently asked questions">
              {faqs.map((question) => (
                <div className="v2-help-faq-item" key={question}>
                  <h3>{question}</h3>
                  <img src={assets.faqChevron} alt="" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
