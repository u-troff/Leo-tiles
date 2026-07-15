export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-you-need-a-plumber",
    title: "7 Signs You Need to Call a Plumber Immediately",
    date: "2025-01-15",
    excerpt:
      "Some plumbing issues can wait, but these seven warning signs mean you should pick up the phone right away to prevent costly damage.",
    image: "https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    content: `
Not every plumbing issue is an emergency, but ignoring the wrong signs can turn a small problem into a major disaster. Here are seven warning signs that mean you should call a professional plumber immediately.

## 1. Water Backing Up in Multiple Drains

If water is backing up in more than one drain simultaneously, for example, your toilet and shower at the same time, this likely indicates a main sewer line blockage. This is not a problem you can fix with a plunger.

## 2. No Hot Water

A complete loss of hot water typically means your water heater has failed. While a pilot light issue might be a quick fix, other causes like a failed heating element or a cracked tank require professional attention.

## 3. Unexplained Spike in Water Bills

If your water bill suddenly jumps without a change in usage, you likely have a hidden leak. Even small leaks can waste thousands of gallons per month and cause significant structural damage.

## 4. Sewage Smell in Your Home

The smell of sewage inside your home indicates a broken or blocked sewer line. This is both a health hazard and a sign of a problem that will only get worse.

## 5. Water Stains on Ceilings or Walls

Brown water stains on your ceiling or walls mean there is an active leak somewhere in your plumbing system. The longer you wait, the more damage, including mold growth, will occur.

## 6. Low Water Pressure Throughout the House

If water pressure drops at every fixture, the issue is likely in your main water line or your home's pipe system, not just a single faucet aerator.

## 7. Gurgling Sounds from Drains

Gurgling sounds indicate trapped air in your plumbing system, which often signals a developing blockage or venting issue. Catching this early prevents full backups.

## When in Doubt, Call a Professional

If you notice any of these signs, don't wait. Call a licensed plumber to assess the situation before it becomes a bigger, and more expensive, problem.
    `.trim(),
  },
  {
    slug: "tankless-vs-tank-water-heaters",
    title: "Tankless vs. Tank Water Heaters: Which Is Right for You?",
    date: "2025-02-01",
    excerpt:
      "Choosing between a tankless and tank water heater? We break down the costs, benefits, and best use cases for each type.",
    image: "https://images.pexels.com/photos/11658940/pexels-photo-11658940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    content: `
When it's time to replace your water heater, one of the biggest decisions you'll face is whether to go with a traditional tank or a modern tankless system. Here's what you need to know.

## Tank Water Heaters

Tank water heaters store 40-80 gallons of hot water in an insulated tank, keeping it ready for use. They've been the standard for decades and are still the most common type in American homes.

**Pros:**
- Lower upfront cost ($800-$1,500 installed)
- Simple, well-understood technology
- Works well for homes with consistent hot water demand

**Cons:**
- Higher monthly energy costs (heating water 24/7)
- Limited hot water supply (can run out during heavy use)
- Larger footprint
- Shorter lifespan (8-12 years)

## Tankless Water Heaters

Tankless (on-demand) water heaters heat water only when you turn on a hot water faucet. They don't store hot water, they create it in real time.

**Pros:**
- Endless hot water supply
- Lower monthly energy costs (20-30% savings)
- Compact size, wall-mounted
- Longer lifespan (20+ years)

**Cons:**
- Higher upfront cost ($2,500-$4,500 installed)
- May need gas line or electrical upgrades
- Flow rate limitations with multiple simultaneous uses

## Which Should You Choose?

**Choose a tank water heater if** you have a moderate budget, your home already has a tank setup, and your hot water demands are consistent and predictable.

**Choose a tankless water heater if** you want long-term energy savings, have limited space, want endless hot water, or are building/renovating and can plan the installation into the project.

## Need Help Deciding?

Our team can evaluate your home's hot water needs, existing plumbing setup, and budget to recommend the best option. Call us for a free consultation.
    `.trim(),
  },
  {
    slug: "prevent-frozen-pipes",
    title: "How to Prevent Frozen Pipes This Winter",
    date: "2025-03-10",
    excerpt:
      "Frozen pipes can burst and cause thousands in water damage. Learn the simple steps you can take to protect your plumbing this winter.",
    image: "https://images.pexels.com/photos/35016079/pexels-photo-35016079.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    content: `
While Southern California winters are mild compared to much of the country, freezing temperatures do occur, especially in foothill communities like Altadena, La Cañada Flintridge, and Sierra Madre. A single frozen pipe can burst and cause thousands of dollars in water damage.

## Why Do Pipes Freeze?

Water expands when it freezes, creating enormous pressure inside your pipes. The most vulnerable pipes are those in unheated areas: garages, crawl spaces, exterior walls, and outdoor hose bibs.

## Prevention Steps

### 1. Insulate Exposed Pipes
Foam pipe insulation is inexpensive and easy to install. Focus on pipes in your garage, under the house, and along exterior walls.

### 2. Disconnect Garden Hoses
Before cold weather arrives, disconnect all garden hoses from outdoor faucets. A connected hose traps water in the faucet, which can freeze and crack the fixture.

### 3. Let Faucets Drip
During freezing nights, let faucets served by exposed pipes drip slightly. Moving water is much harder to freeze than standing water.

### 4. Keep Your Heat On
If you're traveling during cold weather, keep your thermostat set to at least 55°F. This keeps enough warmth in the house to prevent interior pipes from freezing.

### 5. Open Cabinet Doors
Open kitchen and bathroom cabinet doors to let warm air reach pipes along exterior walls.

## What to Do If a Pipe Freezes

If you turn on a faucet and only a trickle comes out, a pipe may be frozen. **Do not** use a torch or open flame. Instead, apply gentle heat with a hair dryer or wrap the pipe with warm towels. If you can't locate the frozen section or if a pipe has already burst, call us immediately.

## Stay Prepared

A little prevention goes a long way. If you're concerned about your home's vulnerability to freezing, we can perform a winter readiness inspection and recommend specific improvements.
    `.trim(),
  },
];
