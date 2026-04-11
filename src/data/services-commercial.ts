import { Service } from "./services-residential";

export const commercialServices: Service[] = [
  {
    slug: "commercial-drain-maintenance",
    title: "Commercial Drain Maintenance",
    shortDescription: "Preventive drain maintenance for restaurants, offices, and commercial properties.",
    description:
      "Clogged drains in a commercial setting mean halted operations, health code violations, and lost revenue. Grease traps in restaurants, high-volume restroom drains, and industrial floor drains require specialized maintenance that goes beyond residential solutions. Our commercial drain services include scheduled maintenance programs, hydro-jetting, and video inspection to keep your business flowing.",
    icon: "Building2",
    signs: [
      "Slow drains in restrooms or kitchen areas",
      "Grease trap overflowing or backed up",
      "Health department citations for drainage issues",
      "Floor drains pooling water",
      "Multiple fixture drains running slow simultaneously",
    ],
    benefits: [
      "Avoid costly business interruptions",
      "Stay compliant with health codes",
      "Scheduled maintenance prevents emergencies",
      "Extends the life of your plumbing infrastructure",
    ],
    faqs: [
      { question: "How often should commercial drains be serviced?", answer: "Restaurants should have drains cleaned quarterly. Offices and retail spaces typically need annual service. We'll create a maintenance schedule based on your usage patterns." },
      { question: "Do you service grease traps?", answer: "Yes, we clean, repair, and install grease traps in compliance with local health codes. We also provide documentation for your health inspections." },
      { question: "Can you service our property after business hours?", answer: "Absolutely. We offer evening and weekend service to minimize disruption to your business operations." },
    ],
  },
  {
    slug: "commercial-water-heater-systems",
    title: "Commercial Water Heater Systems",
    shortDescription: "High-capacity water heater installation and service for businesses.",
    description:
      "Commercial operations demand reliable, high-volume hot water — whether it's a restaurant kitchen, hotel laundry, or medical facility. A commercial water heater failure doesn't just mean cold water; it means shutting down critical business functions. We install and service commercial tank, tankless, and boiler systems sized to meet your business's exact demand.",
    icon: "Flame",
    signs: [
      "Insufficient hot water during peak hours",
      "Fluctuating water temperatures",
      "Rising energy costs from aging equipment",
      "Visible corrosion or leaks on commercial units",
      "Equipment past its expected service life",
    ],
    benefits: [
      "Uninterrupted hot water for peak demand",
      "Energy-efficient systems reduce operating costs",
      "Properly sized units for your exact needs",
      "Preventive maintenance extends equipment life",
    ],
    faqs: [
      { question: "What size commercial water heater do I need?", answer: "Sizing depends on your peak demand, number of fixtures, and type of business. We perform a detailed assessment to recommend the right capacity for your operation." },
      { question: "Do you offer maintenance contracts?", answer: "Yes, our commercial maintenance plans include annual inspections, flushing, anode rod checks, and priority emergency service." },
      { question: "Can you install tankless systems for commercial use?", answer: "Yes, we install commercial-grade tankless systems that can be linked together to provide unlimited hot water for high-demand applications." },
    ],
  },
  {
    slug: "commercial-pipe-repair",
    title: "Commercial Pipe Repair & Installation",
    shortDescription: "Large-scale pipe repair, replacement, and new construction plumbing.",
    description:
      "Pipe failures in commercial properties can flood occupied spaces, damage inventory, and shut down operations for days. The larger scale of commercial plumbing means higher stakes — more water volume, more pressure, and more potential for damage. Our commercial team handles everything from emergency pipe repairs to complete re-plumbing of office buildings, retail spaces, and industrial facilities.",
    icon: "Wrench",
    signs: [
      "Water stains on commercial ceilings or walls",
      "Sudden drop in water pressure across the building",
      "Rusty or discolored water from commercial fixtures",
      "Visible pipe corrosion in utility areas",
      "Aging building with original plumbing",
    ],
    benefits: [
      "Minimizes business downtime during repairs",
      "Large-scale repiping for aging buildings",
      "Code-compliant installations",
      "After-hours service available",
    ],
    faqs: [
      { question: "Can you work around our business hours?", answer: "Yes, we regularly schedule commercial work for evenings, weekends, and holidays to avoid disrupting your operations." },
      { question: "Do you handle tenant improvement plumbing?", answer: "Yes, we provide plumbing services for tenant buildouts, including new fixture installations, restroom additions, and kitchen plumbing for restaurant spaces." },
      { question: "Are you licensed for commercial work?", answer: "Yes, we hold a full commercial plumbing license and carry the insurance and bonding required for commercial projects." },
    ],
  },
  {
    slug: "backflow-prevention",
    title: "Backflow Prevention & Testing",
    shortDescription: "Backflow preventer installation, testing, and annual certification.",
    description:
      "Backflow events can contaminate your building's potable water with hazardous substances — a serious health risk and regulatory violation. Most municipalities require annual backflow preventer testing for commercial properties, and failure to comply results in fines or water service disconnection. We install, repair, and test backflow prevention devices with certified technicians who provide the documentation you need.",
    icon: "ShieldCheck",
    signs: [
      "Annual backflow test due or overdue",
      "Notice from the water utility about compliance",
      "New commercial tenant moving in",
      "Changes to irrigation or fire suppression systems",
      "Discolored or odd-tasting water",
    ],
    benefits: [
      "Stay compliant with local regulations",
      "Protect your water supply from contamination",
      "Certified testing with proper documentation",
      "Avoid fines and water service interruptions",
    ],
    faqs: [
      { question: "How often is backflow testing required?", answer: "Most jurisdictions require annual testing. We'll keep you on schedule and handle all the paperwork and reporting to your water utility." },
      { question: "What types of backflow preventers do you install?", answer: "We install and service all types including reduced pressure zone (RPZ) assemblies, double check valves, and atmospheric vacuum breakers." },
      { question: "Can you handle the city paperwork?", answer: "Yes, our certified testers file all required reports directly with your local water authority. You'll receive copies for your records." },
    ],
  },
  {
    slug: "commercial-restroom-plumbing",
    title: "Commercial Restroom Plumbing",
    shortDescription: "Design, installation, and maintenance of commercial restroom plumbing systems.",
    description:
      "Commercial restrooms see exponentially more use than residential bathrooms, requiring durable, code-compliant plumbing built for high traffic. A restroom plumbing failure means unhappy customers, employee complaints, and potential health code issues. We design, install, and maintain commercial restroom plumbing including ADA-compliant fixtures, hands-free technology, and high-efficiency flush systems.",
    icon: "Building",
    signs: [
      "Frequent restroom fixture breakdowns",
      "Non-compliant ADA fixtures",
      "Planning a restroom renovation or expansion",
      "Persistent odors or drainage issues",
      "Outdated fixtures wasting water",
    ],
    benefits: [
      "ADA-compliant installations",
      "Water-saving commercial fixtures",
      "Reduced maintenance with commercial-grade equipment",
      "Improved customer and employee experience",
    ],
    faqs: [
      { question: "Do you install touchless fixtures?", answer: "Yes, we install touchless faucets, flush valves, soap dispensers, and hand dryers — ideal for hygiene-conscious commercial environments." },
      { question: "Can you make our restrooms ADA compliant?", answer: "Absolutely. We're experienced with ADA requirements for commercial restrooms, including fixture heights, clearances, and grab bar installations." },
      { question: "Do you offer restroom maintenance contracts?", answer: "Yes, regular maintenance keeps your commercial restrooms functioning properly, catches issues early, and ensures ongoing code compliance." },
    ],
  },
  {
    slug: "gas-line-services",
    title: "Gas Line Installation & Repair",
    shortDescription: "Commercial gas line installation, repair, leak detection, and safety inspections.",
    description:
      "Gas line issues in commercial properties pose extreme safety risks — leaks can lead to explosions, fires, and carbon monoxide exposure. Restaurants, manufacturing facilities, and commercial kitchens depend on safe, reliable gas supply for daily operations. Our licensed technicians install, repair, and inspect commercial gas lines with rigorous safety protocols and full code compliance.",
    icon: "Zap",
    signs: [
      "Smell of rotten eggs or sulfur near gas appliances",
      "Hissing sound near gas lines",
      "Higher than expected gas bills",
      "Installing new gas-powered commercial equipment",
      "Older gas piping that hasn't been inspected",
    ],
    benefits: [
      "Ensures safety of employees and customers",
      "Code-compliant installations and repairs",
      "Electronic leak detection for precision",
      "Proper sizing for commercial gas demand",
    ],
    faqs: [
      { question: "What should I do if I smell gas?", answer: "Evacuate the building immediately, do not use light switches or phones inside, and call 911 from a safe distance. Then call us for emergency repair once the gas company has responded." },
      { question: "Can you install gas lines for new commercial kitchen equipment?", answer: "Yes, we install gas lines for commercial ranges, ovens, fryers, and other equipment. We ensure proper line sizing, shut-off valves, and code compliance." },
      { question: "How often should commercial gas lines be inspected?", answer: "We recommend annual inspections for commercial gas systems. Many insurance companies and local codes require regular inspection documentation." },
    ],
  },
];
