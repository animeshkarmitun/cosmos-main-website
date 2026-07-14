export interface CosmosEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  description: string[];
  coverImage: string;
  gallery: string[];
}

export const events: CosmosEvent[] = [
  {
    id: "cosmos-dialogue-nepal-bangladesh-energy",
    title:
      "Energy sector holds huge cooperation potential between Nepal and Bangladesh: Nepalese envoy tells Cosmos Dialogue",
    date: "November 12, 2023",
    category: "Cosmos Dialogue",
    excerpt:
      "Nepalese Ambassador to Bangladesh Ghanshyam Bhandari discusses bilateral energy cooperation and the future of regional power trade at Cosmos Dialogue.",
    description: [
      "Nepalese Ambassador to Bangladesh Ghanshyam Bhandari on Thursday said his country sees huge potential to cooperate with Dhaka in five key areas including in the energy sector, setting milestones in bilateral and sub-regional cooperation.",
      "“We are encouraged by the decision of the government of India to facilitate the first trilateral power transaction from Nepal to Bangladesh,” the envoy said at the Cosmos Dialogue ambassadors’ lecture series held at Cosmos Centre in the capital.",
      "The event brought together diplomats, energy experts, policymakers and business leaders to explore how Nepal’s hydropower potential and Bangladesh’s growing energy demand can be matched through regional cooperation.",
      "Cosmos Dialogue continues to serve as a platform for constructive debate on issues shaping Bangladesh’s economic and diplomatic future.",
    ],
    coverImage: "/images/events/China 1e.jpg",
    gallery: [
      "/images/events/China 2e.jpg",
      "/images/events/China 3e.jpg",
      "/images/events/China 4e.jpg",
      "/images/events/China 5e.jpg",
      "/images/events/China 6e.jpg",
    ],
  },
  {
    id: "nordic-business-forum",
    title: "Nordic–Bangladesh Business Forum",
    date: "October 24, 2023",
    category: "Business Forum",
    excerpt:
      "Cosmos Group hosts a high-level Nordic delegation to strengthen trade, investment and sustainability ties between Bangladesh and the Nordic region.",
    description: [
      "The Cosmos Foundation, the philanthropic arm of Cosmos Group, hosted a symposium titled \"Bangladesh and Nordic Countries: Prognosis for Partnership\" as part of its Ambassadors' Lecture Series. The event brought together the ambassadors of Denmark, Norway, and Sweden to discuss strengthening the long-standing ties between Bangladesh and the Nordic region, focusing on sustainability, green growth, and innovation.",
      "Discussions highlighted a shift from a donor-recipient hierarchy to a peer-to-peer alliance. Key priority areas identified for future cooperation include green energy partnerships, sustainable textile and circular fashion, digital transformation, climate adaptation, and innovative knowledge sharing. The Nordic countries aim to provide expertise in sustainable technologies and good governance, while Bangladesh offers a dynamic market and frontline climate experience.",
      "The ambassadors emphasized the importance of trust, strong institutions, and competitive infrastructure to attract international investment. They reaffirmed their commitment to supporting Bangladesh's journey toward sustainable prosperity, noting that mutual success depends on collaboration in achieving economic diversification and long-term stability.",
    ],
    coverImage: "/images/events/Nordic 1e.jpg",
    gallery: [
      "/images/events/Nordic 2e.jpg",
      "/images/events/Nordic 3e.jpg",
      "/images/events/Nordic 4e.jpg",
      "/images/events/Nordic 6e.jpg",
    ],
  },
];

export function getEventById(id: string): CosmosEvent | undefined {
  return events.find((event) => event.id === id);
}

export function getAdjacentEvents(id: string): {
  prev: CosmosEvent | null;
  next: CosmosEvent | null;
} {
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: events[index - 1] ?? null,
    next: events[index + 1] ?? null,
  };
}
