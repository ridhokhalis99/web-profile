interface ContentItem {
  title: string;
  url: string;
  description?: string;
  image?: string;
}

interface ContentFeeds {
  linkedin: ContentItem[];
  medium: ContentItem[];
  tiktok: ContentItem[];
}

const contentFeeds: ContentFeeds = {
  linkedin: [
    {
      title: "Belajar langsung dari mentor ADPList",
      url: "https://www.linkedin.com/posts/ridho-khalis_salah-satu-hal-paling-berharga-dalam-perjalanan-activity-7330887249997320192-DyB7",
      description:
        "Salah satu hal paling berharga dalam perjalanan karier saya adalah kesempatan untuk belajar langsung dari para praktisi yang sudah berpengalaman di industri💡...",
      image: "/assets/images/content/linkedin-adplist.jpg",
    },
    {
      title: "Eksperimen bikin video di TikTok",
      url: "https://www.linkedin.com/posts/ridho-khalis_baru-beberapa-minggu-terakhir-saya-mulai-activity-7330094574977146880-UXKy",
      description:
        "Baru beberapa minggu terakhir saya mulai iseng bikin video di TikTok...",
      image: "/assets/images/content/linkedin-tiktok.jpg",
    },
    {
      title: "Kenalan dengan Model Context Protocol (MCP)",
      url: "https://www.linkedin.com/posts/ridho-khalis_mau-ai-lo-selalu-responsif-dan-up-to-date-activity-7316757132693884928-5o4r",
      description:
        "Mau AI lo selalu responsif dan up-to-date dengan info terkini? Yuk, kenalan sama MCP...",
      image: "/assets/images/content/linkedin-mcp.jpg",
    },
  ],
  medium: [
    {
      title: "CAP Theorem: Why You Can't Have It All (And That's Okay)",
      url: "https://medium.com/@ridhokhalis/cap-theorem-why-you-cant-have-it-all-and-that-s-okay-156f507adec2",
      description:
        "Let’s be real. Building distributed systems is like trying to keep a group chat in perfect sync across three different time zones...",
      image: "/assets/images/content/medium-cap.webp",
    },
    {
      title: "Why Your Queries Are Slow (and How Indexes Fix It)",
      url: "https://medium.com/@ridhokhalis/why-your-queries-are-slow-and-how-indexes-fix-it-c6ad678ae5e9",
      description:
        "I used to think slow performance meant bad code. You debug, you profile, maybe even add some caching...",
      image: "/assets/images/content/medium-indexes.webp",
    },
    {
      title: "Trade-offs: The Skill That Separates Coders from Engineers",
      url: "https://medium.com/@ridhokhalis/trade-offs-the-skill-that-separates-coders-from-engineers-387e1b3779cf",
      description:
        "Nobody gets into tech because they love making hard decisions. We sign up for the thrill of creation...",
      image: "/assets/images/content/medium-tradeoffs.webp",
    },
  ],
  tiktok: [
    {
      title: "AI Agent buat Automation",
      url: "https://www.tiktok.com/@ridhobahastech/video/7508952812697423112",
      description:
        "Automation yang bisa mikir tuh bukan cuma keren, tapi bikin kerjaan lo jauh lebih ringan. Gue mulai pakai AI Agent di workflow penting biar gak ribet mikirin logic satu-satu. Dan yang paling enak? Sekarang gue lebih fokus ke goal, bukan ke teknisnya. Kalau lo pengen workflow automation yang lain, comment \"lagi dong bang\" dan Follow gw, biar gak ketinggalan konten lainnya ya!\n\n#Belajarn8n #AutomationTools #NgodingSantai #NoCodeIndonesia #WorkflowAutomation #HeyItsRidho #TechContentID #DeveloperLife #NgodingItuAsik #ProductivityHack #SoftwareEngineering #BelajarNgoding #DevTools #SelfHostedTools",
      image: "/assets/images/content/tiktok-ai-agent.gif",
    },
    {
      title: "Drag & drop workflow n8n",
      url: "https://www.tiktok.com/@ridhobahastech/video/7500047307962912008",
      description:
        "Tool ini cocok banget buat kamu yang pengen kerjaan auto jalan, tapi lagi mager 😎\nGak perlu ngoding ribet, tinggal drag & drop aja langsung beres.\nYang gue pake ini buat ngerangkum email harian pake n8n (nodemation)\nLo bisa pake buat apapun, dari kerjaan kantor sampe project pribadi.\nComment 'n8n' kalo mau gue bikinin tutorialnya 👇",
      image: "/assets/images/content/tiktok-n8n.gif",
    },
    {
      title: "Install n8n di laptop sendiri",
      url: "https://www.tiktok.com/@ridhobahastech/video/7501498487763406087",
      description:
        "Kerjaan banyak tapi waktunya terbatas? Yuk mulai bikin automation sendiri pakai n8n!\nTool ini bisa bantu kamu ngerjain hal-hal rutin secara otomatis, dan kerennya bisa kamu install langsung di laptop sendiri. Cocok buat freelancer, pelaku UKM, dan siapa pun yang pengen kerja lebih efisien.\nComment \"ajarin dong\" kalau mau diajarin lebih lanjut!\n\n#n8n #automationtools #workflowautomation #dockerdesktop #selfhosted #nocodetools #zapier #belajarteknologi #automation #developerlife #techindonesia #tutorialdocker #automationsetup #productivitytools #gratis #heyitsridho",
      image: "/assets/images/content/tiktok-install-n8n.gif",
    },
  ],
};

export default contentFeeds;
