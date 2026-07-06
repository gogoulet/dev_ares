export const homeContent = {
  hero: {
    eyebrow: "Ares World — Global Sovereign Protection",
    title: ["We secure", "the perimeter.", "Digital. Physical. Tactical."],
    body: "Ares World operates at the intersection of elite operational security and high-end privacy orchestration. We protect the legacies, assets, and operational continuity of global family offices and visionary entrepreneurs.",
    action: "Initiate briefing",
  },
  marquee: [
    "OpSec Mastery",
    "High-End Surveillance",
    "Digital Audits",
    "Physical Countermeasures",
    "Family Office Protection",
    "Global Medical Concierge",
    "Crisis Immunity",
    "Asset Erasure",
    "Elite Logistics",
    "Absolute Discretion",
  ],
  concept: {
    eyebrow: "01 - Paradigm",
    heading: ["Mitigating threat", "through absolute discipline,", "and zero digital trace."],
    body: [
      "We do not react to breaches; we engineer environments where breaches are impossible. For the global elite, vulnerability is a systemic liability. We conduct deep-spectrum digital audits and build counter-surveillance matrices tailored to high-profile lifestyles.",
      "True protection extends beyond data and physical walls. It encompasses the human element. We insulate your family’s inner circle, vetting and securing global access to private medicine, psychology, wellness, and dedicated luxury concierge services worldwide.",
    ],
    caption: "Fig. 01 - Tactical Architecture, Ares World, 2026",
    quote: "Security is not a layer you add. It is the invisible boundary of your sovereignty.",
    quoteByline: "Jean-Francois Goulet, Founder",
  },
  tasting: {
    eyebrow: "02 - Core Capabilities",
    heading: ["Four vectors,", "one unified shield,", "zero compromise."],
    note: "All engagements require formal verification and are subject to strict multi-party non-disclosure protocols prior to intake.",
    caption: "Operational Framework - Q3 2026",
    courses: [
      {
        number: "I",
        title: "Ares OpSec & Audits",
        accent: "digital sovereignity",
        body: "Comprehensive digital footprint erasure, communication encryption, and deep-network vulnerability audits to insulate private wealth from adversarial threats.",
        pairing: "Protocol - Air-Gapped Zero Trust",
      },
      {
        number: "II",
        title: "High-End Surveillance",
        accent: "physical intelligence",
        body: "State-of-the-art counter-surveillance, close-target reconnaissance, and cutting-edge tactical monitoring systems for executive assets and estates.",
        pairing: "Systems - Next-Gen Signal Intelligence",
      },
      {
        number: "III",
        title: "Family Safe Spaces",
        accent: "clinical & psychological preservation",
        body: "Securing immediate, private access to world-class clinical medicine, psychological advisory, and premium health & beauty networks globally.",
        pairing: "Oversight - Dr. S.M. Joubert",
      },
      {
        number: "IV",
        title: "Global Concierge",
        accent: "unrestricted lifestyle logistics",
        body: "Vetted international lifestyle management, secure transit coordination, and private entry into elite enclaves for principal family members.",
        pairing: "Network - Global Monitored Nodes",
      },
    ],
  },
  chef: {
    eyebrow: "03 - The Commander",
    heading: {
      line1: "Jean-Francois Goulet.",
      accent: "Strategic foresight,",
      rest: "clinical execution.",
    },
    quote:
      "A family office is only as strong as its quietest vulnerability. We build shields that allow leaders to create without looking over their shoulders.",
    timeline: [
      { year: "2016", text: "Establishes foundational infrastructure in elite information security and threat management." },
      { year: "2020", text: "Pivots exclusively to high-net-worth individual protection and advanced physical/digital counter-surveillance." },
      { year: "2024", text: "Integrates specialized medical, psychological, and lifestyle concierge networks into core security offerings." },
      { year: "2026", text: "Launches the comprehensive Ares World framework, standardizing global elite operational immunity." },
    ],
  },
  interior: {
    eyebrow: "04 - Digital Posture",
    heading: {
      lead: "Low-emission interface,",
      accent: "deep obsidian hues,",
      rest: "monospaced technical clarity.",
    },
    features: [
      {
        title: "Visual Signature",
        body: "A high-contrast, low-light ecosystem. Heavy slate blacks, brushed steel accents, and sharp typography that reflects an uncompromising military-grade discipline.",
      },
      {
        title: "Information Density",
        body: "Eliminating marketing fluff. High-end editorial curation balanced with raw technical specifications that respect the time and intelligence of family office trustees.",
      },
      {
        title: "The Silence",
        body: "No tracking, no external cookies, no third-party scripts. The website itself is a showcase of clean code and rigorous digital privacy.",
      },
    ],
  },
  reservation: {
    eyebrow: "05 - Intake",
    heading: ["By referral only.", "By vetting only.", "One legacy at a time."],
    body: "We do not publicize our client roster. To initiate a secure assessment of your family office or enterprise security posture, establish an encrypted channel below.",
    formTitle: "Open secure briefing channel",
    confirmation: "All requests undergo strict identity verification before response. Expect direct contact within 24 hours.",
  },
  footer: {
    tagline: "Ares World — Operational security, high-end surveillance, and family preservation for the global elite.",
    signal: "All channels encrypted. Systems operational.",
  },
} as const;

export type HomeContent = typeof homeContent;
