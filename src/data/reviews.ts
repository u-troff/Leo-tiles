export interface Review {
  id: number;
  name: string;
  initial: string;
  rating: number;
  platform: "google" | "facebook";
  platformRating: string;
  text: string;
}

export const reviews: Review[] = [
  { id: 1, name: "Anita van der Berg", initial: "A", rating: 5, platform: "google", platformRating: "4.8", text: "We used Leo Tiles for a full kitchen and courtyard renovation. The quality of the handmade tiles is unlike anything available in the big tile stores. Mark was incredibly helpful in guiding us on sizing and sealant. The finished result is stunning." },
  { id: 2, name: "James Oosterbroek", initial: "J", rating: 5, platform: "google", platformRating: "4.8", text: "Restoring a 1930s Cape Dutch home and needed tiles that matched the original terracotta. Leo Tiles produced custom-sized tiles that were indistinguishable from the originals. Exceptional craftsmanship and a pleasure to work with." },
  { id: 3, name: "Sarah Mitchell", initial: "S", rating: 5, platform: "facebook", platformRating: "4.7", text: "Ordered hexagon tiles for our bathroom and they are absolutely beautiful. The handmade quality gives them a warmth that no factory tile can replicate. Delivery was well packaged, not a single tile broken." },
  { id: 4, name: "Rudi Swanepoel", initial: "R", rating: 5, platform: "google", platformRating: "4.8", text: "As an architect I've specified Leo Tiles on three projects now. The ability to order any size to specification is invaluable for bespoke work. Lead times are honest and the product is consistent in quality." },
  { id: 5, name: "Charlene Fortuin", initial: "C", rating: 5, platform: "facebook", platformRating: "4.7", text: "Mark and his team installed our Batavian floor tiles and the standard of workmanship was excellent. They clearly know these tiles better than anyone else, perfect alignment, correct grout, and proper sealing." },
  { id: 6, name: "Thomas Hendricks", initial: "T", rating: 5, platform: "google", platformRating: "4.8", text: "Bought Klompies for our driveway and garden path. A year later they look even better, beautiful weathering on the clay surface. The advice we got on bedding and installation was spot on." },
];
