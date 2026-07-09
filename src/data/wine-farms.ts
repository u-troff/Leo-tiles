export interface WineFarm {
  slug: string;
  name: string;
  location: string;
  supplyingSince?: number;
  description: string;
  image: string;
  comingSoon?: boolean;
}

export const wineFarms: WineFarm[] = [
  {
    slug: "boschkloof-wine-farm",
    name: "Boschkloof Wine Farm",
    location: "Stellenbosch, Western Cape",
    description:
      "Terracotta tiling supplied for Boschkloof's wine cellar — a showcase of handmade clay standing up to a working cellar environment.",
    image: "https://images.pexels.com/photos/30832872/pexels-photo-30832872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  },
  {
    slug: "heritage-winelands-estate",
    name: "Heritage Winelands Estate",
    location: "Stellenbosch, Western Cape",
    supplyingSince: 1979,
    description:
      "One of our longest-standing relationships in the Winelands. Full case study and farm name pending sign-off with the client before publishing.",
    image: "https://images.pexels.com/photos/31953686/pexels-photo-31953686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
    comingSoon: true,
  },
  {
    slug: "franschhoek-valley-estate",
    name: "Franschhoek Valley Estate",
    location: "Franschhoek, Western Cape",
    description: "Case study coming soon.",
    image: "https://images.pexels.com/photos/17674066/pexels-photo-17674066.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
    comingSoon: true,
  },
  {
    slug: "your-wine-farm-here",
    name: "Your Wine Farm Here",
    location: "Western Cape",
    description:
      "We're actively building relationships with wine estates across the Cape. If you're planning a cellar, tasting room, or courtyard project, let's talk.",
    image: "https://images.pexels.com/photos/34515222/pexels-photo-34515222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
    comingSoon: true,
  },
];
