import React, { useState } from "react";
import { Button } from "../components/ui/Button.jsx";
import "./v2-dashboard.css";

const assets = {
  brand: "https://www.figma.com/api/mcp/asset/a391e72a-8753-43da-9706-bc098044c9cb.svg",
  profile: "https://www.figma.com/api/mcp/asset/762ca403-8ec0-43de-b52f-e30dfcd9333a.png",
  notification: "https://www.figma.com/api/mcp/asset/e226fe38-2bd1-4e6e-b60a-3f584c78bd7c.svg",
  dashboard: "https://www.figma.com/api/mcp/asset/fca8e6be-2693-47ba-8c0a-65f2a739e2d0.svg",
  wallet: "https://www.figma.com/api/mcp/asset/66c382cd-c48d-46d4-87da-1814de11efd4.svg",
  campaign: "https://www.figma.com/api/mcp/asset/4432532a-3770-4c99-b3b7-f4c9c22fc419.svg",
  analytics: "https://www.figma.com/api/mcp/asset/67f884ae-ce32-439f-8e0b-50b0d0fba8c6.svg",
  settings: "https://www.figma.com/api/mcp/asset/7f30f4cd-be2d-4f19-acca-4f9521713bab.svg",
  help: "https://www.figma.com/api/mcp/asset/9b7eb7a8-9079-47de-81bd-623c469c18ef.svg",
  logout: "https://www.figma.com/api/mcp/asset/5870bfc9-512b-4a93-a3cc-d7de80bf4f0b.svg",
  chevron: "https://www.figma.com/api/mcp/asset/5636b004-a362-4d9c-8ad6-ad7ba2462c51.svg",
  dateChevron: "https://www.figma.com/api/mcp/asset/e5eb3827-8abb-4cf5-b67e-cc5ddc8e389f.svg",
  balanceDecor: "https://www.figma.com/api/mcp/asset/51dd0537-770e-42ad-862d-ebd0ba86ebd8.svg",
  balance: "https://www.figma.com/api/mcp/asset/02735b32-03c2-4361-9f81-05940bbb1c55.svg",
  spend: "https://www.figma.com/api/mcp/asset/b27567a6-3273-4db2-98e3-ddfc48c0ed23.svg",
  reach: "https://www.figma.com/api/mcp/asset/810c4209-6b2f-42f0-abb6-41a92cbb1091.svg",
  people: "https://www.figma.com/api/mcp/asset/e59089f2-f1b6-463a-aac2-2fc4d0380dc3.svg",
  megaphone: "https://www.figma.com/api/mcp/asset/be58014c-dbaf-463d-ba60-b41989c8a69e.svg",
  chartGrid: "https://www.figma.com/api/mcp/asset/cd8a41a4-af7a-40e5-ba71-3251b088a8a5.svg",
  chartLines: "https://www.figma.com/api/mcp/asset/83cd86cd-0b1f-468b-9541-7ef66a05ec0a.svg",
  emptyChartLines: "https://www.figma.com/api/mcp/asset/fedbc724-e8e0-4cd2-984e-eabac588651e.svg",
  emptyActivity: "https://www.figma.com/api/mcp/asset/52588fde-018a-4481-8638-82a967d0eed6.svg",
  add: "https://www.figma.com/api/mcp/asset/b94e9c6a-82c1-47fe-978b-0058e8c78b0b.svg",
  refer: "https://www.figma.com/api/mcp/asset/227d3e9c-deb3-423a-9994-8e1c147f4819.svg",
  gift: "https://www.figma.com/api/mcp/asset/af291479-e8dc-4b0c-8904-7371a4568b02.svg",
  unlock: "https://www.figma.com/api/mcp/asset/57a3376f-2042-481a-91f7-975888755c6b.svg",
  activityMoney: "https://www.figma.com/api/mcp/asset/198a7323-8326-4a89-98ff-6c77da391ee8.svg",
  activityCampaign: "https://www.figma.com/api/mcp/asset/7283c51f-caa6-4e22-9730-78e5238569e7.svg",
  activityReach: "https://www.figma.com/api/mcp/asset/8f0f349f-8295-4774-a7a6-14903bcd4185.svg",
  referralDecorA: "https://www.figma.com/api/mcp/asset/454ed104-123b-45ef-8546-1293228c35d8.svg",
  referralDecorB: "https://www.figma.com/api/mcp/asset/3eff2a1a-de1f-434c-8c8d-5494c90a4854.svg",
  floatingRefer: "https://www.figma.com/api/mcp/asset/f36c56e5-23c9-410d-813f-d777043f728a.svg",
};

const metrics = [
  { title: "Active Campaigns", value: "0", note: "No campaigns running", button: "View Campaigns", tone: "blue", icon: assets.campaign },
  { title: "Total Spend", value: "₦0", note: "This month", button: "Spend Report", tone: "green", icon: assets.spend },
  { title: "Total Reach", value: "0", note: "People reached", button: "View Analytics", tone: "yellow", icon: assets.reach },
  { title: "Total Refferal", value: "0", note: "People reffered", button: "View Refferals", tone: "lavender", icon: assets.people },
];

const quickActions = [
  { title: "Add Funds", desc: "Top up your wallet", tone: "orange", icon: assets.add },
  { title: "Refer & Earn", desc: "Earn 2% per referral", tone: "green", icon: assets.refer },
  { title: "Win Gifts", desc: "1% cashback + weekly raffle", tone: "yellow", icon: assets.gift, href: "/dashboard/giveaway" },
  { title: "Try for Free", desc: "2 free trial weekly", tone: "lavender", icon: assets.unlock, href: "/dashboard/free-trial" },
];

const activities = [
  { title: "Deposit Alert", amount: "₦0", time: "Just Now", tone: "green", icon: assets.activityMoney },
  { title: "Campaign Created", subtitle: "Engaged Growth", amount: "₦0", time: "2 min ago", tone: "blue", icon: assets.activityCampaign },
  { title: "Deposit Alert", amount: "₦0", time: "5 min ago", tone: "green", icon: assets.activityMoney },
  { title: "Reach Milestone", subtitle: "+200 reach", time: "1 hr ago", tone: "yellow", icon: assets.activityReach },
  { title: "Campaign Created", amount: "₦0", time: "2 hr ago", tone: "blue", icon: assets.activityCampaign },
];

function Brand() {
  return (
    <a className="v2-dashboard-brand" href="/" aria-label="The Nano Influencers home">
      <img src={assets.brand} alt="" />
      <span>The Nano Influencers</span>
    </a>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <a className={`v2-dashboard-sidebar-item${active ? " is-active" : ""}`} href="#">
      <img src={icon} alt="" />
      <span>{label}</span>
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="v2-dashboard-sidebar">
      <div>
        <div className="v2-dashboard-sidebar-logo"><Brand /></div>
        <nav className="v2-dashboard-sidebar-nav" aria-label="Dashboard navigation">
          <section>
            <p className="v2-dashboard-nav-label">Main Menu</p>
            <SidebarItem icon={assets.dashboard} label="Dashboard" active />
            <SidebarItem icon={assets.wallet} label="Wallet" />
            <SidebarItem icon={assets.campaign} label="Campaigns" />
            <SidebarItem icon={assets.analytics} label="Analytics" />
          </section>
          <section className="v2-dashboard-support-nav">
            <p className="v2-dashboard-nav-label">Support</p>
            <SidebarItem icon={assets.settings} label="Settings" />
            <SidebarItem icon={assets.help} label="Help & Support" />
          </section>
        </nav>
      </div>
      <button className="v2-dashboard-logout" type="button">
        <span>Log Out</span><img src={assets.logout} alt="" />
      </button>
    </aside>
  );
}

function TopHeader({ profileOpen, onProfileClick }) {
  return (
    <header className="v2-dashboard-topbar">
      <Brand />
      <p className="v2-dashboard-welcome desktop-welcome">Welcome Back 👋</p>
      <div className="v2-dashboard-user">
        <button className="v2-dashboard-notification" type="button" aria-label="Notifications"><img src={assets.notification} alt="" /></button>
        <button
          className={`v2-dashboard-profile${profileOpen ? " is-open" : ""}`}
          type="button"
          aria-label="Open profile menu"
          aria-expanded={profileOpen}
          onClick={onProfileClick}
        >
          <img src={assets.profile} alt="Adaeze O." /><span>Adaeze O.</span>
        </button>
      </div>
    </header>
  );
}

function BalanceCard() {
  return (
    <section className="v2-dashboard-balance-card">
      <img className="v2-dashboard-balance-decor" src={assets.balanceDecor} alt="" />
      <div className="v2-dashboard-balance-copy">
        <div className="v2-dashboard-balance-title-row">
          <span className="v2-dashboard-icon-circle is-orange"><img src={assets.balance} alt="" /></span>
          <p>Current Balance</p>
        </div>
        <strong>₦0.00</strong>
        <small>No pending transactions</small>
      </div>
      <Button className="v2-dashboard-balance-button">Add Funds</Button>
    </section>
  );
}

function MetricCard({ metric }) {
  return (
    <article className="v2-dashboard-metric-card">
      <span className={`v2-dashboard-icon-circle is-${metric.tone}`}><img src={metric.icon} alt="" /></span>
      <div className="v2-dashboard-metric-text">
        <p>{metric.title}</p><strong>{metric.value}</strong><small>{metric.note}</small>
      </div>
      <button type="button">{metric.button}</button>
    </article>
  );
}

function LaunchBanner() {
  return (
    <section className="v2-dashboard-launch">
      <div className="v2-dashboard-launch-art mobile-only"><img src={assets.megaphone} alt="" /></div>
      <div className="v2-dashboard-launch-copy">
        <h2>Launch Your Campaign</h2>
        <p>Get real people to promote your brand. They engage with your content in DMs &amp; groups where trust lives.</p>
        <div className="v2-dashboard-launch-buttons"><Button>Start Now</Button><Button variant="nav">Manage</Button></div>
      </div>
      <div className="v2-dashboard-launch-art desktop-only"><img src={assets.megaphone} alt="" /></div>
    </section>
  );
}

function AnalyticsChart({ emptyState = false }) {
  const [period, setPeriod] = useState("Weekly");
  return (
    <section className="v2-dashboard-analytics-card desktop-only">
      <div className="v2-dashboard-section-heading">
        <h2>Campaign Analytics</h2>
        <div className="v2-dashboard-periods">
          {["Daily", "Weekly", "Monthly"].map((item) => <button key={item} type="button" className={period === item ? "is-active" : ""} onClick={() => setPeriod(item)}>{item}</button>)}
        </div>
      </div>
      <div className="v2-dashboard-chart">
        <div className="v2-dashboard-y-axis"><span>2200</span><span>1650</span><span>1100</span><span>550</span><span>0</span></div>
        <div className="v2-dashboard-chart-plot"><img className="grid" src={assets.chartGrid} alt="" /><img className={`lines${emptyState ? " is-empty" : ""}`} src={emptyState ? assets.emptyChartLines : assets.chartLines} alt="Campaign analytics lines" /></div>
        <div className="v2-dashboard-x-axis">{[1,2,3,4,5,6,7].map((day) => <span key={day}>Day {day}</span>)}</div>
      </div>
      <div className="v2-dashboard-chart-legend"><span><i className="yellow" />Engagements</span><span><i className="green" />Impressions</span><span><i className="red" />Reach</span></div>
    </section>
  );
}

function QuickActionItem({ action }) {
  const content = (
    <>
      <span className={`v2-dashboard-icon-circle is-${action.tone}`}><img src={action.icon} alt="" /></span>
      <span className="v2-dashboard-quick-copy"><strong>{action.title}</strong><small>{action.desc}</small></span>
      <img className="v2-dashboard-chevron desktop-only" src={assets.chevron} alt="" />
    </>
  );
  if (action.href) return <a className="v2-dashboard-quick-item" href={action.href}>{content}</a>;
  return <button className="v2-dashboard-quick-item" type="button">{content}</button>;
}

function QuickActions() {
  return (
    <section className="v2-dashboard-quick-card">
      <h2>Quick Actions</h2>
      <div className="v2-dashboard-quick-list">
        {quickActions.map((action) => <QuickActionItem key={action.title} action={action} />)}
      </div>
    </section>
  );
}

function LatestActivity({ emptyState = false }) {
  return (
    <section className={`v2-dashboard-activity-card${emptyState ? " is-empty" : ""}`}>
      <div className="v2-dashboard-section-heading"><h2>Latest Activity</h2><button className={emptyState ? "is-muted" : ""} type="button">Show all</button></div>
      {emptyState ? (
        <div className="v2-dashboard-empty-activity">
          <img src={assets.emptyActivity} alt="" />
          <h3>You have no activity</h3>
          <Button>Start a Campaign</Button>
        </div>
      ) : (
        <div className="v2-dashboard-activity-list">
          {activities.map((activity, index) => (
            <div className="v2-dashboard-activity-row" key={`${activity.title}-${index}`}>
              <div className="v2-dashboard-activity-main"><span className={`v2-dashboard-activity-icon is-${activity.tone}`}><img src={activity.icon} alt="" /></span><span><strong>{activity.title}</strong>{activity.subtitle && <small>{activity.subtitle}</small>}</span></div>
              <div className="v2-dashboard-activity-meta">{activity.amount && <strong>{activity.amount}</strong>}<small>{activity.time}</small></div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ReferralSupport() {
  const [copied, setCopied] = useState(false);
  const referral = "https://nanoinfluencer.ng/ref/adaeze";
  const copy = async () => {
    try { await navigator.clipboard.writeText(referral); setCopied(true); window.setTimeout(() => setCopied(false), 1400); } catch { setCopied(false); }
  };
  return (
    <div className="v2-dashboard-side-cards desktop-only">
      <section className="v2-dashboard-referral-card">
        <img className="decor-a" src={assets.referralDecorA} alt="" /><img className="decor-b" src={assets.referralDecorB} alt="" />
        <span className="v2-dashboard-icon-circle is-orange"><img src={assets.floatingRefer} alt="" /></span>
        <h2>Refer a Friend</h2>
        <p>Earn 2% on every campaign your referral starts and qualify for bi-weekly gadget giveaways.</p>
        <button type="button" onClick={copy}><span>{referral}</span><strong>{copied ? "Copied" : "Copy"}</strong></button>
      </section>
      <section className="v2-dashboard-support-card"><span className="v2-dashboard-icon-circle is-white"><img src={assets.help} alt="" /></span><h2>Dispute &amp; Support</h2><p>Any issues with your campaigns or account? Our support team is ready to help.</p><Button variant="nav">Contact Support</Button></section>
    </div>
  );
}

function MobileBottomNav() {
  return (
    <nav className="v2-dashboard-bottom-nav" aria-label="Mobile dashboard navigation">
      <a className="is-active" href="/dashboard"><img src={assets.dashboard} alt="" /><span>Dashboard</span></a>
      <a href="#"><img src={assets.wallet} alt="" /></a>
      <a href="#"><img src={assets.campaign} alt="" /></a>
      <a href="#"><img src={assets.analytics} alt="" /></a>
    </nav>
  );
}

function MobileProfileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="v2-dashboard-profile-modal mobile-only" role="dialog" aria-modal="true" aria-label="Profile menu">
      <button className="v2-dashboard-profile-backdrop" type="button" aria-label="Close profile menu" onClick={onClose} />
      <div className="v2-dashboard-profile-dropdown">
        <a href="#settings"><img src={assets.settings} alt="" /><span>Settings</span></a>
        <button type="button"><img src={assets.logout} alt="" /><span>Log Out</span></button>
      </div>
    </div>
  );
}

export default function V2Dashboard() {
  const params = new URLSearchParams(window.location.search);
  const previewState = params.get("state") || "";
  const emptyState = previewState === "empty";
  const [profileOpen, setProfileOpen] = useState(previewState === "profile");

  return (
    <main className="ni-v2 v2-dashboard-page">
      <Sidebar />
      <div className="v2-dashboard-main">
        <TopHeader profileOpen={profileOpen} onProfileClick={() => setProfileOpen((value) => !value)} />
        <p className="v2-dashboard-welcome mobile-only">Welcome Back 👋</p>
        <div className="v2-dashboard-title-row desktop-only"><h1>Dashboard</h1><button className="v2-dashboard-date" type="button">Last 30 days <img src={assets.dateChevron} alt="" /></button></div>
        <BalanceCard />
        <div className="v2-dashboard-metrics-scroll">{metrics.map((metric) => <MetricCard key={metric.title} metric={metric} />)}</div>
        <LaunchBanner />
        <div className="v2-dashboard-insights"><AnalyticsChart emptyState={emptyState} /><QuickActions /></div>
        <div className="v2-dashboard-lower"><LatestActivity emptyState={emptyState} /><ReferralSupport /></div>
      </div>
      <div className="v2-dashboard-floating mobile-only"><button className="is-refer" type="button"><img src={assets.floatingRefer} alt="" /></button><button className="is-help" type="button"><img src={assets.help} alt="" /></button></div>
      <MobileBottomNav />
      <MobileProfileMenu open={profileOpen} onClose={() => setProfileOpen(false)} />
    </main>
  );
}
