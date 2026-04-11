export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  signs: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const residentialServices: Service[] = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning & Unclogging",
    shortDescription: "Professional drain cleaning to restore full flow and prevent backups.",
    description:
      "Slow drains and recurring clogs are more than an annoyance — they can signal deeper blockages that lead to sewage backups, water damage, and costly repairs. Ignoring the warning signs allows buildup to harden and spread further into your plumbing system. Our licensed plumbers use hydro-jetting and advanced camera inspection to locate and eliminate blockages completely, restoring full flow and protecting your home.",
    icon: "Droplets",
    signs: [
      "Water draining slowly in sinks, tubs, or showers",
      "Gurgling sounds coming from drains",
      "Recurring clogs in the same drain",
      "Unpleasant odors rising from drains",
      "Water backing up into other fixtures",
    ],
    benefits: [
      "Prevents costly sewage backups",
      "Eliminates foul odors",
      "Extends the life of your plumbing system",
      "Improves water flow throughout your home",
    ],
    faqs: [
      { question: "How often should drains be professionally cleaned?", answer: "We recommend professional drain cleaning every 1-2 years for preventive maintenance, or immediately if you notice slow drains or recurring clogs." },
      { question: "Is hydro-jetting safe for older pipes?", answer: "Our technicians assess your pipe material and condition before recommending hydro-jetting. For older or fragile pipes, we use gentler methods that are equally effective." },
      { question: "Can I use chemical drain cleaners instead?", answer: "We strongly advise against chemical drain cleaners — they can corrode pipes over time and often only provide a temporary fix. Professional cleaning addresses the root cause." },
    ],
  },
  {
    slug: "water-heater-installation",
    title: "Water Heater Installation & Repair",
    shortDescription: "Expert installation, repair, and replacement of tank and tankless water heaters.",
    description:
      "A failing water heater means cold showers, higher energy bills, and the risk of leaks or even flooding. Older units lose efficiency over time and can develop dangerous pressure buildup if not properly maintained. Our team installs, repairs, and replaces both tank and tankless water heaters, ensuring your home has reliable hot water with maximum energy efficiency.",
    icon: "Flame",
    signs: [
      "Inconsistent or no hot water",
      "Rusty or discolored hot water",
      "Strange rumbling or popping noises from the tank",
      "Visible leaking around the base of the heater",
      "Water heater is over 10 years old",
    ],
    benefits: [
      "Reliable hot water on demand",
      "Lower monthly energy bills",
      "Prevents water damage from leaks",
      "Modern units last 15-20 years with proper maintenance",
    ],
    faqs: [
      { question: "Should I choose a tank or tankless water heater?", answer: "It depends on your household size and usage. Tankless heaters are more energy-efficient and provide unlimited hot water, while tank heaters have lower upfront costs. We'll help you choose the best option." },
      { question: "How long does water heater installation take?", answer: "A standard tank water heater replacement typically takes 2-4 hours. Tankless installations may take 4-8 hours depending on whether gas lines or venting need modification." },
      { question: "Do you offer water heater maintenance?", answer: "Yes, we offer annual maintenance including flushing the tank, inspecting the anode rod, and checking all connections to extend your heater's lifespan." },
    ],
  },
  {
    slug: "sewer-line-repair",
    title: "Sewer Line Repair & Replacement",
    shortDescription: "Complete sewer line diagnostics, repair, and trenchless replacement.",
    description:
      "Sewer line problems can cause raw sewage to back up into your home, creating health hazards and extensive property damage. Tree root intrusion, pipe corrosion, and ground shifting are common culprits that worsen over time if left untreated. We use video camera inspection to pinpoint the exact problem and offer both traditional and trenchless repair options to fix your sewer line with minimal disruption to your yard.",
    icon: "Construction",
    signs: [
      "Multiple drains clogging at the same time",
      "Sewage odor in the yard or basement",
      "Lush, green patches over the sewer line",
      "Sinkholes or indentations in the yard",
      "Sewage backup in the lowest drains",
    ],
    benefits: [
      "Protects your family's health from sewage exposure",
      "Prevents foundation damage",
      "Trenchless options preserve your landscaping",
      "Long-lasting repairs backed by warranty",
    ],
    faqs: [
      { question: "What is trenchless sewer repair?", answer: "Trenchless repair uses specialized equipment to fix or replace your sewer line without digging up your entire yard. Methods include pipe lining and pipe bursting, which are faster and less disruptive than traditional excavation." },
      { question: "How do you find the problem in my sewer line?", answer: "We insert a waterproof camera into the sewer line to get real-time video of the interior. This allows us to see exactly where and what the problem is without any guesswork." },
      { question: "How long do sewer line repairs last?", answer: "Our sewer line repairs and replacements are built to last 50+ years. We use high-quality materials and proven techniques to ensure a permanent solution." },
    ],
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing Services",
    shortDescription: "24/7 emergency plumbing response for burst pipes, flooding, and urgent repairs.",
    description:
      "Plumbing emergencies don't wait for business hours — a burst pipe or major leak can cause thousands of dollars in water damage within minutes. Delaying a response only makes the damage worse and more expensive to repair. Our emergency team is available 24/7, arriving fast with the equipment to stop the damage, make repairs, and restore your plumbing system.",
    icon: "Siren",
    signs: [
      "Burst or frozen pipes",
      "Major water leaks or flooding",
      "Complete loss of water supply",
      "Sewage backup into your home",
      "Gas line leak (smell of rotten eggs)",
    ],
    benefits: [
      "Available 24 hours a day, 7 days a week",
      "Fast response times to minimize damage",
      "Fully equipped trucks for on-the-spot repairs",
      "Transparent emergency pricing — no surprise fees",
    ],
    faqs: [
      { question: "How fast can you respond to an emergency?", answer: "We aim to arrive within 30-60 minutes of your call, depending on your location and current demand. Your safety is our top priority." },
      { question: "Are emergency plumbing services more expensive?", answer: "While emergency rates may differ from standard scheduling, we always provide upfront pricing before starting any work. No hidden fees, ever." },
      { question: "What should I do while waiting for the plumber?", answer: "Turn off the main water shut-off valve to stop water flow, move valuables away from the affected area, and avoid using any plumbing fixtures until we arrive." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling & Plumbing",
    shortDescription: "Complete bathroom plumbing for renovations, upgrades, and new installations.",
    description:
      "Outdated bathroom plumbing can lead to leaks, low water pressure, and inefficient fixtures that waste water and money. A bathroom remodel without proper plumbing expertise risks costly mistakes, code violations, and future problems. Our licensed plumbers handle every aspect of bathroom plumbing — from relocating pipes and installing new fixtures to upgrading supply lines and drainage systems.",
    icon: "Bath",
    signs: [
      "Outdated or corroded fixtures",
      "Low water pressure in the bathroom",
      "Persistent leaks around tubs or showers",
      "Planning a bathroom renovation",
      "Wanting to upgrade to modern, water-efficient fixtures",
    ],
    benefits: [
      "Increases your home's value",
      "Modern fixtures reduce water consumption",
      "Code-compliant installations",
      "Seamless coordination with your renovation team",
    ],
    faqs: [
      { question: "Can you work with my general contractor on a remodel?", answer: "Absolutely. We regularly coordinate with general contractors, designers, and tile installers to ensure the plumbing phase integrates seamlessly with your renovation timeline." },
      { question: "Do you help choose bathroom fixtures?", answer: "Yes, we can recommend fixtures based on your budget, style preferences, and water efficiency goals. We work with all major brands including Kohler, Moen, and Delta." },
      { question: "How long does bathroom plumbing take during a remodel?", answer: "The rough-in plumbing phase typically takes 1-2 days, and fixture installation takes another day. We schedule our work to minimize delays to your overall project." },
    ],
  },
  {
    slug: "pipe-repair",
    title: "Pipe Repair & Repiping",
    shortDescription: "Expert pipe repair, leak detection, and whole-home repiping services.",
    description:
      "Leaking, corroded, or outdated pipes silently damage your home — from mold growth behind walls to foundation erosion beneath your feet. Galvanized and polybutylene pipes in older homes are especially prone to failure, and small leaks quickly become big problems. We provide precise leak detection, targeted pipe repair, and full repiping services using modern, durable materials like copper and PEX.",
    icon: "Wrench",
    signs: [
      "Visible water stains on walls or ceilings",
      "Unexplained increase in water bills",
      "Discolored or rusty water from faucets",
      "Low water pressure throughout the home",
      "Sounds of running water when no fixtures are in use",
    ],
    benefits: [
      "Stops hidden water damage",
      "Improves water quality and pressure",
      "Modern piping lasts 50-100 years",
      "Increases property value for resale",
    ],
    faqs: [
      { question: "How do you detect hidden leaks?", answer: "We use electronic leak detection equipment, thermal imaging, and acoustic listening devices to locate leaks behind walls, under slabs, and underground without unnecessary demolition." },
      { question: "When should I consider whole-home repiping?", answer: "If your home has galvanized or polybutylene pipes, is over 50 years old, or you're experiencing frequent leaks and low pressure, repiping is often the most cost-effective long-term solution." },
      { question: "How long does repiping a house take?", answer: "A typical whole-home repipe takes 2-5 days depending on the size of your home, number of fixtures, and accessibility of the pipes." },
    ],
  },
  {
    slug: "garbage-disposal-installation",
    title: "Garbage Disposal Installation & Repair",
    shortDescription: "Professional garbage disposal installation, repair, and replacement.",
    description:
      "A malfunctioning garbage disposal creates kitchen headaches — from foul odors and clogs to water backing up into your sink. Running a broken disposal risks damaging your drain pipes or causing electrical problems. Our plumbers install, repair, and replace all major brands of garbage disposals, ensuring a proper fit and safe electrical connection.",
    icon: "Cog",
    signs: [
      "Disposal makes grinding or humming noises but won't work",
      "Frequent jams or clogs",
      "Leaking from the bottom of the unit",
      "Persistent bad odors from the drain",
      "Disposal is over 10 years old",
    ],
    benefits: [
      "Keeps your kitchen clean and odor-free",
      "Prevents drain clogs from food waste",
      "Quick, same-day installation available",
      "Proper electrical and plumbing connections",
    ],
    faqs: [
      { question: "What size garbage disposal do I need?", answer: "For most households, a 1/2 to 3/4 HP disposal is sufficient. Larger families or heavy cooks may benefit from a 1 HP model. We'll recommend the right size for your usage." },
      { question: "Can you install a disposal if I don't have one?", answer: "Yes, we can install a new garbage disposal in most kitchen sinks, including the necessary plumbing and electrical connections." },
      { question: "How long do garbage disposals last?", answer: "Most garbage disposals last 8-15 years with proper use and maintenance. We can help you decide whether repair or replacement is the better option." },
    ],
  },
  {
    slug: "toilet-repair-installation",
    title: "Toilet Repair & Installation",
    shortDescription: "Complete toilet repair, replacement, and new installation services.",
    description:
      "A running, leaking, or constantly clogging toilet wastes hundreds of gallons of water and drives up your utility bills. Older toilets are significantly less water-efficient than modern models, costing you money every month. We repair all toilet issues — from flapper valves and fill mechanisms to complete replacements with modern, water-saving models.",
    icon: "Droplet",
    signs: [
      "Toilet runs continuously or intermittently",
      "Frequent or persistent clogging",
      "Leaking around the base",
      "Weak or incomplete flushing",
      "Cracks in the porcelain",
    ],
    benefits: [
      "Save up to 13,000 gallons of water per year with modern toilets",
      "Eliminate annoying running and leaking",
      "Prevent water damage to your bathroom floor",
      "Quick, clean installation",
    ],
    faqs: [
      { question: "Should I repair or replace my toilet?", answer: "If your toilet is over 15 years old, requires frequent repairs, or uses more than 1.6 gallons per flush, replacement is usually more cost-effective in the long run." },
      { question: "How long does toilet installation take?", answer: "A straightforward toilet replacement typically takes 1-2 hours. If we need to modify the flange or floor, it may take slightly longer." },
      { question: "Do you install bidets or bidet attachments?", answer: "Yes, we install standalone bidets, bidet toilet seats, and bidet attachments. We can also run the necessary water supply lines if your bathroom isn't already set up for one." },
    ],
  },
  {
    slug: "water-line-repair",
    title: "Water Line Repair & Installation",
    shortDescription: "Main water line repair, replacement, and new installations.",
    description:
      "Your main water line is the lifeline of your home's plumbing — when it fails, you lose water to your entire house. Aging pipes, tree root intrusion, and ground shifting can cause leaks or complete line failure, leading to low pressure, contaminated water, or a soggy yard. We diagnose and repair main water lines using both traditional and trenchless methods.",
    icon: "Waves",
    signs: [
      "Significant drop in water pressure",
      "Discolored water from all faucets",
      "Unexplained wet spots in the yard",
      "Consistently high water bills without increased usage",
      "Water meter running when no water is in use",
    ],
    benefits: [
      "Restores full water pressure",
      "Ensures clean, safe drinking water",
      "Trenchless options minimize yard disruption",
      "Long-lasting materials and professional installation",
    ],
    faqs: [
      { question: "How do I know if my main water line is leaking?", answer: "Common signs include a sudden drop in water pressure, unexplained wet areas in your yard, and your water meter continuing to run when all fixtures are off." },
      { question: "Who is responsible for the water line — me or the city?", answer: "Typically, you're responsible for the water line from the meter to your home. The city maintains the line from the main to the meter. We can help you determine where the problem lies." },
      { question: "How long does a water line replacement take?", answer: "Most water line replacements are completed in 1-2 days. Trenchless methods are often faster, sometimes completed in a single day." },
    ],
  },
  {
    slug: "sump-pump-installation",
    title: "Sump Pump Installation & Maintenance",
    shortDescription: "Sump pump installation, repair, and maintenance to protect against flooding.",
    description:
      "Basement flooding can destroy your belongings, damage your foundation, and create dangerous mold conditions. Without a functioning sump pump, heavy rains and rising groundwater have a direct path into your home. We install, repair, and maintain sump pump systems with battery backup options to keep your basement dry even during power outages.",
    icon: "Anchor",
    signs: [
      "Water pooling in the basement after rain",
      "Musty smell or visible mold in the basement",
      "Sump pump making unusual noises",
      "Sump pump running constantly",
      "No battery backup on existing sump pump",
    ],
    benefits: [
      "Prevents costly flood damage",
      "Protects against mold and mildew",
      "Battery backup options for power outage protection",
      "Increases home value and insurability",
    ],
    faqs: [
      { question: "Do I need a sump pump?", answer: "If your basement has ever had water intrusion, your home is in a flood-prone area, or your water table is high, a sump pump is strongly recommended." },
      { question: "How often should a sump pump be replaced?", answer: "Most sump pumps last 7-10 years. We recommend annual testing and maintenance to ensure it's ready when you need it." },
      { question: "Should I get a battery backup sump pump?", answer: "Absolutely. Power outages often coincide with heavy storms — exactly when you need your sump pump most. A battery backup ensures continuous protection." },
    ],
  },
  {
    slug: "faucet-fixture-installation",
    title: "Faucet & Fixture Installation",
    shortDescription: "Professional installation of faucets, sinks, and plumbing fixtures.",
    description:
      "Worn-out faucets and fixtures don't just look bad — they waste water, create annoying drips, and can cause water damage to countertops and cabinetry. Improper DIY installations often lead to leaks, cross-connections, or code violations. Our plumbers professionally install kitchen and bathroom faucets, sinks, shower fixtures, and more, ensuring watertight connections and proper operation.",
    icon: "Pipette",
    signs: [
      "Dripping or leaking faucets",
      "Outdated or corroded fixtures",
      "Difficulty turning handles on or off",
      "Low water pressure at specific fixtures",
      "Planning a kitchen or bathroom update",
    ],
    benefits: [
      "Stops water waste from dripping faucets",
      "Modern fixtures improve your home's appearance",
      "Water-efficient models reduce utility bills",
      "Professional installation prevents leaks",
    ],
    faqs: [
      { question: "Can I use a faucet I purchased myself?", answer: "Yes, we're happy to install customer-supplied fixtures. Just make sure it's compatible with your sink or countertop configuration, and we'll handle the rest." },
      { question: "How long does faucet installation take?", answer: "A standard faucet replacement takes about 1 hour. If we need to modify supply lines or the sink cutout, it may take a bit longer." },
      { question: "Do you install touchless faucets?", answer: "Yes, we install all types of faucets including touchless, pull-down, wall-mounted, and commercial-style options." },
    ],
  },
  {
    slug: "water-filtration-systems",
    title: "Water Filtration & Softener Systems",
    shortDescription: "Whole-home water filtration, softener installation, and water quality solutions.",
    description:
      "Hard water and contaminants affect everything from the taste of your drinking water to the lifespan of your appliances and plumbing fixtures. Scale buildup from hard water clogs pipes and reduces water heater efficiency, costing you money. We install whole-home water filtration systems, water softeners, and reverse osmosis units tailored to your water quality needs.",
    icon: "Filter",
    signs: [
      "White scale buildup on faucets and showerheads",
      "Dry skin or hair after showering",
      "Spots on dishes after dishwasher cycles",
      "Unpleasant taste or odor in tap water",
      "Staining on sinks, tubs, or toilets",
    ],
    benefits: [
      "Cleaner, better-tasting water throughout your home",
      "Extends the life of water heaters and appliances",
      "Softer skin and hair",
      "Reduces scale buildup and plumbing wear",
    ],
    faqs: [
      { question: "Do I need a water test first?", answer: "We recommend it. We can test your water to identify exactly what contaminants or minerals are present, then recommend the best filtration solution for your specific situation." },
      { question: "What's the difference between a water softener and a filter?", answer: "Water softeners specifically remove calcium and magnesium (hard water minerals). Water filters remove a broader range of contaminants including chlorine, sediment, and heavy metals. Many homes benefit from both." },
      { question: "How much maintenance do these systems require?", answer: "Water softeners need salt refills every 1-2 months. Filtration systems typically need filter replacements every 6-12 months. We offer maintenance plans to keep everything running smoothly." },
    ],
  },
];
