import React, { useMemo, useRef, useState } from "react";
import "./v2-social-task-campaign.css";

const commonIcons = {
  arrowLeft: "https://www.figma.com/api/mcp/asset/54c4a69b-6429-4637-a772-1d76a5c38f2f.svg",
};

const facebookIcons = {
  like: "https://www.figma.com/api/mcp/asset/f96f5ff0-20a4-4f01-8a48-24322afa53a8.svg",
  followers: "https://www.figma.com/api/mcp/asset/e3ffaef6-cda5-41c3-8205-74c43eab4d64.svg",
  share: "https://www.figma.com/api/mcp/asset/02b7e92b-4a57-4cce-8f55-901d6a45da9b.svg",
  comment: "https://www.figma.com/api/mcp/asset/a9b9df5b-526c-490a-80d5-5cda055274a0.svg",
  live: "https://www.figma.com/api/mcp/asset/fc1b98ab-d3dc-4802-85ff-89e5c01c358d.svg",
  friend: "https://www.figma.com/api/mcp/asset/41a2d6c0-346d-46b1-867a-c28e9dd6b4be.svg",
  story: "https://www.figma.com/api/mcp/asset/12fb610a-ac07-4bc3-afc9-269b34410305.svg",
  video: "https://www.figma.com/api/mcp/asset/6f09d8b9-be70-408a-9f9f-458bd9983296.svg",
  report: "https://www.figma.com/api/mcp/asset/4d7eec2f-c027-4146-8d19-6522948658dc.svg",
  external: "https://www.figma.com/api/mcp/asset/bd823c4f-bb73-43e8-b392-b016d1ef9a8e.svg",
  group: "https://www.figma.com/api/mcp/asset/8245189e-ed98-4971-b9c3-add828aa36b7.svg",
  interactive: "https://www.figma.com/api/mcp/asset/8c9d368b-e0c1-4555-bcfe-05d8336c33ec.svg",
};

const youtubeIcons = {
  like: "https://www.figma.com/api/mcp/asset/c13d4b83-5864-4e33-aac9-8f1f4880c6d1.svg",
  subscribe: "https://www.figma.com/api/mcp/asset/ffee6878-8d33-4374-a5ff-5174fc24e7a2.svg",
  share: "https://www.figma.com/api/mcp/asset/fa931774-5bed-4645-b1b4-9cc57a039d3a.svg",
  comment: "https://www.figma.com/api/mcp/asset/07894ea6-0c2d-4075-874a-d8b54b3d93cd.svg",
  report: "https://www.figma.com/api/mcp/asset/071bd513-ce7e-4110-aa22-28c1a380e899.svg",
  dislike: "https://www.figma.com/api/mcp/asset/0b0d3fca-b7a0-4222-b0a6-93b9a3c2af6c.svg",
  save: "https://www.figma.com/api/mcp/asset/af0b613f-38e4-4252-9b9a-b5f3a901d095.svg",
  video: "https://www.figma.com/api/mcp/asset/3ceac788-d4a1-4858-8cde-0cdc806b9f48.svg",
  live: "https://www.figma.com/api/mcp/asset/49e2a956-e5d6-4a01-9ed1-6466fc8000be.svg",
  external: "https://www.figma.com/api/mcp/asset/8b65da88-7df1-4c22-a4cc-23d8ae5197d6.svg",
  music: "https://www.figma.com/api/mcp/asset/4e9409e1-9a02-4dd7-9b84-09616b32d621.svg",
  interactive: "https://www.figma.com/api/mcp/asset/0ea73510-4535-4633-b1b3-13129943b04d.svg",
  collab: "https://www.figma.com/api/mcp/asset/004fa6f4-7da8-40c4-b717-0637a340fa0a.svg",
  scissor: "https://www.figma.com/api/mcp/asset/091c3159-79b9-4198-8c02-c42669133c6d.svg",
  background: "https://www.figma.com/api/mcp/asset/b1bb3b89-2fe6-444e-ad91-9e17f4454604.svg",
  community: "https://www.figma.com/api/mcp/asset/986b2b9b-f331-404f-9c69-a3d3b97ff3b8.svg",
};

const xIcons = {
  like: "https://www.figma.com/api/mcp/asset/8abceaec-1d5c-4507-a2b9-156d0c06d89c.svg",
  followers: "https://www.figma.com/api/mcp/asset/a945965d-cf54-406b-b1a2-a473ccba795f.svg",
  share: "https://www.figma.com/api/mcp/asset/3ebc3c69-1d7e-418c-9775-352cb3042e72.svg",
  comment: "https://www.figma.com/api/mcp/asset/644006bd-6838-4193-b6c4-4997196512a9.svg",
  report: "https://www.figma.com/api/mcp/asset/646aa717-eb17-4aea-b484-3b6b0a426c54.svg",
  repost: "https://www.figma.com/api/mcp/asset/a8c8fd9b-fd73-4e54-a293-d23d317aae4d.svg",
  quote: "https://www.figma.com/api/mcp/asset/4f2fcbcc-74d6-4cfa-9aa4-9656e93b1025.svg",
  video: "https://www.figma.com/api/mcp/asset/9abaf2b7-d123-4b6b-8373-4bb09b5f2080.svg",
  space: "https://www.figma.com/api/mcp/asset/3b4eda35-d96f-4aa1-9abf-1c6d5419d388.svg",
  external: "https://www.figma.com/api/mcp/asset/04a26c36-7695-4972-a2be-54aae4caa007.svg",
  group: "https://www.figma.com/api/mcp/asset/4c79df14-c115-410b-8ad9-0370ca4ae938.svg",
  interactive: "https://www.figma.com/api/mcp/asset/9a8aa8d8-aed1-4620-8b0f-ed9ab42307c8.svg",
  views: "https://www.figma.com/api/mcp/asset/24c86f82-f2e3-4393-95e8-877956a93022.svg",
  poll: "https://www.figma.com/api/mcp/asset/60c44821-cac6-49a3-8c47-56ee83bc146d.svg",
  bookmark: "https://www.figma.com/api/mcp/asset/c0345f5b-0316-42bb-af67-992c538a12c0.svg",
  trend: "https://www.figma.com/api/mcp/asset/929e18fc-3ec3-443c-91df-aa52d4917dfa.svg",
};

const instagramIcons = {
  like: "https://www.figma.com/api/mcp/asset/91e71f00-30dc-43d4-aec1-4574c6ad75a4.svg",
  followers: "https://www.figma.com/api/mcp/asset/e853b624-baf6-4fbb-9b5d-bffcd181f6cb.svg",
  share: "https://www.figma.com/api/mcp/asset/d153a399-9725-4ff8-86fa-7518d7476c5e.svg",
  comment: "https://www.figma.com/api/mcp/asset/40d68083-7938-4fea-8239-ead3707ac30f.svg",
  live: "https://www.figma.com/api/mcp/asset/399e4dca-346c-415f-a7a2-e4fadd2a787f.svg",
  save: "https://www.figma.com/api/mcp/asset/1cbb7ba3-7322-42e1-97a5-44e5ebc2da4e.svg",
  views: "https://www.figma.com/api/mcp/asset/c26b2649-b19c-4998-9b44-5f56ef3a5433.svg",
  video: "https://www.figma.com/api/mcp/asset/81b42fa5-29c9-41b5-be9e-3e9c2bee4afc.svg",
  report: "https://www.figma.com/api/mcp/asset/5f02954e-983d-4bf9-8fea-0cf40bdb3d0a.svg",
  external: "https://www.figma.com/api/mcp/asset/03b578c3-1af5-4dc6-b1fb-ab0bdcae4e5c.svg",
  group: "https://www.figma.com/api/mcp/asset/bd2e5c15-4a76-4584-a042-61d5542fa5bb.svg",
  interactive: "https://www.figma.com/api/mcp/asset/b9d23ebf-13f6-4d92-82e2-357814c0f853.svg",
};

const tiktokIcons = {
  like: "https://www.figma.com/api/mcp/asset/1b97e3b2-8a95-4009-ae84-7942dc7a3a0e.svg",
  followers: "https://www.figma.com/api/mcp/asset/f73232ef-1932-4a7b-add0-6c3d3ff5fbf6.svg",
  share: "https://www.figma.com/api/mcp/asset/07d63ece-7492-4cfb-b038-257aa016d756.svg",
  comment: "https://www.figma.com/api/mcp/asset/ec5e9a70-b4f0-4e31-8550-78a1c10c1fcc.svg",
  report: "https://www.figma.com/api/mcp/asset/de079c03-03b5-44ad-bba5-ba4cb5e68c00.svg",
  repost: "https://www.figma.com/api/mcp/asset/d87abe82-dcea-453b-a8ef-eb1a2f491226.svg",
  bookmark: "https://www.figma.com/api/mcp/asset/9a3fc6bb-36c3-4c64-8861-ecdfcfe269ac.svg",
  external: "https://www.figma.com/api/mcp/asset/73c03954-c625-4540-a4ea-72885f26ceea.svg",
  live: "https://www.figma.com/api/mcp/asset/6f3f3547-2314-4e37-bc24-2208d8e0c7c7.svg",
  views: "https://www.figma.com/api/mcp/asset/1b6e4254-4082-4bbf-82bb-e76652e41858.svg",
  music: "https://www.figma.com/api/mcp/asset/561e8891-7569-4bae-a98c-469ae356a5d6.svg",
  interactive: "https://www.figma.com/api/mcp/asset/ebb34198-d5e2-4a05-a98d-beb00cc58664.svg",
  duet: "https://www.figma.com/api/mcp/asset/f73232ef-1932-4a7b-add0-6c3d3ff5fbf6.svg",
  lipsync: "https://www.figma.com/api/mcp/asset/f590d319-9e9b-4581-bb8c-629d5eb186b5.svg",
  mimic: "https://www.figma.com/api/mcp/asset/864c2289-8161-4640-818a-01c182ac92fc.svg",
  stitch: "https://www.figma.com/api/mcp/asset/5175fb35-8050-48fd-82dc-bd8fe4b8ca27.svg",
};


const linkedinIcons = {
  like: "https://www.figma.com/api/mcp/asset/32300350-2acb-49b7-9722-187e6fa4716b.svg",
  followers: "https://www.figma.com/api/mcp/asset/12df5c41-0982-49ec-bf14-a5d02c5de2cf.svg",
  share: "https://www.figma.com/api/mcp/asset/6c1cec1b-8c9a-4816-9232-d80e1ee82f46.svg",
  comment: "https://www.figma.com/api/mcp/asset/add318b6-f24b-4cdb-b5b7-966feb7d1b36.svg",
  live: "https://www.figma.com/api/mcp/asset/bbfc9d64-b1dd-4513-ba44-0299d1279bac.svg",
  connections: "https://www.figma.com/api/mcp/asset/12df5c41-0982-49ec-bf14-a5d02c5de2cf.svg",
  save: "https://www.figma.com/api/mcp/asset/6137c24e-a50e-4681-b92b-8110973261aa.svg",
  video: "https://www.figma.com/api/mcp/asset/71e8c8b8-298b-48dd-9128-4991a91b4cca.svg",
  report: "https://www.figma.com/api/mcp/asset/7bbd7a70-04b7-48bc-9395-37915e177204.svg",
  external: "https://www.figma.com/api/mcp/asset/ae40581e-ddf6-44dc-b1ca-9b67f7637040.svg",
  repost: "https://www.figma.com/api/mcp/asset/87e8182d-7a6d-4c36-b484-e5f75123c8cf.svg",
  interactive: "https://www.figma.com/api/mcp/asset/260f2b3e-db75-4bb3-a2b9-fc358aff2ab4.svg",
};

const audiomackIcons = {
  liked: "https://www.figma.com/api/mcp/asset/ca182e7d-2a4f-4b4f-97fb-b21f91b2da8d.svg",
  follow: "https://www.figma.com/api/mcp/asset/24e66194-2efd-49b6-a59d-7d73c6af0707.svg",
  share: "https://www.figma.com/api/mcp/asset/4823fdde-76df-4e1a-81c7-1a3320015c40.svg",
  boost: "https://www.figma.com/api/mcp/asset/a9926da1-4571-4bae-aa4c-e67d856bb59f.svg",
  playlist: "https://www.figma.com/api/mcp/asset/92aa57f4-f850-4e75-b338-1a7656f53241.svg",
  resave: "https://www.figma.com/api/mcp/asset/db66e9b4-2a47-4d7d-856a-87e040b16ca1.svg",
  unique: "https://www.figma.com/api/mcp/asset/fc5b61ba-d215-471d-b19e-5f20e3aa5a9d.svg",
  multiple: "https://www.figma.com/api/mcp/asset/27cfc1c1-a130-47d8-b7fc-729de7acbf9b.svg",
  reup: "https://www.figma.com/api/mcp/asset/f9cab50a-4f66-4945-94e8-a417d65c5177.svg",
  comment: "https://www.figma.com/api/mcp/asset/e31d2e29-4411-40b2-9f2f-773140209f46.svg",
  highlight: "https://www.figma.com/api/mcp/asset/48cf47bf-3ccb-4201-8550-617aa3cc2bc5.svg",
  embed: "https://www.figma.com/api/mcp/asset/8a79651f-af25-4727-aa02-fbf14e0e1edd.svg",
};

const boomplayIcons = {
  favourite: "https://www.figma.com/api/mcp/asset/c2da1a7f-a1e9-45bb-9cd6-bbdee538ef5d.svg",
  download: "https://www.figma.com/api/mcp/asset/eddeae37-937d-4161-b640-f6ffa7cc4e44.svg",
  share: "https://www.figma.com/api/mcp/asset/f3624aff-b054-40b2-a4e7-b922adb6250c.svg",
  boost: "https://www.figma.com/api/mcp/asset/27f5fed6-ba69-42f5-afc7-162f90c8a8e9.svg",
  playlist: "https://www.figma.com/api/mcp/asset/5f331206-019d-46d9-9e73-b309e07a262e.svg",
  comment: "https://www.figma.com/api/mcp/asset/9d1b3e93-f8ae-45a2-a9b1-c66a16e678cb.svg",
  unique: "https://www.figma.com/api/mcp/asset/9c7f0788-2ece-4ad8-921f-bdcc99fb61c5.svg",
  multiple: "https://www.figma.com/api/mcp/asset/26e070b5-b896-42bf-888a-4de48d833449.svg",
  interactive: "https://www.figma.com/api/mcp/asset/5ece4824-1c75-4a9c-ab08-a348a9c92444.svg",
  report: "https://www.figma.com/api/mcp/asset/9a131686-6959-4c8b-b515-cc207501ca3c.svg",
  video: "https://www.figma.com/api/mcp/asset/72e56968-62f5-45a4-b5b7-1c3d08cc57cb.svg",
  embed: "https://www.figma.com/api/mcp/asset/df5cc09d-3468-475d-b622-479d5a528a9b.svg",
};

const spotifyIcons = {
  liked: "https://www.figma.com/api/mcp/asset/aee9b360-a701-43db-a9d8-f0d891f0d18d.svg",
  follow: "https://www.figma.com/api/mcp/asset/57aed7dd-b92b-46f9-96c3-632b891143ec.svg",
  share: "https://www.figma.com/api/mcp/asset/c5508c9b-f1b9-4a8b-b309-2a260f5cfc07.svg",
  boost: "https://www.figma.com/api/mcp/asset/5d6b2c3e-b484-4abe-a9a3-b7e9712d9e30.svg",
  playlist: "https://www.figma.com/api/mcp/asset/b10b82d6-5200-49f6-8d9c-3f4f19c228d6.svg",
  resave: "https://www.figma.com/api/mcp/asset/ecbc4250-fd02-45ff-a595-364ae86ae747.svg",
  unique: "https://www.figma.com/api/mcp/asset/59ea721b-ac87-491c-8318-be5956e429de.svg",
  multiple: "https://www.figma.com/api/mcp/asset/ecd98d52-2e41-444b-ae28-33cc8ab9e36c.svg",
};

const ytMusicIcons = {
  like: "https://www.figma.com/api/mcp/asset/f2cf8460-35f0-48ce-bb0a-a7b9232968a4.svg",
  download: "https://www.figma.com/api/mcp/asset/540757dc-f24e-43ac-9860-bb6d5ed7ea8a.svg",
  share: "https://www.figma.com/api/mcp/asset/f02c1579-148b-44a0-bbd3-6d5164c49c1e.svg",
  boost: "https://www.figma.com/api/mcp/asset/322b9347-f4e7-4cea-a479-b3c9e010d0bc.svg",
  playlist: "https://www.figma.com/api/mcp/asset/91931262-9998-4230-814c-1408f8a4e18d.svg",
  comment: "https://www.figma.com/api/mcp/asset/0e8e3f5b-ed58-425e-9902-24892212170e.svg",
  unique: "https://www.figma.com/api/mcp/asset/5d9b4976-5d66-4392-9779-b1cb3c0fc3e5.svg",
  multiple: "https://www.figma.com/api/mcp/asset/54216c47-b93b-473e-a70f-2839909148f4.svg",
  subscribe: "https://www.figma.com/api/mcp/asset/90557594-5019-474e-aa98-45975cebe9e4.svg",
  radio: "https://www.figma.com/api/mcp/asset/9811bc4a-4aca-418a-95f6-2bbee57ead57.svg",
  engagement: "https://www.figma.com/api/mcp/asset/f640c0b3-c125-4711-8de9-e65cabeeb28c.svg",
  library: "https://www.figma.com/api/mcp/asset/bd87a0e8-fc52-4114-8893-2fee69339a7b.svg",
  interactive: "https://www.figma.com/api/mcp/asset/fd755c27-ace2-4ce4-8997-1dc505a0733e.svg",
  report: "https://www.figma.com/api/mcp/asset/f01dc482-d9be-4553-acaa-a9fbe86a2a45.svg",
  video: "https://www.figma.com/api/mcp/asset/a68577fe-c3d6-4ad8-9062-65cfdd5694f5.svg",
  embed: "https://www.figma.com/api/mcp/asset/31218c67-dda3-4ea9-bf47-b2faf160c995.svg",
};

const linkedinReactions = [
  ["👍 Like", 10], ["👏 Celebrate", 10], ["🫴 Support", 10],
  ["❤️ Love", 10], ["😂 Funny", 15], ["💡 Insightful", 10],
];

const externalShareOptions = [
  ["WhatsApp", 20], ["X (Twitter)", 20], ["Youtube", 20], ["Instagram", 20],
  ["TikTok", 20], ["Telegram", 20], ["Snapchat", 20], ["Messenger", 20], ["Discord", 20],
];

const listenDurations = [["30 Secs", 10], ["45 Secs", 15], ["Full Song", 30]];
const repeatFrequencies = [["3-5 Times/Week", 50], ["6-10 Times/Week", 100], ["11-15 Times/Week", 150], ["16-20 Times/Week", 200]];

const reactions = [
  ["❤️ Love", 10],
  ["👍 Like", 10],
  ["😦 Wow", 10],
  ["🤗 Care", 10],
  ["😂 Funny", 15],
  ["😢 Sad", 5],
  ["😡 Angry", 20],
];

const task = (label, mode, icon, tone, extra = {}) => ({ label, mode, icon, tone, ...extra });

const platformConfigs = {
  facebook: {
    slug: "facebook",
    title: "I need Facebook:",
    linkPlaceholder: "https://facebook.com/...",
    grid: 6,
    tasks: [
      task("Like / Others", "reaction", facebookIcons.like, "orange", { instructions: false }),
      task("Friend Request", "simple", facebookIcons.friend, "blue"),
      task("FB Share", "share", facebookIcons.share, "green"),
      task("Comments", "comment", facebookIcons.comment, "sky"),
      task("Live Participants", "simple", facebookIcons.live, "peach"),
      task("Followers", "simple", facebookIcons.followers, "lavender"),
      task("Story View", "simple", facebookIcons.story, "yellow", { unitCost: 5 }),
      task("Video Viewers", "view", facebookIcons.video, "navy"),
      task("Report", "report", facebookIcons.report, "red"),
      task("External Shares", "external-share", facebookIcons.external, "blue"),
      task("Join Group/community", "simple", facebookIcons.group, "green", { unitCost: 10 }),
      task("Interactive Comment Review", "interactive", facebookIcons.interactive, "orange", { unitCost: 30 }),
    ],
  },
  youtube: {
    slug: "youtube",
    title: "I need Youtube:",
    linkPlaceholder: "https://youtube.com/...",
    grid: 4,
    tasks: [
      task("Like", "reaction", youtubeIcons.like, "orange", { instructions: false }),
      task("Subscribe", "subscribe", youtubeIcons.subscribe, "red", { instructions: false }),
      task("Share on Youtube", "share", youtubeIcons.share, "green"),
      task("Comments", "comment", youtubeIcons.comment, "sky"),
      task("Report", "report", youtubeIcons.report, "red"),
      task("Dislike", "dislike", youtubeIcons.dislike, "blue"),
      task("Save", "simple", youtubeIcons.save, "green", { unitCost: 10 }),
      task("Video Viewers", "view", youtubeIcons.video, "navy"),
      task("Live Participants", "simple", youtubeIcons.live, "peach"),
      task("External Shares", "external-share", youtubeIcons.external, "blue"),
      task("Use Sound from TT Video & Post", "special-media", youtubeIcons.music, "sky", { specialTitle: "Use Sound", specialCopy: "Get a Nano-Influencer to use your sound to create content on Youtube", mediaLabel: "Choose Sound Part" }),
      task("Interactive Comments", "interactive", youtubeIcons.interactive, "orange", { unitCost: 30 }),
      task("Collab: create alongside video", "special-media", youtubeIcons.collab, "lavender", { specialTitle: "YouTube Collab", specialCopy: "Pay people to collab your post", mediaLabel: "Choose Video Part" }),
      task("Use Segment of Video as BG", "special-media", youtubeIcons.scissor, "peach", { specialTitle: "Use Segment of Video as Background", mediaLabel: "Choose Video Part", unitCost: 200 }),
      task("Use Video as a Background", "special-media", youtubeIcons.background, "orange", { specialTitle: "Use Video as a Background", mediaLabel: "Choose Video Part", unitCost: 500 }),
      task("Build my own Community", "simple", youtubeIcons.community, "red"),
    ],
  },
  x: {
    slug: "x",
    title: "I need X (Twitter):",
    linkPlaceholder: "https://x.com/...",
    grid: 8,
    tasks: [
      task("Like", "reaction", xIcons.like, "orange", { instructions: false }),
      task("Followers", "simple", xIcons.followers, "lavender"),
      task("Internal Shares", "share", xIcons.share, "green"),
      task("Comments", "comment", xIcons.comment, "sky"),
      task("Report", "report", xIcons.report, "red"),
      task("Repost", "simple", xIcons.repost, "blue", { unitCost: 20 }),
      task("Quotes", "quote", xIcons.quote, "green"),
      task("Video Viewers", "view", xIcons.video, "navy"),
      task("Space Participation", "simple", xIcons.space, "lavender"),
      task("External Shares", "external-share", xIcons.external, "blue"),
      task("Join Group", "simple", xIcons.group, "green", { unitCost: 10 }),
      task("Interactive Comments", "interactive", xIcons.interactive, "orange", { unitCost: 30 }),
      task("Post Views", "simple", xIcons.views, "peach", { unitCost: 10 }),
      task("Poll Votes", "poll", xIcons.poll, "blue", { unitCost: 20 }),
      task("Bookmark", "simple", xIcons.bookmark, "green", { unitCost: 10 }),
      task("Trend on X", "trend", xIcons.trend, "gray", { unitCost: 30 }),
    ],
  },
  instagram: {
    slug: "instagram",
    title: "I need Instagram:",
    linkPlaceholder: "https://instagram.com/...",
    grid: 4,
    tasks: [
      task("Like", "reaction", instagramIcons.like, "orange", { instructions: false }),
      task("Followers", "simple", instagramIcons.followers, "lavender"),
      task("IG Shares / Ads", "share", instagramIcons.share, "green"),
      task("Comments", "comment", instagramIcons.comment, "sky"),
      task("Live Participants", "simple", instagramIcons.live, "peach"),
      task("Save Post", "simple", instagramIcons.save, "green", { unitCost: 10 }),
      task("Story Views", "simple", instagramIcons.views, "peach", { unitCost: 5 }),
      task("Video Viewers", "view", instagramIcons.video, "navy"),
      task("Report", "report", instagramIcons.report, "red"),
      task("External Shares", "external-share", instagramIcons.external, "blue"),
      task("Join Group", "simple", instagramIcons.group, "green", { unitCost: 10 }),
      task("Interactive Comments", "interactive", instagramIcons.interactive, "orange", { unitCost: 30 }),
    ],
  },
  tiktok: {
    slug: "tiktok",
    title: "I need TikTok:",
    linkPlaceholder: "https://tiktok.com/...",
    grid: 8,
    tasks: [
      task("Like", "reaction", tiktokIcons.like, "orange", { instructions: false }),
      task("Followers", "simple", tiktokIcons.followers, "lavender"),
      task("Share on TikTok", "share", tiktokIcons.share, "green"),
      task("Comments", "comment", tiktokIcons.comment, "sky"),
      task("Report", "report", tiktokIcons.report, "red"),
      task("Repost", "simple", tiktokIcons.repost, "blue", { unitCost: 20 }),
      task("Bookmark", "simple", tiktokIcons.bookmark, "green", { unitCost: 10 }),
      task("External Shares", "external-share", tiktokIcons.external, "blue"),
      task("Live Participants", "simple", tiktokIcons.live, "peach"),
      task("Views", "view", tiktokIcons.views, "peach"),
      task("Sound & Post", "special-media", tiktokIcons.music, "sky", { specialTitle: "Use Sound", specialCopy: "Get a Nano-Influencer to use your sound to create content on TikTok", mediaLabel: "Choose Sound Part" }),
      task("Interactive Comments", "interactive", tiktokIcons.interactive, "orange", { unitCost: 30 }),
      task("Duet", "special-media", tiktokIcons.duet, "lavender", { specialTitle: "Duet Post", specialCopy: "Get a Nano-Influencer to use your sound to create content on Youtube", mediaLabel: "Choose Video Part" }),
      task("Lip-sync", "special-media", tiktokIcons.lipsync, "gray", { specialTitle: "Lip-Sync", mediaLabel: "Choose Sound Part", unitCost: 200 }),
      task("Mimic Video", "special-media", tiktokIcons.mimic, "orange", { specialTitle: "Video Mimic", mediaLabel: "Choose Video Part", unitCost: 500 }),
      task("Stitch my Video", "special-media", tiktokIcons.stitch, "peach", { specialTitle: "Stitch Video", specialCopy: "Get a Nano-Influencer to use your sound to create content on Youtube", mediaLabel: "Choose Video Part" }),
    ],
  },

  linkedin: {
    slug: "linkedin",
    title: "I need LinkedIn:",
    linkPlaceholder: "https://linkedIn.com/...",
    grid: 4,
    tasks: [
      task("Like / Others", "reaction", linkedinIcons.like, "orange", { reactions: linkedinReactions, instructions: false }),
      task("Followers", "gender", linkedinIcons.followers, "lavender", { options: [["Female Followers", 10], ["Male Followers", 10]] }),
      task("Share on LinkedIn", "multi-share", linkedinIcons.share, "green", { options: [["Newsfeed", 10], ["Connection's DM", 20], ["Comment Session", 30]], formats: ["Video", "Images"] }),
      task("Comments", "comment", linkedinIcons.comment, "sky", { surfaces: ["Post", "Comment Section"] }),
      task("Live Participants", "live", linkedinIcons.live, "peach"),
      task("Connections", "gender", linkedinIcons.connections, "lavender", { options: [["Female Connections", 10], ["Male Connections", 10]] }),
      task("Save", "priced", linkedinIcons.save, "green", { unitCost: 10, specialTitle: "Save Post" }),
      task("Video Viewers", "view", linkedinIcons.video, "navy"),
      task("Report", "report", linkedinIcons.report, "red"),
      task("External Shares", "multi-share", linkedinIcons.external, "blue", { options: externalShareOptions, formats: ["Video", "Images"] }),
      task("Repost", "repost-options", linkedinIcons.repost, "green", { unitCost: 20 }),
      task("Interactive Comments", "interactive", linkedinIcons.interactive, "orange", { unitCost: 30, surfaces: ["Post", "Comment Section"] }),
    ],
  },
  audiomack: {
    slug: "audiomack",
    title: "I need Audiomack:",
    linkPlaceholder: "https://audiomack.com/...",
    grid: 4,
    tasks: [
      task("Add to Liked Songs", "priced", audiomackIcons.liked, "red", { unitCost: 100, specialTitle: "Add my Song to Liked Songs" }),
      task("Follow Artist", "gender", audiomackIcons.follow, "lavender", { options: [["Female Followers", 10], ["Male Followers", 10]] }),
      task("Share Song/Album", "multi-share", audiomackIcons.share, "green", { options: externalShareOptions, formats: ["Audio"] }),
      task("Boost/React Album", "priced", audiomackIcons.boost, "orange", { unitCost: 20 }),
      task("Add Song to Playlist", "priced", audiomackIcons.playlist, "green", { unitCost: 100 }),
      task("Re-Save Song/Album", "priced", audiomackIcons.resave, "green", { unitCost: 10 }),
      task("Unique Listen", "duration-choice", audiomackIcons.unique, "blue", { options: listenDurations }),
      task("Multiple Listeners", "frequency-choice", audiomackIcons.multiple, "lavender", { options: repeatFrequencies }),
      task("Re-Up my Song", "priced", audiomackIcons.reup, "blue", { unitCost: 20, specialTitle: "Re-post my Song" }),
      task("Comments", "comment", audiomackIcons.comment, "sky", { surfaces: ["Song", "Comment Section"] }),
      task("Highlight my Album/Playlist", "priced", audiomackIcons.highlight, "yellow", { unitCost: 20 }),
      task("Embed my Songt my Song", "priced", audiomackIcons.embed, "blue", { unitCost: 20 }),
    ],
  },
  boomplay: {
    slug: "boomplay",
    title: "I need Boomplay:",
    linkPlaceholder: "https://boomplay.com/...",
    grid: 4,
    tasks: [
      task("Add to Favourite", "favourite-type", boomplayIcons.favourite, "red", { unitCost: 100 }),
      task("Download Song/Album", "priced", boomplayIcons.download, "blue", { unitCost: 20 }),
      task("Share Song/Album", "multi-share", boomplayIcons.share, "green", { options: externalShareOptions, formats: ["Audio"] }),
      task("Boost/React Album", "priced", boomplayIcons.boost, "orange", { unitCost: 20 }),
      task("Add Song to Playlist", "priced", boomplayIcons.playlist, "green", { unitCost: 100 }),
      task("Comment on my Song", "comment", boomplayIcons.comment, "sky", { surfaces: ["Song", "Comment Section"] }),
      task("Unique Listen", "duration-choice", boomplayIcons.unique, "blue", { options: listenDurations }),
      task("Multiple Listeners", "frequency-choice", boomplayIcons.multiple, "lavender", { options: repeatFrequencies }),
      task("Interactive Comments", "interactive", boomplayIcons.interactive, "orange", { unitCost: 30, surfaces: ["Song", "Comment Section"] }),
      task("Report", "report", boomplayIcons.report, "red"),
      task("Video Viewers", "view", boomplayIcons.video, "navy"),
      task("Embed my Songt my Song", "priced", boomplayIcons.embed, "blue", { unitCost: 20 }),
    ],
  },
  spotify: {
    slug: "spotify",
    title: "I need Spotify:",
    linkPlaceholder: "https://spotify.com/...",
    grid: 4,
    tasks: [
      task("Add to Liked Songs", "priced", spotifyIcons.liked, "red", { unitCost: 100, specialTitle: "Add my Song to Liked Songs" }),
      task("Follow Artist", "gender", spotifyIcons.follow, "lavender", { options: [["Female Followers", 10], ["Male Followers", 10]] }),
      task("Share Song/Album", "multi-share", spotifyIcons.share, "green", { options: externalShareOptions, formats: ["Audio"] }),
      task("Boost/React Album", "priced", spotifyIcons.boost, "orange", { unitCost: 20 }),
      task("Add Song to Playlist", "priced", spotifyIcons.playlist, "green", { unitCost: 100 }),
      task("Re-Save Song/Album", "priced", spotifyIcons.resave, "green", { unitCost: 10 }),
      task("Unique Listen", "duration-choice", spotifyIcons.unique, "blue", { options: listenDurations }),
      task("Multiple Listeners", "frequency-choice", spotifyIcons.multiple, "lavender", { options: repeatFrequencies }),
    ],
  },
  "youtube-music": {
    slug: "youtube-music",
    title: "I need YouTube Music:",
    linkPlaceholder: "https://ytubemusic.com/...",
    grid: 4,
    tasks: [
      task("Like my Song", "reaction", ytMusicIcons.like, "red", { instructions: false }),
      task("Download Song/Playlist", "priced", ytMusicIcons.download, "blue", { unitCost: 20 }),
      task("Share Song/Album", "multi-share", ytMusicIcons.share, "green", { options: externalShareOptions, formats: ["Audio"] }),
      task("Boost in Music/Album", "priced", ytMusicIcons.boost, "orange", { unitCost: 20 }),
      task("Add Song to Playlist", "priced", ytMusicIcons.playlist, "green", { unitCost: 100 }),
      task("Comment on my Song", "comment", ytMusicIcons.comment, "sky", { surfaces: ["Song", "Comment Section"] }),
      task("Unique Listen", "duration-choice", ytMusicIcons.unique, "blue", { options: listenDurations }),
      task("Multiple Listeners", "frequency-choice", ytMusicIcons.multiple, "lavender", { options: repeatFrequencies }),
      task("Subscribe to an Artist", "music-subscribe", ytMusicIcons.subscribe, "red"),
      task("Start a Radio with Song/Album", "priced", ytMusicIcons.radio, "blue", { unitCost: 10, specialTitle: "Start a Radio" }),
      task("Comment Engagements", "comment-engagement", ytMusicIcons.engagement, "sky"),
      task("Add Song to my Library", "priced", ytMusicIcons.library, "yellow", { unitCost: 10 }),
      task("Interactive Comments", "interactive", ytMusicIcons.interactive, "orange", { unitCost: 30, surfaces: ["Song", "Comment Section"] }),
      task("Report", "report", ytMusicIcons.report, "red"),
      task("Video Viewers", "view", ytMusicIcons.video, "navy"),
      task("Embed my Songt my Song", "priced", ytMusicIcons.embed, "blue", { unitCost: 20 }),
    ],
  },

};

const normalize = (value = "") => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const money = (value) => `₦${Number(value || 0).toLocaleString("en-NG")}`;

function BackIcon() {
  return <img src={commonIcons.arrowLeft} alt="" width="24" height="24" />;
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14v4.5A1.5 1.5 0 006.5 20h11a1.5 1.5 0 001.5-1.5V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TaskCard({ item, active, onClick }) {
  return (
    <button className={`v2-stc-task-card${active ? " is-active" : ""}`} type="button" onClick={onClick}>
      <span className={`v2-stc-task-icon tone-${item.tone}`}><img src={item.icon} alt="" /></span>
      <span>{item.label}</span>
    </button>
  );
}

function FieldHeader({ title, help }) {
  return (
    <div className="v2-stc-field-head">
      <label>{title}</label>
      {help ? <p className="v2-stc-help">{help}</p> : null}
    </div>
  );
}

function CheckChoice({ checked, onChange, label, cost }) {
  return (
    <label className="v2-stc-check">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="v2-stc-box">{checked ? "✓" : ""}</span>
      <span>{label}</span>
      {typeof cost === "number" ? <small>(Cost {money(cost)})</small> : null}
    </label>
  );
}

function Consent({ checked, onChange, children }) {
  return (
    <label className="v2-stc-consent">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="v2-stc-box">{checked ? "✓" : ""}</span>
      <span>{children}</span>
    </label>
  );
}

function RadioButtons({ title, values, value, onChange }) {
  return (
    <div className="v2-stc-prompt-row">
      <h2 className="v2-stc-subtitle">{title}</h2>
      <div className="v2-stc-button-group">
        {values.map((item) => (
          <button key={item} className={`v2-stc-choice-btn${value === item ? " is-active" : ""}`} type="button" onClick={() => onChange(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
}

function UploadBox({ fileName, onFile, accept = "image/*", label = "Choose file" }) {
  const ref = useRef(null);
  return (
    <>
      <input ref={ref} type="file" accept={accept} hidden onChange={(event) => onFile(event.target.files?.[0]?.name || "")} />
      <button className="v2-stc-upload" type="button" onClick={() => ref.current?.click()}>
        <UploadIcon />
        <strong>{fileName || label}</strong>
        <span>Size limit: 25mb</span>
      </button>
    </>
  );
}

function TaskSpecificFields({ selectedTask, values, setValue, selectedReactions, setSelectedReactions, selectedOptions, setSelectedOptions, taskMedia, setTaskMedia }) {
  const mode = selectedTask.mode;
  const toggleReaction = (label) => {
    setSelectedReactions((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);
  };

  if (mode === "reaction") {
    return (
      <section className="v2-stc-panel">
        <h2 className="v2-stc-subtitle">What kind of Reaction(s) do you want on your post</h2>
        <div className="v2-stc-choice-list">
          {(selectedTask.reactions || reactions).map(([label, cost]) => <CheckChoice key={label} label={label} cost={cost} checked={selectedReactions.includes(label)} onChange={() => toggleReaction(label)} />)}
        </div>
        <div className="v2-stc-divider" />
        <RadioButtons title="I want the reaction to happen on a:" values={selectedTask.surfaces || ["Post", "Comment Section"]} value={values.targetSurface} onChange={(value) => setValue("targetSurface", value)} />
      </section>
    );
  }

  if (mode === "subscribe") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-field">
          <FieldHeader title="Choose the Subscriber Plan you want:" />
          <select className="v2-stc-select" value={values.subscriberPlan} onChange={(event) => setValue("subscriberPlan", event.target.value)}>
            <option value="">Select plan</option>
          </select>
        </div>
        <div className="v2-stc-field">
          <FieldHeader title="I want:" />
          <input className="v2-stc-input" value={values.want} onChange={(event) => setValue("want", event.target.value)} placeholder="type here" />
        </div>
      </section>
    );
  }

  if (mode === "share" || mode === "external-share") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-field">
          <FieldHeader title="What type of Video View do you want?" help="Here you do not get any engagements only nano-influencers viewing your video for a period of time. How long do you want the nano-influencers to watch the video." />
          <input className="v2-stc-input" value={values.viewType} onChange={(event) => setValue("viewType", event.target.value)} placeholder="Select option" />
        </div>
        <div className="v2-stc-field">
          <FieldHeader title={mode === "share" ? "How do you want us to Share your Content?" : "Where do you want us to Share your Content"} />
          <input className="v2-stc-input" value={values.shareDestination} onChange={(event) => setValue("shareDestination", event.target.value)} placeholder="Select option" />
        </div>
        <div className="v2-stc-field">
          <FieldHeader title="Format" help="You can select one or more" />
          <input className="v2-stc-input" value={values.format} onChange={(event) => setValue("format", event.target.value)} placeholder="Select format" />
        </div>
      </section>
    );
  }

  if (mode === "comment") {
    return (
      <section className="v2-stc-panel">
        <RadioButtons title="I want the Comment to happen on:" values={["Post", "Comment Section"]} value={values.targetSurface} onChange={(value) => setValue("targetSurface", value)} />
      </section>
    );
  }

  if (mode === "report") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-field"><FieldHeader title="I want to report a:" /><input className="v2-stc-input" value={values.reportType} onChange={(event) => setValue("reportType", event.target.value)} placeholder="Select option" /></div>
        <div className="v2-stc-field"><FieldHeader title="Why are you reporting this comment?" help="Choose the option that best describes the issue" /><input className="v2-stc-input" value={values.reportReason} onChange={(event) => setValue("reportReason", event.target.value)} placeholder="Select option" /></div>
        <div className="v2-stc-field"><FieldHeader title="Please write a short letter to our admin on why you are reporting this comment" /><textarea className="v2-stc-textarea" value={values.reportLetter} onChange={(event) => setValue("reportLetter", event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div>
        <div className="v2-stc-field"><FieldHeader title="Upload Evidence to back your claims on why this comment deserves to be reported" /><UploadBox fileName={taskMedia} onFile={setTaskMedia} /></div>
        <div className="v2-stc-field"><FieldHeader title="Commenter’s Handle" /><input className="v2-stc-input" value={values.commenterHandle} onChange={(event) => setValue("commenterHandle", event.target.value)} placeholder="type here" /></div>
        <div className="v2-stc-field"><FieldHeader title="Drop the comment you want us to report" /><textarea className="v2-stc-textarea" value={values.reportComment} onChange={(event) => setValue("reportComment", event.target.value)} placeholder="type here" /></div>
      </section>
    );
  }

  if (mode === "view") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-field"><FieldHeader title="What type of Video View do you want?" help="Here you do not get any engagements only nano-influencers viewing your video for a period of time. How long do you want the nano-influencers to watch the video." /><input className="v2-stc-input" value={values.viewType} onChange={(event) => setValue("viewType", event.target.value)} placeholder="Select option" /></div>
        <div className="v2-stc-field"><FieldHeader title="I want:" /><input className="v2-stc-input" value={values.want} onChange={(event) => setValue("want", event.target.value)} placeholder="type here" /></div>
      </section>
    );
  }

  if (mode === "interactive") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-special-title"><h2>Interactive Comment Session</h2>{selectedTask.unitCost ? <p>(Cost {money(selectedTask.unitCost)})</p> : null}</div>
        <RadioButtons title="I want the Interactive Comment Session to happen on a:" values={selectedTask.surfaces || ["Post", "Comment Section"]} value={values.targetSurface} onChange={(value) => setValue("targetSurface", value)} />
      </section>
    );
  }

  if (mode === "dislike") {
    return (
      <section className="v2-stc-panel">
        <RadioButtons title="I want the Dislike to happen on a:" values={["Post", "Comment Section"]} value={values.targetSurface} onChange={(value) => setValue("targetSurface", value)} />
        <div className="v2-stc-field"><FieldHeader title="Reasons for Dislike (To Admin)" /><textarea className="v2-stc-textarea" value={values.reason} onChange={(event) => setValue("reason", event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div>
        <div className="v2-stc-field"><FieldHeader title="Upload any image evidence." /><UploadBox fileName={taskMedia} onFile={setTaskMedia} /></div>
      </section>
    );
  }

  if (mode === "quote") {
    return (
      <section className="v2-stc-panel"><div className="v2-stc-field"><FieldHeader title="What kind of Write-Up" /><textarea className="v2-stc-textarea" value={values.writeUp} onChange={(event) => setValue("writeUp", event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div></section>
    );
  }

  if (mode === "poll") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-special-title"><h2>Poll Votes</h2><p>(Cost ₦20)</p></div>
        <div className="v2-stc-field"><FieldHeader title="Option to select in the Poll" /><textarea className="v2-stc-textarea" value={values.pollOption} onChange={(event) => setValue("pollOption", event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div>
      </section>
    );
  }

  if (mode === "trend") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-special-title"><h2>Trend on X</h2><p>(Cost ₦30)</p></div>
        <div className="v2-stc-field"><FieldHeader title="Trend Duration" help="(Cost ₦5)" /><input className="v2-stc-input" value={values.trendDuration} onChange={(event) => setValue("trendDuration", event.target.value)} placeholder="type here" /></div>
        <div className="v2-stc-field"><FieldHeader title="Trend Request" /><textarea className="v2-stc-textarea" value={values.trendRequest} onChange={(event) => setValue("trendRequest", event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div>
        <div className="v2-stc-field"><FieldHeader title="Additional Information" /><textarea className="v2-stc-textarea" value={values.additionalInfo} onChange={(event) => setValue("additionalInfo", event.target.value)} placeholder="type here" /></div>
      </section>
    );
  }

  if (mode === "special-media") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-special-title"><h2>{selectedTask.specialTitle || selectedTask.label}</h2>{selectedTask.specialCopy ? <p>{selectedTask.specialCopy}</p> : null}{selectedTask.unitCost ? <p>(Cost {money(selectedTask.unitCost)})</p> : null}</div>
        <div className="v2-stc-field"><FieldHeader title="Upload sound." /><UploadBox fileName={taskMedia} onFile={setTaskMedia} accept="audio/*,video/*" /></div>
        <div className="v2-stc-field"><FieldHeader title={selectedTask.mediaLabel || "Choose Video Part"} /><div className="v2-stc-two"><input className="v2-stc-input" value={values.mediaStart} onChange={(event) => setValue("mediaStart", event.target.value)} placeholder="Start time" /><input className="v2-stc-input" value={values.mediaEnd} onChange={(event) => setValue("mediaEnd", event.target.value)} placeholder="End time" /></div></div>
        <div className="v2-stc-field"><FieldHeader title="What kind of Content" /><input className="v2-stc-input" value={values.contentType} onChange={(event) => setValue("contentType", event.target.value)} placeholder="type here" /></div>
        <div className="v2-stc-field"><FieldHeader title="What do you want to Achieve?" /><textarea className="v2-stc-textarea" value={values.goal} onChange={(event) => setValue("goal", event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div>
      </section>
    );
  }


  if (mode === "gender") {
    const toggle = (label) => setSelectedOptions((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);
    return (
      <section className="v2-stc-panel">
        <h2 className="v2-stc-subtitle">I want:</h2>
        <div className="v2-stc-choice-list">{(selectedTask.options || []).map(([label, cost]) => <CheckChoice key={label} label={label} cost={cost} checked={selectedOptions.includes(label)} onChange={() => toggle(label)} />)}</div>
      </section>
    );
  }

  if (mode === "multi-share") {
    const toggle = (label) => setSelectedOptions((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-field">
          <FieldHeader title="Where do you want us to Share your Content" />
          <div className="v2-stc-choice-list">{(selectedTask.options || []).map(([label, cost]) => <CheckChoice key={label} label={label} cost={cost} checked={selectedOptions.includes(label)} onChange={() => toggle(label)} />)}</div>
        </div>
        <div className="v2-stc-field">
          <FieldHeader title="Format" help="You can select one or more" />
          <RadioButtons title="" values={selectedTask.formats || ["Video", "Images"]} value={values.format} onChange={(value) => setValue("format", value)} />
        </div>
      </section>
    );
  }

  if (mode === "live") {
    return <section className="v2-stc-panel"><RadioButtons title="I want:" values={["Participants on my Live (No Sharing)", "Participants on my Live (Share to Friends/Contacts)"]} value={values.want} onChange={(value) => setValue("want", value)} /></section>;
  }

  if (mode === "priced") {
    return <section className="v2-stc-panel"><div className="v2-stc-special-title"><h2>{selectedTask.specialTitle || selectedTask.label}</h2>{selectedTask.unitCost ? <p>(Cost {money(selectedTask.unitCost)})</p> : null}</div></section>;
  }

  if (mode === "duration-choice" || mode === "frequency-choice") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-special-title"><h2>{selectedTask.label}</h2>{mode === "duration-choice" ? <p>(Cost depends on duration)</p> : <p>(Cost depends on frequency)</p>}</div>
        <h2 className="v2-stc-subtitle">Set Duration:</h2>
        <div className="v2-stc-choice-list">{(selectedTask.options || []).map(([label, cost]) => <CheckChoice key={label} label={label} cost={cost} checked={values.durationChoice === label} onChange={() => setValue("durationChoice", values.durationChoice === label ? "" : label)} />)}</div>
      </section>
    );
  }

  if (mode === "favourite-type") {
    return (
      <section className="v2-stc-panel">
        <RadioButtons title="Favourite type:" values={["Song", "Album", "Playlist", "Artist"]} value={values.favouriteType} onChange={(value) => setValue("favouriteType", value)} />
        <div className="v2-stc-special-title"><h2>Add my Song to Liked Songs</h2><p>(Cost {money(selectedTask.unitCost || 100)})</p></div>
      </section>
    );
  }

  if (mode === "repost-options") {
    return (
      <section className="v2-stc-panel">
        <div className="v2-stc-special-title"><h2>Re-post my post</h2><p>(Cost {money(selectedTask.unitCost || 20)})</p></div>
        <RadioButtons title="Quantity" values={["Just Repost", "Repost with Thoughts"]} value={values.repostType} onChange={(value) => setValue("repostType", value)} />
      </section>
    );
  }

  if (mode === "music-subscribe") {
    return (
      <section className="v2-stc-panel">
        <RadioButtons title="Choose the Subscriber Plan you want:" values={["Only Subscribe", "Subscribe and turn on Notifications"]} value={values.subscriberPlan} onChange={(value) => setValue("subscriberPlan", value)} />
        <RadioButtons title="I want:" values={["Female Subscribers", "Subscribers"]} value={values.subscriberGender} onChange={(value) => setValue("subscriberGender", value)} />
      </section>
    );
  }

  if (mode === "comment-engagement") {
    return (
      <section className="v2-stc-panel">
        <RadioButtons title="" values={["Like Comment", "Dislike Comment"]} value={values.commentAction} onChange={(value) => setValue("commentAction", value)} />
        <div className="v2-stc-field"><FieldHeader title="Commenter’s Handle" /><input className="v2-stc-input" value={values.commenterHandle} onChange={(event) => setValue("commenterHandle", event.target.value)} placeholder="type here" /></div>
        <div className="v2-stc-field"><FieldHeader title="The Comment that needs Reaction." /><textarea className="v2-stc-textarea" value={values.reportComment} onChange={(event) => setValue("reportComment", event.target.value)} placeholder="type here" /></div>
      </section>
    );
  }

  return null;
}

export default function V2SocialTaskCampaign() {
  const pathSlug = window.location.pathname.split("/").filter(Boolean).pop()?.toLowerCase() || "facebook";
  const platform = platformConfigs[pathSlug === "twitter" ? "x" : pathSlug] || platformConfigs.facebook;
  const query = new URLSearchParams(window.location.search);
  const requestedTask = query.get("task") || "";
  const initialIndex = Math.max(0, platform.tasks.findIndex((item) => normalize(item.label) === normalize(requestedTask)));
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(initialIndex);
  const selectedTask = platform.tasks[selectedTaskIndex];
  const [selectedReactions, setSelectedReactions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [values, setValues] = useState({
    targetSurface: "Post",
    subscriberPlan: "",
    want: "",
    viewType: "",
    shareDestination: "",
    format: "",
    reportType: "",
    reportReason: "",
    reportLetter: "",
    commenterHandle: "",
    reportComment: "",
    reason: "",
    writeUp: "",
    pollOption: "",
    trendDuration: "",
    trendRequest: "",
    additionalInfo: "",
    mediaStart: "",
    mediaEnd: "",
    contentType: "",
    goal: "",
    durationChoice: "",
    favouriteType: "",
    subscriberGender: "",
    commentAction: "",
    repostType: "",
  });
  const [pageAbout, setPageAbout] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("");
  const [targetState, setTargetState] = useState("All States");
  const [delivery, setDelivery] = useState("Default Time");
  const [startDate, setStartDate] = useState("Today");
  const [startTime, setStartTime] = useState("19:00");
  const [instruction, setInstruction] = useState("");
  const [instructionFile, setInstructionFile] = useState("");
  const [taskMedia, setTaskMedia] = useState("");
  const [cashbackEvidence, setCashbackEvidence] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [copied, setCopied] = useState(false);

  const setValue = (key, value) => setValues((current) => ({ ...current, [key]: value }));

  const unitCost = useMemo(() => {
    if (selectedTask.mode === "reaction") {
      const pool = selectedTask.reactions || reactions;
      return pool.filter(([label]) => selectedReactions.includes(label)).reduce((sum, [, cost]) => sum + cost, 0);
    }
    if (selectedTask.mode === "gender" || selectedTask.mode === "multi-share") {
      return (selectedTask.options || []).filter(([label]) => selectedOptions.includes(label)).reduce((sum, [, cost]) => sum + cost, 0);
    }
    if (selectedTask.mode === "duration-choice" || selectedTask.mode === "frequency-choice") {
      return (selectedTask.options || []).find(([label]) => label === values.durationChoice)?.[1] || 0;
    }
    if (selectedTask.mode === "music-subscribe") {
      return values.subscriberPlan === "Subscribe and turn on Notifications" ? 20 : values.subscriberPlan ? 10 : 0;
    }
    return selectedTask.unitCost || 0;
  }, [selectedTask, selectedReactions, selectedOptions, values.durationChoice, values.subscriberPlan]);

  const totalCost = useMemo(() => Number(quantity || 0) * unitCost, [quantity, unitCost]);

  const selectTask = (index) => {
    setSelectedTaskIndex(index);
    setSelectedReactions([]);
    setSelectedOptions([]);
    setValues((current) => ({ ...current, targetSurface: "Post", durationChoice: "", favouriteType: "", subscriberPlan: "", subscriberGender: "", commentAction: "", repostType: "" }));
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("task", normalize(platform.tasks[index].label));
    window.history.replaceState({}, "", `${nextUrl.pathname}${nextUrl.search}`);
  };

  const copyCashback = async () => {
    try {
      await navigator.clipboard.writeText("https://nanoinfluencer.ng/ref/adaeze");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const draft = {
      platform: platform.slug,
      task: selectedTask.label,
      pageAbout,
      link,
      quantity,
      unitCost,
      totalCost,
      country,
      targetState,
      delivery,
      startDate,
      startTime,
      instruction,
      instructionFile,
      taskMedia,
      cashbackEvidence,
      selectedReactions,
      taskValues: values,
      privacyAccepted,
      termsAccepted,
    };
    sessionStorage.setItem("v2SocialTaskCampaignDraft", JSON.stringify(draft));
    const destination = query.get("payment") === "success" ? "/campaigns/subscription-success" : "/campaigns/insufficient-balance";
    window.location.assign(destination);
  };

  return (
    <main className="v2-stc-page">
      <div className="v2-stc-shell">
        <header className="v2-stc-backbar">
          <a href="/campaigns"><BackIcon /><span>Go Back</span></a>
          <div className="v2-stc-user"><span className="v2-stc-user-avatar">A</span><span className="v2-stc-user-copy"><strong>Adaeze O.</strong><small>Free Plan</small></span></div>
        </header>

        <header className="v2-stc-heading"><h1>{platform.title}</h1></header>

        <section className="v2-stc-task-panel">
          <div className={`v2-stc-task-grid cols-${platform.grid}`}>
            {platform.tasks.map((item, index) => <TaskCard key={item.label} item={item} active={index === selectedTaskIndex} onClick={() => selectTask(index)} />)}
          </div>
          <button className="v2-stc-how" type="button">Click this text to know how this service works</button>
        </section>

        <form className="v2-stc-fields" onSubmit={submit}>
          <TaskSpecificFields selectedTask={selectedTask} values={values} setValue={setValue} selectedReactions={selectedReactions} setSelectedReactions={setSelectedReactions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} taskMedia={taskMedia} setTaskMedia={setTaskMedia} />

          <section className="v2-stc-panel">
            <div className="v2-stc-field"><FieldHeader title="What is your page/profile about" /><input className="v2-stc-input" value={pageAbout} onChange={(event) => setPageAbout(event.target.value)} placeholder="type here" maxLength={50} /><p className="v2-stc-meta">{pageAbout.length}/50</p></div>
            <div className="v2-stc-field"><FieldHeader title="Link" help="Ensure that you drop the correct link here." /><p className="v2-stc-inline-note">Drop the link to the post here.</p><input className="v2-stc-input" value={link} onChange={(event) => setLink(event.target.value)} placeholder={platform.linkPlaceholder} /></div>
            <div className="v2-stc-field"><FieldHeader title="Total Quantity" help="Total quantity based on the addition of all individual quantities." /><input className="v2-stc-input" type="number" min="0" value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder="0" /></div>
            <div className="v2-stc-field"><FieldHeader title="Cost" help="Total cost based on the addition of all individual costs." /><input className="v2-stc-input" value={money(totalCost)} readOnly /></div>
          </section>

          {selectedTask.instructions !== false && selectedTask.mode !== "report" && selectedTask.mode !== "special-media" ? (
            <section className="v2-stc-panel">
              <div className="v2-stc-instruction"><FieldHeader title="Any Instruction for the Nano-Influencer (Optional)" /><textarea className="v2-stc-textarea" value={instruction} onChange={(event) => setInstruction(event.target.value)} placeholder="Drop anything you like the nano-inflencer to know about this task" /></div>
              <div className="v2-stc-field"><FieldHeader title="Upload any image sample for the instruction." /><UploadBox fileName={instructionFile} onFile={setInstructionFile} /></div>
            </section>
          ) : null}

          <section className="v2-stc-panel">
            <div className="v2-stc-field"><FieldHeader title="Country of Target" help="Select the country or countries you want to get this service from." /><select className="v2-stc-select" value={country} onChange={(event) => setCountry(event.target.value)}><option value="">Select Country</option><option value="Nigeria">Nigeria</option></select></div>
            <div className="v2-stc-field"><FieldHeader title="State of Target" help="Select the State you want to get the engagement from. Note that this affects and reduces the maximum number of nano-influencers that would perform the task if you select fewer states." /><select className="v2-stc-select" value={targetState} onChange={(event) => setTargetState(event.target.value)}><option>All States</option><option>Lagos</option><option>FCT Abuja</option><option>Rivers</option><option>Ogun</option><option>Oyo</option></select></div>
          </section>

          <section className="v2-stc-panel">
            <div className="v2-stc-field"><FieldHeader title="How Fast do you want the job to be delivered. I want the job delivered in:" help={'Only apply if your order is time bound. Just Select "Default Time" if your campaign is not time bound.'} /><select className="v2-stc-select" value={delivery} onChange={(event) => setDelivery(event.target.value)}><option>Default Time</option><option>24 Hours</option><option>48 Hours</option><option>3 Days</option><option>7 Days</option></select></div>
            <div className="v2-stc-two">
              <div className="v2-stc-field"><FieldHeader title="Start Date" /><input className="v2-stc-input" value={startDate} onChange={(event) => setStartDate(event.target.value)} /></div>
              <div className="v2-stc-field"><FieldHeader title="Start time" /><input className="v2-stc-input" value={startTime} onChange={(event) => setStartTime(event.target.value)} /></div>
            </div>
            <p className="v2-stc-total-line">Total Cost (Cost × Delivery Speed) × 1 <strong>= {money(totalCost)}</strong></p>
          </section>

          <section className="v2-stc-panel">
            <div className="v2-stc-cashback">
              <div className="v2-stc-section-head"><h2>(Optional)</h2><p>Share the link and image below on your whatsapp status to get 1% cash back on your payment = {money(totalCost * 0.01)} money back.</p></div>
              <div className="v2-stc-cashback-actions">
                <button type="button" onClick={copyCashback}><i>↗</i><span>{copied ? "link copied" : "click on the icon\nto copy link"}</span></button>
                <button type="button"><i>↓</i><span>click on the icon to\ndownload image</span></button>
              </div>
            </div>
            <div className="v2-stc-upload-block"><h2>Upload the Evidence (Screen Shot) of Image and link shared on your whatsapp status</h2><UploadBox fileName={cashbackEvidence} onFile={setCashbackEvidence} /></div>
          </section>

          <section className="v2-stc-panel v2-stc-terms">
            <h2>Terms & Conditions</h2>
            <Consent checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)}>I have read and agreed to privacy policy for all tasks.</Consent>
            <Consent checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)}>I have read and agreed to terms and condition.</Consent>
          </section>

          <button className="v2-stc-proceed" type="submit">Proceed</button>
        </form>
      </div>
    </main>
  );
}
