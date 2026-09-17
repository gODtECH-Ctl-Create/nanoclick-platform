import React from "react";
import { Button } from "../components/ui/Button.jsx";
import "./v2-campaign.css";
import "./v2-campaign-populated.css";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/9f7b282b-9d0e-4d3e-a76e-76a75ba1e4d9.svg",
  profile: "https://www.figma.com/api/mcp/asset/3ad4fc79-84c2-4a27-abf8-d36d8a686618.png",
  notification: "https://www.figma.com/api/mcp/asset/37cfe25f-111c-4a46-b068-24bdd139683f.svg",
  dashboard: "https://www.figma.com/api/mcp/asset/9f37b4fe-961a-4307-a9a3-be253dfd042a.svg",
  wallet: "https://www.figma.com/api/mcp/asset/034a49f3-a401-4083-a51d-56c81a1c4df6.svg",
  campaign: "https://www.figma.com/api/mcp/asset/5963e463-6af2-402a-b39e-313841bbb3eb.svg",
  analytics: "https://www.figma.com/api/mcp/asset/2dce7d81-1758-49b9-bcf3-2c3cba087ba5.svg",
  settings: "https://www.figma.com/api/mcp/asset/04a887fa-10f8-4fbb-8d57-94dcf5080cd9.svg",
  help: "https://www.figma.com/api/mcp/asset/211e10e5-f30b-4b39-a8e5-f2f48476200e.svg",
  logout: "https://www.figma.com/api/mcp/asset/17c4327e-a0fd-4cb0-ab73-77a3c6de8ded.svg",
  trend: "https://www.figma.com/api/mcp/asset/f897317e-d6e9-45a6-9b5e-712a626b8943.svg",
  wordOfMouth: "https://www.figma.com/api/mcp/asset/c6a52e44-634d-4181-beda-ad0549ec6b47.svg",
  taskBolt: "https://www.figma.com/api/mcp/asset/c8031b0e-b40a-466c-bfe0-529732ae2934.svg",
  emptyCampaign: "https://www.figma.com/api/mcp/asset/3c476847-478e-4ff3-923a-c0922225cdef.svg",
  facebook: "https://www.figma.com/api/mcp/asset/d98f84e0-d0a6-4918-878a-9cbccc3986d8.svg",
  youtube: "https://www.figma.com/api/mcp/asset/b5d90585-044a-499e-bfdd-3f0d592d44f7.svg",
  twitter: "https://www.figma.com/api/mcp/asset/fe840526-6f9f-4d32-b01a-3bd8c5214fc4.svg",
  whatsapp: "https://www.figma.com/api/mcp/asset/12936c78-0896-4518-b564-cfe00deb70b4.svg",
  instagram: "https://www.figma.com/api/mcp/asset/e36e3967-0c26-46f9-acee-6132fa3168fe.svg",
  telegram: "https://www.figma.com/api/mcp/asset/3ab1e46d-ba96-4b36-8ef5-e60f6e1b951a.svg",
  tiktok: "https://www.figma.com/api/mcp/asset/f7a86de4-25fb-45ef-bb13-3f767e63e2c2.svg",
  linkedin: "https://www.figma.com/api/mcp/asset/6bdae41e-bbaa-4342-abb4-13865191362b.svg",
  audiomack: "https://www.figma.com/api/mcp/asset/a8b7341a-dbb7-450e-b0aa-bf256ae0ae89.svg",
  spotify: "https://www.figma.com/api/mcp/asset/f61464fb-7dbb-4a05-8e06-17175cea967a.svg",
  boomplay: "https://www.figma.com/api/mcp/asset/44153979-9fd8-4d97-aa4a-2e415df72586.svg",
  ytmusic: "https://www.figma.com/api/mcp/asset/26809eb7-4948-45f4-9512-eb522006be85.svg",
  googleForm: "https://www.figma.com/api/mcp/asset/102d6ab3-b786-4990-92b3-2ae9d5324593.svg",
  website: "https://www.figma.com/api/mcp/asset/d0ae50d4-5881-4496-8411-ab42e25af42b.svg",
  crypto: "https://www.figma.com/api/mcp/asset/6ecaca18-944a-4ee1-882e-7e7f14f804d3.svg",
  ideas: "https://www.figma.com/api/mcp/asset/e47a85de-2ed4-442d-bb77-34d4c99818b1.svg",
  manageX: "https://www.figma.com/api/mcp/asset/33ce1720-401e-4bb4-8236-4a819fd9d02e.svg",
  manageLink: "https://www.figma.com/api/mcp/asset/645788d3-e152-4370-823b-ccb1de7d44fb.svg",
  manageEdit: "https://www.figma.com/api/mcp/asset/5a944ecc-963d-4e51-8e3e-db99b33ee1be.svg",
  manageTrash: "https://www.figma.com/api/mcp/asset/30b09481-c4dd-4cda-a7f9-13889f1731a9.svg",
};

const platforms = [
  ["Facebook", assets.facebook], ["Youtube", assets.youtube], ["Twitter", assets.twitter], ["WhatsApp", assets.whatsapp],
  ["Instagram", assets.instagram], ["Telegram", assets.telegram], ["TikTok", assets.tiktok], ["LinkedIn", assets.linkedin],
  ["Audiomack", assets.audiomack], ["Spotify", assets.spotify], ["BoomPlay", assets.boomplay], ["YT Music", assets.ytmusic],
];

const singleTasks = [
  ["Get a Google Form", assets.googleForm],
  ["Create Website for your Business", assets.website],
  ["Buy & Sell Crypto", assets.crypto],
  ["Buy Business Plan & Ideas", assets.ideas],
];

function Brand() {
  return <a className="v2-campaign-brand" href="/" aria-label="The Nano Influencers home"><img src={assets.brand} alt="" /><span>The Nano Influencers</span></a>;
}

function SidebarItem({ href, icon, label, active = false }) {
  return <a className={`v2-campaign-sidebar-item${active ? " is-active" : ""}`} href={href}><img src={icon} alt="" /><span>{label}</span></a>;
}

function Sidebar() {
  return (
    <aside className="v2-campaign-sidebar">
      <div>
        <div className="v2-campaign-sidebar-logo"><Brand /></div>
        <nav className="v2-campaign-sidebar-nav" aria-label="Campaign navigation">
          <section>
            <p className="v2-campaign-nav-label">Main Menu</p>
            <SidebarItem href="/dashboard" icon={assets.dashboard} label="Overview" />
            <SidebarItem href="/wallet" icon={assets.wallet} label="Wallet" />
            <SidebarItem href="/campaigns" icon={assets.campaign} label="Campaigns" active />
            <SidebarItem href="#analytics" icon={assets.analytics} label="Analytics" />
          </section>
          <section className="v2-campaign-support-nav">
            <p className="v2-campaign-nav-label">Support</p>
            <SidebarItem href="/settings" icon={assets.settings} label="Settings" />
            <SidebarItem href="/help-support" icon={assets.help} label="Help & Support" />
          </section>
        </nav>
      </div>
      <button className="v2-campaign-logout" type="button"><span>Log Out</span><img src={assets.logout} alt="" /></button>
    </aside>
  );
}

function TopHeader() {
  return (
    <header className="v2-campaign-topbar">
      <div className="v2-campaign-mobile-brand"><Brand /></div>
      <p className="v2-campaign-welcome">Welcome Back 👋</p>
      <div className="v2-campaign-user">
        <button className="v2-campaign-notification" type="button" aria-label="Notifications"><img src={assets.notification} alt="" /></button>
        <div className="v2-campaign-profile"><img src={assets.profile} alt="Adaeze O." /><span>Adaeze O.</span></div>
      </div>
    </header>
  );
}

function ServiceCard({ type }) {
  const wom = type === "wom";
  const rows = wom
    ? [["Purpose", "Explode awareness & Conversions on WhatsApp"], ["Delivery", "Nano-Influencers deliver your campaigns naturally through WhatsApp DMs & group chats to your targeted audiences that are most likely to convert."], ["Platform", "WhatsApp, Telegram & Messenger"], ["Best For", "Product Launch, Massive Awareness, Event Promotion etc."]]
    : [["Purpose", "Any issues with your campaigns or account? Our support team is ready to help."], ["Delivery", "Assigned followers in your niche who follow permanently & continually engage with your content while sharing on WhatsApp for more audience"], ["Platform", "Instagram, Facebook, X(Twitter), YouTube, LinkedIn, and TikTok"], ["Best For", "Creators, Brands, Influencers, Businesses and anyone seeking constant visibility."]];
  return (
    <article className={`v2-campaign-service-card${wom ? " is-wom" : " is-growth"}`}>
      <div className="v2-campaign-service-title"><span className="v2-campaign-service-icon"><img src={wom ? assets.wordOfMouth : assets.trend} alt="" /></span><h2>{wom ? "Word of Mouth" : "Engaged Growth"}</h2></div>
      <div className="v2-campaign-service-facts">{rows.map(([label, value]) => <div className="v2-campaign-service-fact" key={label}><span>{label}</span><p>{value}</p></div>)}</div>
      <Button className="v2-campaign-start" to={wom ? undefined : "/campaigns/select-package"}>Start Now</Button>
      <button className="v2-campaign-video-link" type="button">Watch Video for more info about this Service</button>
    </article>
  );
}

function PlatformCard({ name, icon }) {
  return <button className="v2-campaign-platform-card" type="button"><img src={icon} alt="" /><span>{name}</span></button>;
}

function CustomTasks() {
  return (
    <section className="v2-campaign-panel v2-campaign-custom">
      <div className="v2-campaign-panel-heading is-split"><div><h2>Custom Tasks</h2><p>Choose the right service to grow your brand and reach your audience.</p></div><button type="button">Watch Video for more info about this Service</button></div>
      <div className="v2-campaign-label">Select Platform</div>
      <div className="v2-campaign-platform-grid">{platforms.map(([name, icon]) => <PlatformCard key={name} name={name} icon={icon} />)}</div>
    </section>
  );
}

function CustomTaskBanner() {
  return <section className="v2-campaign-task-banner"><span className="v2-campaign-task-icon"><img src={assets.taskBolt} alt="" /></span><div><h2>Great for Multiple task creation across any type of Platform.</h2><p>Build custom campaigns tailored to your exact goals.</p></div><Button className="v2-campaign-custom-button">Create Custom Task</Button></section>;
}

function CompactManageRecord({ title, linked = false }) {
  return (
    <article className="v2-campaign-compact-record">
      <div className="v2-campaign-compact-head"><span><i><img src={assets.trend} alt="" /></i><strong>Engaged Growth</strong></span><time>Created: 7/12/25 · Time: 7:35pm</time></div>
      <div className="v2-campaign-compact-main">
        <div className={`v2-campaign-compact-service${linked ? " is-link" : ""}`}>
          {linked ? <span className="v2-campaign-compact-link"><img src={assets.manageLink} alt="" /></span> : <img src={assets.manageX} alt="" />}
          <strong>{title}</strong>
        </div>
        <div className="v2-campaign-compact-actions">
          <button className="is-edit" type="button"><img src={assets.manageEdit} alt="" />Edit</button>
          <button className="is-delete" type="button"><img src={assets.manageTrash} alt="" />Delete</button>
        </div>
      </div>
    </article>
  );
}

function ManageCampaigns({ active }) {
  return (
    <section className={`v2-campaign-panel v2-campaign-manage${active ? " is-populated" : ""}`}>
      <div className="v2-campaign-panel-heading"><h2>Manage Campaigns</h2></div>
      {active ? (
        <div className="v2-campaign-populated-list">
          <CompactManageRecord title="Twitter Repost" />
          <CompactManageRecord title="Chisom's Page Link 1" linked />
          <Button href="/campaigns/manage" className="v2-campaign-manage-button">Go to Campaign Management</Button>
        </div>
      ) : (
        <div className="v2-campaign-empty"><img src={assets.emptyCampaign} alt="" /><h3>You have no campaign available</h3><Button>Create New Campaign</Button></div>
      )}
    </section>
  );
}

function SingleTasks() {
  return (
    <section className="v2-campaign-panel v2-campaign-single">
      <div className="v2-campaign-panel-heading"><h2>Single Tasks</h2><p>Premium tools designed for specific business needs</p></div>
      <div className="v2-campaign-label">Select Service</div>
      <div className="v2-campaign-single-grid">{singleTasks.map(([name, icon]) => <button className="v2-campaign-single-card" type="button" key={name}><img src={icon} alt="" /><span>{name}</span></button>)}</div>
    </section>
  );
}

function MobileBottomNav() {
  return <nav className="v2-campaign-bottom-nav" aria-label="Mobile navigation"><a href="/dashboard"><img src={assets.dashboard} alt="" /></a><a href="/wallet"><img src={assets.wallet} alt="" /></a><a className="is-active" href="/campaigns"><img src={assets.campaign} alt="" /><span>Campaigns</span></a><a href="#analytics"><img src={assets.analytics} alt="" /></a></nav>;
}

export default function V2Campaign() {
  const activeState = new URLSearchParams(window.location.search).get("state") === "active";
  return (
    <div className="v2-campaign-page">
      <Sidebar />
      <main className="v2-campaign-main">
        <TopHeader />
        <header className="v2-campaign-page-heading"><h1>Campaign Services</h1><p>Choose the right service to grow your brand and reach your audience.</p></header>
        <section className="v2-campaign-service-grid"><ServiceCard type="growth" /><ServiceCard type="wom" /></section>
        <CustomTasks />
        <CustomTaskBanner />
        <ManageCampaigns active={activeState} />
        <SingleTasks />
      </main>
      <MobileBottomNav />
    </div>
  );
}
