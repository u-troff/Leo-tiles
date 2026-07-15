export interface GuideStep {
  number: string;
  title: string;
  body: string;
}

export interface Guide {
  slug: string;
  audience: "For installers" | "For homeowners";
  title: string;
  heroImage: string;
  intro: string;
  steps: GuideStep[];
  relatedProductSlugs: string[];
  relatedGuideSlugs: string[];
}

export const guides: Guide[] = [
  {
    slug: "joint-width-for-outdoor-terracotta",
    audience: "For installers",
    title: "Choosing the right joint width for outdoor terracotta",
    heroImage: "/images/design/herringbone-install.jpg",
    intro:
      "A technical guide for installers and site teams working with our standard 300×300mm terracotta outdoors. Five steps, from understanding size variation to the final dry-lay check.",
    steps: [
      {
        number: "01",
        title: "Understand the size variation",
        body: "Because every tile is hand pressed and shaped, expect a natural size variation of approximately 6–8% across a batch. This isn't a defect to sort out, it's the reason the joint needs to be wide enough to absorb it.",
      },
      {
        number: "02",
        title: "Use a 25mm joint outdoors",
        body: "For our standard 300×300mm tile laid outdoors, we recommend a 25mm joint as the average. At this spacing, coverage works out to roughly 9 tiles per m², which is also why we sell by the tile rather than by the box.",
      },
      {
        number: "03",
        title: "Narrower joints, indoors only",
        body: "A tighter 10–15mm joint can work indoors, but only if tiles are pre-sorted for size at the factory before dispatch. Ask us to grade a batch tighter if you're planning a narrow joint.",
      },
      {
        number: "04",
        title: "Match your grout to the joint",
        body: "Wider joints call for a sand-cement or flexible grout rather than a rigid, fine-line product, rigid grout is more likely to crack under the natural movement of a wide outdoor joint.",
      },
      {
        number: "05",
        title: "Dry-lay before you fix",
        body: "Always lay out a small section dry first. It lets you see the real tone and size variation in that batch and adjust spacing before anything is set permanently.",
      },
    ],
    relatedProductSlugs: ["batavian-collection"],
    relatedGuideSlugs: [],
  },
];
