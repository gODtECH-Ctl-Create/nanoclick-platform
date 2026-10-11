import React, { useMemo, useState } from "react";
import "./v2-subscription-flow.css";

const assets = {
  arrowLeft: "https://www.figma.com/api/mcp/asset/b40f98c9-e608-4e9b-b666-541208cb7367.svg",
  category: "https://www.figma.com/api/mcp/asset/1f53a510-2746-4e00-8a7a-1c8b9a700f91.svg",
  focus: "https://www.figma.com/api/mcp/asset/bf3c2d11-80e5-429e-b524-5fb5b6604adf.svg",
  platform: "https://www.figma.com/api/mcp/asset/9bf7e7ad-fe54-4239-abf1-6045488dd6b2.svg",
  link: "https://www.figma.com/api/mcp/asset/ff1a64ab-5036-4db6-940b-42f7053bf328.svg",
  location: "https://www.figma.com/api/mcp/asset/98d2524b-fb67-4d17-926a-cf59f35a3aab.svg",
  notes: "https://www.figma.com/api/mcp/asset/0c87a3eb-5851-4a14-ba6e-7aaf47978d3b.svg",
  referral: "https://www.figma.com/api/mcp/asset/b8dc1e72-c944-4196-88e6-a7924d0f10f2.svg",
  promotion: "https://www.figma.com/api/mcp/asset/f25591b4-596f-4be7-9962-5950945af352.svg",
  walletTick: "https://www.figma.com/api/mcp/asset/b4ad821f-da87-408e-8512-56b70799f698.svg",
  insufficient: "https://www.figma.com/api/mcp/asset/4d47d69c-8328-4235-a716-6191bf21a89b.png",
  balanceDecor: "https://www.figma.com/api/mcp/asset/d0dab94b-19bf-4a0b-b812-418eb2eed6c1.svg",
  success: "https://www.figma.com/api/mcp/asset/17b94008-b4f7-4102-a6f7-623f049d7aff.png",
  gift: "https://www.figma.com/api/mcp/asset/9d92910f-aec1-4ae5-8970-81a987747dad.svg",
};

const fallbackDraft = {
  categories: ["Entertainment", "Real Estate"],
  specification: "Comedy",
  platform: "Instagram",
  pageLink: "https://www.instagram.com/p/DXwdnSQksI8/?igsh=d2...",
  state: "Lagos",
  area: "Ikeja",
  extra: "",
  referral: "",
  source: "Online Ads#",
};

function readDraft() {
  if (typeof window === "undefined") return fallbackDraft;
  try {
    const stored = JSON.parse(window.sessionStorage.getItem("v2CampaignDraft") || "null");
    return stored ? { ...fallbackDraft, ...stored } : fallbackDraft;
  } catch {
    return fallbackDraft;
  }
}

function go(path) {
  if (typeof window !== "undefined") window.location.assign(path);
}

function PreviewCard({ icon, label, description, value }) {
  return (
    <article className="v2-preview-card">
      <span className="v2-preview-card-icon"><img src={icon} alt="" /></span>
      <div className="v2-preview-card-copy">
        <span className="v2-preview-card-label">{label}</span>
        <span className="v2-preview-card-description">{description}</span>
        <strong>{value || "----"}</strong>
      </div>
    </article>
  );
}

export function V2PreviewSelections() {
  const draft = useMemo(readDraft, []);
  const [accepted, setAccepted] = useState(() => (
    typeof window !== "undefined" ? window.innerWidth <= 700 : false
  ));

  const previewItems = [
    {
      icon: assets.category,
      label: "Profile/Page Category",
      description: "How do you categorize your Profile/Page?",
      value: (draft.categories || []).join(", ") || "----",
    },
    {
      icon: assets.focus,
      label: "Profile/Page Focus",
      description: "What is your page/profile about?",
      value: draft.specification || "Comedy",
    },
    {
      icon: assets.platform,
      label: "Social Platform",
      description: "Select the Social Platform",
      value: draft.platform || "Instagram",
    },
    {
      icon: assets.link,
      label: "Profile/Page Link",
      description: "How do you categorize your Profile/Page?",
      value: draft.pageLink || fallbackDraft.pageLink,
    },
    {
      icon: assets.location,
      label: "Primary Location",
      description: "Primary Location of Business/Individual",
      value: [draft.area, draft.state].filter(Boolean).join(", ") || "Ikeja, Lagos",
    },
    {
      icon: assets.notes,
      label: "Additional Notes",
      description: "Share anything you would like us to know:",
      value: draft.extra || "----",
    },
    {
      icon: assets.referral,
      label: "Referral Code",
      description: "Who referred you?",
      value: draft.referral || "----",
    },
    {
      icon: assets.promotion,
      label: "Promotion",
      description: "How did you hear about us?",
      value: draft.source || "Online Ads#",
    },
  ];

  return (
    <main className="v2-preview-page">
      <div className="v2-preview-shell">
        <header className="v2-preview-backbar">
          <button type="button" onClick={() => go("/campaigns/social-media-details")}>
            <img src={assets.arrowLeft} alt="" />
            <span>Go Back</span>
          </button>
        </header>

        <section className="v2-preview-tabs" aria-label="Campaign details steps">
          <button type="button" onClick={() => go("/campaigns/social-media-details")}>Social Media Details</button>
          <button type="button" className="is-active">Preview Selections</button>
        </section>

        <section className="v2-preview-grid">
          {previewItems.map((item) => <PreviewCard key={item.label} {...item} />)}
        </section>

        <section className="v2-preview-summary">
          <h2>Payment Summary</h2>
          <div className="v2-preview-summary-row">
            <span>Total Cost</span>
            <strong>₦5,000</strong>
          </div>
          <div className="v2-preview-summary-row">
            <span>Charged from</span>
            <span className="v2-preview-wallet"><i><img src={assets.walletTick} alt="" /></i>Wallet</span>
          </div>
          <div className="v2-preview-summary-row is-invoice">
            <span>Invoice ID</span>
            <code>#BkSOGJuI26I15:44</code>
          </div>
        </section>

        <section className="v2-preview-terms">
          <h2>Terms &amp; Conditions</h2>
          <label>
            <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
            <span className="v2-preview-checkbox" aria-hidden="true">{accepted ? "✓" : ""}</span>
            <span>I have read and agreed to the terms &amp; conditions of this service. Read terms and conditions here</span>
          </label>
        </section>

        <button className="v2-preview-confirm" type="button" onClick={() => go("/campaigns/insufficient-balance")}>
          Confirm Payment
        </button>
      </div>
    </main>
  );
}

function OutcomeButton({ children, tone = "primary", onClick }) {
  return (
    <button className={`v2-outcome-button ${tone === "secondary" ? "is-secondary" : ""}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export function V2InsufficientBalance() {
  return (
    <main className="v2-outcome-page">
      <section className="v2-outcome-shell v2-insufficient-shell">
        <div className="v2-outcome-heading">
          <img className="v2-outcome-hero" src={assets.insufficient} alt="" />
          <div>
            <h1>Insufficient Balance</h1>
            <p>Your wallet balance is too low to complete this payment. Please top up to proceed.</p>
          </div>
        </div>

        <article className="v2-insufficient-amount">
          <img src={assets.balanceDecor} alt="" />
          <span>Order amount</span>
          <strong>₦60,000.00</strong>
        </article>

        <article className="v2-insufficient-breakdown">
          <div><span>Wallet balance</span><strong>₦0</strong></div>
          <div><span>You need</span><strong>₦60,000 more</strong></div>
        </article>

        <div className="v2-outcome-actions">
          <OutcomeButton onClick={() => go("/wallet")}>Top Up</OutcomeButton>
          <OutcomeButton tone="secondary" onClick={() => go("/dashboard")}>Go to Dashboard</OutcomeButton>
        </div>
      </section>
    </main>
  );
}

export function V2SubscriptionSuccessful() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://nanoinfluencer.ng/ref/adaeze";

  const copyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="v2-outcome-page">
      <section className="v2-outcome-shell v2-success-shell">
        <div className="v2-outcome-heading">
          <img className="v2-outcome-hero" src={assets.success} alt="" />
          <div>
            <h1>Subscription Successful!</h1>
            <p>Your social media profile has been submitted. We will review and get back to you shortly.</p>
          </div>
        </div>

        <OutcomeButton onClick={() => go("/dashboard")}>View Dashboard</OutcomeButton>

        <section className="v2-cashback-wrap">
          <div className="v2-cashback-banner">🎉 Congratulations — you qualified for an Instant 1% Cashback!</div>
          <div className="v2-cashback-card">
            <div className="v2-cashback-heading">
              <span><img src={assets.gift} alt="" /></span>
              <h2>Claim your Cashback now</h2>
            </div>
            <p>Share the link &amp; image below on your WhatsApp Status to get instant 1% cashback on this service. You also have a chance to win exciting prizes like PCs and TV sets in our weekly raffle draw, exclusively for customers who take part in cashback activities.</p>
            <button className="v2-cashback-link" type="button" onClick={copyReferral}>
              <span>{referralLink}</span>
              <strong>{copied ? "Copied" : "Copy"}</strong>
            </button>
            <OutcomeButton>Download Image</OutcomeButton>
          </div>
        </section>
      </section>
    </main>
  );
}
