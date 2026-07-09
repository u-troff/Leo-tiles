export interface Collaboration {
  slug: string;
  partnerName: string;
  partnerType: "Interior Design Studio" | "Architecture Firm" | "Hospitality Project" | "Wine Estate Project";
  location: string;
  projectCount?: number;
  projectHighlight?: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

export const collaborations: Collaboration[] = [
  {
    slug: "erasmus-and-co",
    partnerName: "Erasmus & Co",
    partnerType: "Interior Design Studio",
    location: "Franschhoek, Western Cape",
    projectCount: 4,
    description:
      "Four collaborations in the last two years, specifying handmade terracotta across residential and hospitality interiors.",
    image: "https://images.pexels.com/photos/36242874/pexels-photo-36242874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
  {
    slug: "fox-and-partners-gorgeous-george",
    partnerName: "Fox & Partners",
    partnerType: "Hospitality Project",
    location: "George, Western Cape",
    projectHighlight: "Gorgeous George Hotel",
    description: "Terracotta flooring and tiling supplied for the Gorgeous George Hotel project.",
    image: "https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
  {
    slug: "boschkloof-cellar-design-partner",
    partnerName: "Boschkloof Wine Farm (design partner tbc)",
    partnerType: "Wine Estate Project",
    location: "Stellenbosch, Western Cape",
    description:
      "Wine cellar project completed in partnership with an interior design and architecture team — name to be confirmed and credited once verified with the client.",
    image: "https://images.pexels.com/photos/30832873/pexels-photo-30832873.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
    comingSoon: true,
  },
  {
    slug: "your-studio-here",
    partnerName: "Your Studio Here",
    partnerType: "Architecture Firm",
    location: "South Africa",
    description:
      "We're building new relationships with interior designers and architects nationwide. Get in touch to collaborate on your next project.",
    image: "https://images.pexels.com/photos/20259349/pexels-photo-20259349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
    comingSoon: true,
  },
];
