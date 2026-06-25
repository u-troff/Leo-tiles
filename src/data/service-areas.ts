export interface ServiceArea {
  city: string;
  state: string;
  slug: string;
  description: string;
  highlights: string[];
}

export const serviceAreas: ServiceArea[] = [
  { city: "Cape Town", state: "WC", slug: "terracotta-tiles-cape-town", description: "Leo Tiles is based in Cape Town, serving the Western Cape with direct supply and installation.", highlights: ["Direct from the kiln", "Installation team available", "Same-day collection possible"] },
  { city: "Stellenbosch", state: "WC", slug: "terracotta-tiles-stellenbosch", description: "Terracotta tiles for Stellenbosch wine estates, heritage homes, and new builds.", highlights: ["Perfect for wine estate aesthetics", "Heritage restoration experience", "Western Cape delivery"] },
  { city: "Franschhoek", state: "WC", slug: "terracotta-tiles-franschhoek", description: "Handmade terracotta for Franschhoek's distinctive Cape Dutch and French heritage properties.", highlights: ["Heritage property specialists", "Cape Dutch restoration matching", "Design consultation available"] },
  { city: "Johannesburg", state: "GP", slug: "terracotta-tiles-johannesburg", description: "Nationwide delivery of handmade terracotta tiles to Johannesburg and Gauteng.", highlights: ["Nationwide freight available", "Architect and designer accounts", "Bulk order pricing"] },
  { city: "Pretoria", state: "GP", slug: "terracotta-tiles-pretoria", description: "Supplying Pretoria architects and homeowners with authentic handmade terracotta.", highlights: ["Nationwide delivery", "Custom sizes available", "Direct from manufacturer"] },
  { city: "Durban", state: "KZN", slug: "terracotta-tiles-durban", description: "Terracotta tiles delivered to KwaZulu-Natal for coastal and heritage projects.", highlights: ["Coastal installation experience", "KZN freight available", "Custom orders welcome"] },
  { city: "George", state: "WC", slug: "terracotta-tiles-george", description: "Garden Route deliveries of handmade terracotta floor tiles.", highlights: ["Garden Route delivery", "Specialist packing", "Western Cape regional supply"] },
  { city: "Knysna", state: "WC", slug: "terracotta-tiles-knysna", description: "Natural terracotta tiles for Knysna's coastal homes and holiday properties.", highlights: ["Coastal property specialists", "Natural material aesthetic", "Supply and install options"] },
];
