export type BrochureCategory = "group" | "company" | "gallery";

export interface Brochure {
  id: string;
  title: string;
  subtitle: string;
  fileUrl: string;
  fileSize?: string;
  pageCount?: string;
  category: BrochureCategory;
  coverImage?: string;
}

export const brochures: Brochure[] = [
  {
    id: "cosmos-group",
    title: "Cosmos Group Corporate Brochure",
    subtitle: "The complete profile of our conglomerate, operations, and vision",
    fileUrl: "/brochures/cosmos-group-brochure.pdf",
    fileSize: "3.1 MB",
    pageCount: "29 pages",
    category: "group",
  },
  {
    id: "gallery-studio",
    title: "Gallery & Studio Brochure",
    subtitle: "Creative media, production, and studio services overview",
    fileUrl: "/brochures/gallery-studio-brochure.pdf",
    fileSize: "10.8 MB",
    category: "gallery",
  },
];

export const getBrochureById = (id: string): Brochure | undefined =>
  brochures.find((b) => b.id === id);

/**
 * Resolve a brochure for a specific company page.
 * Falls back to the group brochure until company-specific PDFs are added.
 */
export const getBrochureForCompany = (companyId: string): Brochure | undefined => {
  const companyMap: Record<string, string> = {
    // Future mappings:
    // energy: "cosmos-energy-brochure",
    // shipping: "cosmos-shipping-brochure",
    // books: "cosmos-books-brochure",
    // atelier: "cosmos-atelier-brochure",
  };

  const brochureId = companyMap[companyId];
  return brochureId ? getBrochureById(brochureId) : getBrochureById("cosmos-group");
};

export const getGroupBrochure = (): Brochure | undefined =>
  getBrochureById("cosmos-group");
