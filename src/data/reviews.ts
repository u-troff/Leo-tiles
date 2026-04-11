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
  {
    id: 1,
    name: "Maria Rodriguez",
    initial: "M",
    rating: 5,
    platform: "google",
    platformRating: "4.9",
    text: "Acme Plumbing was a lifesaver when our water heater burst at midnight. They arrived within the hour, diagnosed the problem quickly, and had a new unit installed by morning. Transparent pricing and genuinely friendly service.",
  },
  {
    id: 2,
    name: "David Chen",
    initial: "D",
    rating: 5,
    platform: "google",
    platformRating: "4.9",
    text: "We hired Acme for a complete bathroom remodel and couldn't be happier. John and his team were professional from start to finish. They kept the workspace clean and finished ahead of schedule. Highly recommend!",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    initial: "S",
    rating: 5,
    platform: "facebook",
    platformRating: "4.8",
    text: "After dealing with a slow drain for weeks, I finally called Acme. They not only fixed the immediate problem but also identified a potential sewer line issue before it became a disaster. Honest, thorough, and affordable.",
  },
  {
    id: 4,
    name: "Robert Williams",
    initial: "R",
    rating: 5,
    platform: "google",
    platformRating: "4.9",
    text: "Best plumbing company in the Pasadena area, hands down. They replaced our old galvanized pipes with copper and the difference is incredible. Fair price, clean work, and they explained everything along the way.",
  },
  {
    id: 5,
    name: "Jennifer Park",
    initial: "J",
    rating: 5,
    platform: "facebook",
    platformRating: "4.8",
    text: "I've used Acme Plumbing three times now — kitchen faucet install, toilet replacement, and a slab leak repair. Every single time they've been punctual, professional, and reasonably priced. They're my go-to plumber for life.",
  },
  {
    id: 6,
    name: "Michael Adams",
    initial: "M",
    rating: 5,
    platform: "google",
    platformRating: "4.9",
    text: "Called Acme for an emergency pipe burst on a Sunday. Not only did they answer immediately, but they were at my door in 30 minutes. They minimized the water damage and fixed the pipe properly. Can't thank them enough.",
  },
];
