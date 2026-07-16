export interface Company {
  id: string;
  title: string;
  tagline: string;
  logo: string;
  image: string;
  /** "contain" shows the full image; defaults to "cover" for card-style crops. */
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  detailedText: string;
  metric: string;
  metricLabel: string;
  page: string;
}

/** Single source of truth for Our Companies + LogoMarquee. */
export const companies: Company[] = [
  {
    id: "energy",
    title: "Cosmos Energy",
    tagline: "Leading the transition to sustainable energy solutions across the region.",
    logo: "/logos/Cosmos Energy Services.png",
    image: "/images/cosmos-energy-card.png",
    detailedText:
      "Cosmos Energy is pioneering highly resilient energy channels, resource development, and regional gas infrastructure to fuel domestic industries and support sustainable growth.",
    metric: "500+ MW",
    metricLabel: "Power Grid Integration Cluster",
    page: "energy",
  },
  {
    id: "marketing",
    title: "Cosmos Marketing",
    tagline: "Comprehensive consultation and marketing strategies.",
    logo: "/logos/Cosmos Logo-01.png",
    image: "/images/cosmos-marketing-card.png",
    detailedText:
      "Cosmos Marketing provides extensive consultation services, public relations frameworks, and comprehensive market expansion strategies for global clients.",
    metric: "Top Tier",
    metricLabel: "Consultation Services",
    page: "marketing",
  },
  {
    id: "shipping",
    title: "Cosmos Shipping & Logistics",
    tagline: "Global logistics and freight management with unparalleled efficiency.",
    logo: "/logos/Cosmos Shipping and Logistics.png",
    image: "/images/Cosmos-Shipping-card.jpeg",
    detailedText:
      "Cosmos Shipping & Logistics runs deep-sea logistics fleets, inland cargo harbors, customs brokerage gates, and intelligent supply-chain routing algorithms.",
    metric: "4.2M+",
    metricLabel: "Tons Handled Annually",
    page: "shipping",
  },
  {
    id: "technology",
    title: "Cosmos Technology",
    tagline: "Connecting the nation with advanced telecommunication and technology infrastructure.",
    logo: "/logos/Cosmos Technologies.png",
    image: "/images/cosmos-telecom-card.png",
    detailedText:
      "Cosmos Technology delivers cutting-edge telecommunications and enterprise technology solutions, ensuring seamless connectivity and high-speed data transmission.",
    metric: "99.9%",
    metricLabel: "Network Uptime",
    page: "technology",
  },
  {
    id: "unb",
    title: "UNB",
    tagline: "United News of Bangladesh - the leading news agency.",
    logo: "/logos/United News of Bangladesh.png",
    image: "/images/unb.jpeg",
    imageFit: "contain",
    detailedText:
      "UNB is a cornerstone of national news reporting, broadcasting unbiased reportage and hosting cultural galleries with global organizations.",
    metric: "15M+",
    metricLabel: "Weekly Active Readers",
    page: "unb",
  },
  {
    id: "dhakacourier",
    title: "Dhaka Courier",
    tagline: "The premier English-language news weekly.",
    logo: "/logos/Dhaka Courier.png",
    image: "/images/brochure_extracts/Dhaka-courier.jpeg",
    detailedText:
      "Dhaka Courier is an independent English-language news weekly offering in-depth analysis, political commentary, and cultural insights.",
    metric: "40+ Years",
    metricLabel: "Of Journalism",
    page: "dhaka-courier",
  },
  {
    id: "books",
    title: "Cosmos Books",
    tagline: "Publishing meaningful titles that enrich thought, culture, and knowledge.",
    logo: "/logos/Cosmos Logo-01.png",
    image: "/images/cosmos-books-card.png",
    detailedText:
      "Cosmos Books curates and publishes impactful titles spanning culture, policy, literature, and contemporary thought for a broad readership.",
    metric: "Editorial",
    metricLabel: "Knowledge Publishing",
    page: "books",
  },
  {
    id: "wildteam",
    title: "WildTeam",
    tagline: "Wildlife conservation initiative protecting Bangladesh's rich biodiversity.",
    logo: "/logos/WildTeam.png",
    image: "/images/Wild-Team-card.jpeg",
    detailedText:
      "WildTeam is a dedicated wildlife conservation initiative focused on protecting the Royal Bengal Tiger and preserving Bangladesh's unique natural heritage through science, community engagement, and field action.",
    metric: "Conservation",
    metricLabel: "Field Excellence",
    page: "wildteam",
  },
  {
    id: "pearls",
    title: "Pearls Paradise",
    tagline: "Traditional jewelry and pink pearls since 1959.",
    logo: "/logos/Pearls Paradise.png",
    image: "/images/pearls.jpg",
    detailedText:
      "Established in 1959 and incorporated in 1980, Pearls Paradise hand crafts jewelry, pink pearls, and precious and semi-precious stones cultivated in the sweet waters of Bangladesh.",
    metric: "Since 1959",
    metricLabel: "Heritage Jewellers",
    page: "pearls",
  },
  {
    id: "gallery",
    title: "Cosmos Gallery",
    tagline: "A premier destination for fine arts and cultural expression.",
    logo: "/logos/Gallery Cosmos.png",
    image: "/images/gallery.jpeg",
    detailedText:
      "Cosmos Gallery serves as a vibrant cultural hub, celebrating artistic excellence and nurturing creative talent across Bangladesh through world-class exhibitions and community programmes.",
    metric: "Artistic",
    metricLabel: "Cultural Hub",
    page: "gallery",
  },
  {
    id: "atelier",
    title: "Cosmos Atelier 71",
    tagline: "A premier printmaking studio promoting fine arts.",
    logo: "/logos/Cosmos Atelier 71.png",
    image: "/images/atelier.jpeg",
    detailedText:
      "Cosmos Atelier 71 provides a creative space and modern facilities for printmakers and artists to practice, exhibit, and preserve fine arts.",
    metric: "Creative",
    metricLabel: "Artistic Excellence",
    page: "atelier",
  },
  {
    id: "global",
    title: "Cosmos Global",
    tagline: "Global resources and international trade ventures.",
    logo: "/logos/Cosmos Resources Pte Ltd.png",
    image: "/images/global.jpg",
    detailedText:
      "Cosmos Global manages international trade, strategic partnerships, and global resource acquisition to support the conglomerate's expanding footprint.",
    metric: "Worldwide",
    metricLabel: "Trade Network",
    page: "global",
  },
  {
    id: "dialogue",
    title: "Cosmos Dialogue",
    tagline: "Thought leadership platform for policy dialogue, diplomacy, and strategic discourse.",
    logo: "/logos/Cosmos Logo-01.png",
    image: "/images/cosmos-dialogue-card.png",
    detailedText:
      "Cosmos Dialogue convenes policymakers, diplomats, and experts to shape conversations on regional cooperation, governance, and economic transformation.",
    metric: "Policy",
    metricLabel: "Strategic Conversations",
    page: "dialogue",
  },
  {
    id: "foundation",
    title: "Cosmos Foundation",
    tagline: "Social impact initiatives advancing education, public health, and community resilience.",
    logo: "/logos/Cosmos Logo-01.png",
    image: "/images/cosmos-foundation-card.png",
    detailedText:
      "Cosmos Foundation leads high-impact philanthropic programs in education, healthcare, and cultural empowerment through long-term partnerships.",
    metric: "Impact",
    metricLabel: "Community Programs",
    page: "foundation",
  },
];
