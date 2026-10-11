/**
 * Self-contained fallback artwork for the Nano Influencers V2 frontend.
 * The original Figma MCP asset URLs are short-lived and must not be used
 * as production runtime dependencies. These SVG data URIs keep icons and
 * imagery available offline and across every deployment.
 */
const iconPaths = {
  arrowleft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  arrowright: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
  arrowup: '<path d="M12 19V5m-7 7 7-7 7 7"/>',
  arrowdown: '<path d="M12 5v14m-7-7 7 7 7-7"/>',
  back: '<path d="M15 18 9 12l6-6"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  dropdown: '<path d="m6 9 6 6 6-6"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  datechevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  success: '<circle cx="12" cy="12" r="9" fill="#16a36a" stroke="none"/><path d="m7 12 3 3 7-7" stroke="#fff"/>',
  verify: '<path d="M12 3 15 5l4 .5.5 4L22 13l-2.5 3-.5 4-4 .5-3 2-3-2-4-.5-.5-4L2 13l2.5-3 .5-4L9 5z"/><path d="m8 12 2.5 2.5L16 9"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  upload: '<path d="M12 16V4m-5 5 5-5 5 5"/><path d="M4 16v4h16v-4"/>',
  download: '<path d="M12 4v12m-5-5 5 5 5-5"/><path d="M4 18v3h16v-3"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  edit: '<path d="m4 16-.8 4.8L8 20l11-11-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 14h10l1-14M9 7V4h6v3"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeslash: '<path d="M3 3l18 18"/><path d="M10.6 6.2A10.8 10.8 0 0 1 12 6c6.5 0 10 6 10 6a15 15 0 0 1-3 3.5M6.2 6.3C3.4 8.1 2 12 2 12s3.5 6 10 6c1.3 0 2.5-.3 3.5-.7"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  filter: '<path d="M3 5h18M6 12h12m-8 7h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.3 1-1.5 2.6-1.6-.6a8 8 0 0 1-1.7 1l-.3 1.7h-3l-.3-1.7a8 8 0 0 1-1.7-1l-1.6.6-1.5-2.6 1.3-1a7 7 0 0 1 0-2l-1.3-1 1.5-2.6 1.6.6a8 8 0 0 1 1.7-1l.3-1.7h3l.3 1.7a8 8 0 0 1 1.7 1l1.6-.6 1.5 2.6-1.3 1a7 7 0 0 1 .1 1.9z"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/>',
  dashboard: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/>',
  wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M16 14h2"/>',
  campaign: '<path d="M4 13V9l13-5v14L4 13z"/><path d="m7 14 2 6h4l-3-5M17 9h3v4h-3"/>',
  analytics: '<path d="M4 20V11M10 20V5M16 20v-7M22 20H2"/>',
  notification: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.4 2.4 0 1 1 4.5 1.2c-.9 1.1-2.2 1.3-2.2 3M12 17h.01"/>',
  logout: '<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M16 16l5-4-5-4M21 12H9"/>',
  play: '<path d="m8 5 12 7-12 7z" fill="#315c7a" stroke="none"/>',
  pause: '<path d="M8 5h3v14H8zM14 5h3v14h-3z" fill="#315c7a" stroke="none"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
  like: '<path d="M7 10v11H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3zm0 0 5-7a3 3 0 0 1 2 3l-1 4h5a3 3 0 0 1 3 4l-2 5a3 3 0 0 1-3 2H7"/>',
  dislike: '<path d="M7 14V3H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3zm0 0 5 7a3 3 0 0 0 2-3l-1-4h5a3 3 0 0 0 3-4l-2-5a3 3 0 0 0-3-2H7"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m9 11 6-5M9 13l6 5"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.2 1.2M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.2-1.2"/>',
  comment: '<path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9 9 0 0 1-4-.9L3 21l1.6-4.5A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/>',
  followers: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0M17 5.5a3 3 0 0 1 0 5.5m1 2a5 5 0 0 1 4 5"/>',
  friend: '<circle cx="12" cy="7" r="4"/><path d="M4 21a8 8 0 0 1 16 0M18 8h4m-2-2v4"/>',
  community: '<circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2.5"/><circle cx="19" cy="10" r="2.5"/><path d="M6 21a6 6 0 0 1 12 0M1 20a4 4 0 0 1 4-5m18 5a4 4 0 0 0-4-5"/>',
  group: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20a7 7 0 0 1 14 0M15 15a5 5 0 0 1 7 5"/>',
  report: '<path d="M12 3 22 21H2L12 3z"/><path d="M12 9v5m0 3h.01"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
  referral: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="16" r="3"/><path d="M11 8h5a3 3 0 0 1 3 3v2M5 11v5a3 3 0 0 0 3 3h6"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-2 9 6-3 6 3-2-9"/>',
  locked: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  external: '<path d="M14 3h7v7M21 3l-10 10"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  save: '<path d="M5 3h14a2 2 0 0 1 2 2v16l-9-5-9 5V5a2 2 0 0 1 2-2z"/>',
  views: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  poll: '<path d="M5 4h14v17H5zM8 9h8M8 13h8M8 17h5"/>',
  searchicon: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  facebook: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#1877f2" stroke="none"/><path d="M14 22V13h3l.5-3H14V8c0-.9.4-1.5 1.6-1.5H18V3.8c-.8-.1-1.6-.2-2.6-.2-2.7 0-4.4 1.6-4.4 4.5V10H8v3h3v9z" fill="#fff" stroke="none"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4" fill="#ff0033" stroke="none"/><path d="m10 9 6 3-6 3z" fill="#fff" stroke="none"/>',
  twitter: '<path d="M4 3h5.5l10.5 18h-5.5zM20 3 4 21"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  tiktok: '<path d="M14 3v11a4 4 0 1 1-4-4"/><path d="M14 3c1 3 3 4 6 4"/>',
  linkedin: '<rect x="2" y="2" width="20" height="20" rx="3" fill="#0a66c2" stroke="none"/><path d="M7 10v7M7 7h.01M11 17v-7h3v1a3 3 0 0 1 4 3v3" stroke="#fff"/>',
  whatsapp: '<circle cx="12" cy="12" r="10" fill="#25d366" stroke="none"/><path d="m7 18 1-3a6 6 0 1 1 2 2z" stroke="#fff"/><path d="M10 9c.5 2 2 3.5 4 4l1-1 2 1c-.5 2-2 2-3 2-3 0-6-3-6-6 0-1 0-2 2-2l1 2z" fill="#fff" stroke="none"/>',
  telegram: '<circle cx="12" cy="12" r="10" fill="#2aabee" stroke="none"/><path d="m5 11 13-5-3 13-4-4-2 2v-4z" fill="#fff" stroke="none"/>',
  google: '<circle cx="12" cy="12" r="9" fill="#fff" stroke="#e2e8f0"/><path d="M19 12h-7" stroke="#4285f4" stroke-width="3"/><path d="M12 5a7 7 0 0 1 5 2" stroke="#34a853" stroke-width="3"/><path d="M5 8a7 7 0 0 1 7-3" stroke="#ea4335" stroke-width="3"/><path d="M5 16a7 7 0 0 1 0-8" stroke="#fbbc05" stroke-width="3"/>',
};
const iconAliases = {
  arrowsleft: 'arrowleft', arrowleft: 'arrowleft', arrowback: 'arrowleft',
  chevronleft: 'arrowleft', carouselleft: 'arrowleft', left: 'arrowleft',
  arrowsright: 'arrowright', chevronright: 'arrowright', carouselright: 'arrowright', right: 'arrowright',
  closeicon: 'close', cancel: 'close', delete: 'trash', notificationtrash: 'trash',
  notificationedit: 'edit', notificationpause: 'pause', pausing: 'pause',
  eyeslash: 'eyeslash', brandicon: 'brandicon', brandmobile: 'brandmobile',
  datechevron: 'dropdown', faqchevron: 'dropdown', accordion: 'dropdown',
  profile: 'profile', profilesmall: 'profile', profilelarge: 'profile',
  statpeople: 'followers', followers: 'followers',
  statbusiness: 'campaign', growth: 'analytics', trend: 'analytics',
  view: 'eye', viewicon: 'eye', likeicon: 'like', dislikeicon: 'dislike',
  instagram: 'instagram', facebook: 'facebook', youtube: 'youtube', twitter: 'twitter',
  tiktok: 'tiktok', linkedin: 'linkedin', whatsapp: 'whatsapp', telegram: 'telegram',
  google: 'google', audiomack: 'music', spotify: 'music', boomplay: 'music', youtubemusic: 'youtube',
};
function hashOf(value) {
  let hash = 2166136261;
  for (const c of value) hash = Math.imul(hash ^ c.charCodeAt(0), 16777619);
  return hash >>> 0;
}
function dataSvg(markup, width = 64, height = 64) {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '">' + markup + '</svg>';
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}
function portrait(key) {
  const seed = hashOf(key);
  const bg = ['#e3eff8', '#f8e7dd', '#e4eee6', '#eee6f7', '#f7edce'][seed % 5];
  const skin = ['#8e563f', '#b87957', '#d39b79', '#6d4235', '#e3b08b'][Math.floor(seed / 5) % 5];
  const hair = ['#252a32', '#533b2b', '#171d22', '#65452d'][Math.floor(seed / 17) % 4];
  const shirt = ['#1e678d', '#e7a458', '#418c7a', '#7253a3', '#d26f63'][Math.floor(seed / 31) % 5];
  return dataSvg('<defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="' + bg + '"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><rect width="120" height="120" rx="24" fill="url(#bg)"/><circle cx="60" cy="43" r="25" fill="' + hair + '"/><ellipse cx="60" cy="48" rx="20" ry="24" fill="' + skin + '"/><path d="M40 44c-2-26 38-37 42-2-8-3-13-10-16-17-4 10-14 17-26 19z" fill="' + hair + '"/><circle cx="53" cy="48" r="2" fill="#272727"/><circle cx="68" cy="48" r="2" fill="#272727"/><path d="M55 60q5 4 10 0" fill="none" stroke="#7f4237" stroke-width="2" stroke-linecap="round"/><path d="M23 120c2-25 17-36 37-36s35 11 37 36" fill="' + shirt + '"/><path d="M48 85l12 14 12-14" fill="#fff" opacity=".85"/>', 120, 120);
}
function logo(key) {
  const mark = '<rect x="2" y="7" width="28" height="28" rx="9" fill="#146f9d"/><path d="M9 24l6-10 6 10 4-6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>';
  if (key === 'brandicon') return dataSvg(mark, 32, 42);
  return dataSvg(mark + '<text x="39" y="27" fill="#17364b" font-family="Arial, sans-serif" font-size="15" font-weight="700">Nano</text><text x="39" y="40" fill="#42738d" font-family="Arial, sans-serif" font-size="10" font-weight="600">INFLUENCERS</text>', 150, 44);
}
function illustration(key) {
  const seed = hashOf(key);
  const accent = ['#2879ab', '#16a085', '#7563bb', '#de8a43', '#cd667d'][seed % 5];
  const accent2 = ['#d9ecf7', '#d7f1e6', '#e8e0fb', '#fae8d5', '#f8dde5'][seed % 5];
  return dataSvg('<defs><linearGradient id="wash" x2="1" y2="1"><stop stop-color="#f5f9fc"/><stop offset="1" stop-color="' + accent2 + '"/></linearGradient></defs><rect width="360" height="230" rx="22" fill="url(#wash)"/><circle cx="300" cy="32" r="45" fill="' + accent + '" opacity=".13"/><circle cx="48" cy="202" r="58" fill="' + accent + '" opacity=".09"/><rect x="36" y="26" width="288" height="178" rx="15" fill="#fff" stroke="#d9e5ed"/><rect x="36" y="26" width="288" height="27" rx="15" fill="' + accent + '"/><circle cx="52" cy="39" r="3" fill="#fff" opacity=".9"/><circle cx="63" cy="39" r="3" fill="#fff" opacity=".6"/><circle cx="74" cy="39" r="3" fill="#fff" opacity=".4"/><rect x="54" y="69" width="116" height="8" rx="4" fill="#dfe8ee"/><rect x="54" y="84" width="82" height="5" rx="3" fill="#e8eef2"/><rect x="54" y="106" width="114" height="68" rx="8" fill="' + accent2 + '"/><path d="M65 157l22-21 18 10 27-25 24 17" fill="none" stroke="' + accent + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="187" y="70" width="113" height="42" rx="8" fill="#f6f9fb" stroke="#e0e8ed"/><circle cx="207" cy="91" r="9" fill="' + accent2 + '"/><path d="M203 91l3 3 5-6" fill="none" stroke="' + accent + '" stroke-width="2" stroke-linecap="round"/><rect x="223" y="84" width="60" height="5" rx="3" fill="#b7c9d5"/><rect x="223" y="94" width="41" height="4" rx="2" fill="#d6e1e7"/><rect x="187" y="123" width="113" height="51" rx="8" fill="#f6f9fb" stroke="#e0e8ed"/><rect x="200" y="136" width="14" height="25" rx="3" fill="' + accent + '" opacity=".8"/><rect x="221" y="145" width="14" height="16" rx="3" fill="' + accent + '" opacity=".55"/><rect x="242" y="130" width="14" height="31" rx="3" fill="' + accent + '"/><rect x="263" y="140" width="14" height="21" rx="3" fill="' + accent + '" opacity=".4"/>', 360, 230);
}
function social(key) {
  const k = key.replace(/[^a-z]/g, '');
  const path = iconPaths[k];
  if (path) return dataSvg('<g stroke="#315c7a" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + path + '</g>', 24, 24);
  const text = (k === 'twitter' ? 'X' : k === 'linkedin' ? 'in' : k === 'facebook' ? 'f' : k === 'youtube' ? '▶' : '•');
  return dataSvg('<circle cx="12" cy="12" r="11" fill="#315c7a"/><text x="12" y="16" text-anchor="middle" font-family="Arial,sans-serif" font-size="' + (text.length > 1 ? '10' : '15') + '" font-weight="700" fill="#fff">' + text + '</text>', 24, 24);
}
export function localAsset(name = 'icon') {
  const original = String(name || 'icon');
  const key = original.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (/^(brand|brandmobile|brandicon|logo|wordmark)$/.test(key)) return logo(key);
  if (/^(hero|mobile)[1-9]$/.test(key) || /^(ada|kwame|olivia|profile|profilesmall|profilelarge|avatar|testimonialphoto|creatorphoto)$/.test(key)) return portrait(key);
  if (/^(desktopdemo|mobiledemo|videopreview|creative|campaigncover|campaignpreview|blender|insufficient|balancedecor|cashbackdecor|demo|previewimage)$/.test(key)) return illustration(key);
  if (/^(success|confirmation|walletick|verified|verify)$/.test(key)) return dataSvg('<circle cx="32" cy="32" r="27" fill="#dcf6e8"/><circle cx="32" cy="32" r="19" fill="#16a36a"/><path d="m22 32 7 7 14-15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 64, 64);
  if (/^(bronze|silver|gold|package|category|focus|platform|referral|promotion)$/.test(key)) return dataSvg('<rect width="72" height="72" rx="18" fill="#f3f7fa"/><circle cx="36" cy="30" r="18" fill="' + (key === 'gold' ? '#e9bd55' : key === 'silver' ? '#c4d1da' : key === 'bronze' ? '#bd865f' : '#d8eaf5') + '"/><path d="M26 47l-4 17 14-8 14 8-4-17" fill="#2c83ad" opacity=".85"/><circle cx="30" cy="25" r="3" fill="#fff" opacity=".7"/>', 72, 72);
  if (['facebook','youtube','twitter','instagram','tiktok','linkedin','whatsapp','telegram','google','spotify','audiomack','boomplay','youtubemusic'].includes(key)) return social(key);
  if (iconPaths[key] || iconPaths[iconAliases[key]]) {
    const iconKey = iconAliases[key] || key;
    const body = iconPaths[iconKey] || iconPaths[key];
    return dataSvg('<g fill="none" stroke="#315c7a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + body + '</g>', 24, 24);
  }
  if (/(image|picture|photo|portrait|creator|influencer)/.test(key)) return portrait(key);
  return illustration(key);
}
