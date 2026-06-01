export interface ProductVariant {
  name: string;
  image: string;
  gallery: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Sale" | "New";
  description: string;
  shortDescription: string;
  slug: string;
  tags: string[];
  gallery: string[];
  videos: string[]; // YouTube video IDs
  purchaseLink?: string;
  variantType?: string; // e.g., "Colors", "Flavors", "Sizes"
  variants?: ProductVariant[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "FILM EYESHADOW",
    category: "Lip Gloss",
    price: 23.0,
    oldPrice: 27.0,
    image: "https://picsum.photos/seed/p1/800/800",
    badge: "Sale",
    featured: true,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam. Ea erant impetus consequuntur eos, velit congue vidisse eos ne.",
    shortDescription: "A premium lip gloss that provides a glossy, high-shine finish while keeping your lips hydrated throughout the day.",
    slug: "film-eyeshadow",
    tags: ["Cosmetic", "Make Up"],
    gallery: ["https://picsum.photos/seed/p1g1/800/800", "https://picsum.photos/seed/p1g2/800/800", "https://picsum.photos/seed/p1g3/800/800"],
    variantType: "Colors",
    variants: [
      {
        name: "Classic Pink",
        image: "https://picsum.photos/seed/p1v1/800/800",
        gallery: ["https://picsum.photos/seed/p1v1g1/800/800", "https://picsum.photos/seed/p1v1g2/800/800"]
      },
      {
        name: "Velvet Red",
        image: "https://picsum.photos/seed/p1v2/800/800",
        gallery: ["https://picsum.photos/seed/p1v2g1/800/800", "https://picsum.photos/seed/p1v2g2/800/800"]
      },
      {
        name: "Deep Ocean",
        image: "https://picsum.photos/seed/p1v3/800/800",
        gallery: ["https://picsum.photos/seed/p1v3g1/800/800", "https://picsum.photos/seed/p1v3g2/800/800"]
      }
    ],
    videos: ["vP9X2V9c3Uw", "6H85SjZ6BIA"],
    purchaseLink: "#"
  },
  {
    id: 2,
    name: "WILD PALETTES",
    category: "Lip Gloss",
    price: 25.0,
    image: "https://picsum.photos/seed/p2/800/800",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec. Eu has vide putent, dico option nominati no eam.",
    shortDescription: "An essential palette for creating both subtle day and bold night looks with ease.",
    slug: "wild-palettes",
    tags: ["Cosmetic", "Palettes"],
    gallery: ["https://picsum.photos/seed/p2g1/800/800", "https://picsum.photos/seed/p2g2/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 3,
    name: "ROSE SAFARI",
    category: "Lip Gloss",
    price: 35.0,
    image: "https://picsum.photos/seed/p3/800/800",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut. Eu agam malorum nec.",
    shortDescription: "A classic lipstick with a smooth texture and rich color payoff.",
    slug: "rose-safari",
    tags: ["Classic", "Lipstick"],
    gallery: ["https://picsum.photos/seed/p3g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 4,
    name: "SUMMER MIRAGE",
    category: "Lip Gloss",
    price: 32.0,
    image: "https://picsum.photos/seed/p4/800/800",
    badge: "New",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "A limited edition summer essential for a vibrant and fresh look.",
    slug: "summer-mirage",
    tags: ["Summer", "Limited"],
    gallery: ["https://picsum.photos/seed/p4g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 5,
    name: "SUMMER DRAMA",
    category: "Lip Gloss",
    price: 32.0,
    image: "https://picsum.photos/seed/p5/800/800",
    badge: "New",
    featured: true,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "Create a dramatic look with this intense and long-lasting formula.",
    slug: "summer-drama",
    tags: ["Drama", "Intense"],
    gallery: ["https://picsum.photos/seed/p5g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 6,
    name: "VELVET MATTE",
    category: "Lipstick",
    price: 18.0,
    image: "https://picsum.photos/seed/p6/800/800",
    badge: "Sale",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "A velvety matte finish that feels lightweight and comfortable on the lips.",
    slug: "velvet-matte",
    tags: ["Matte", "Velvet"],
    gallery: ["https://picsum.photos/seed/p6g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 7,
    name: "GLOW SERUM",
    category: "Skin Care",
    price: 45.0,
    image: "https://picsum.photos/seed/p7/800/800",
    badge: "New",
    featured: true,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "Get that perfect radiant glow with our hydrating and nourishing serum.",
    slug: "glow-serum",
    tags: ["Serum", "Glow"],
    gallery: ["https://picsum.photos/seed/p7g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 8,
    name: "SILK FOUNDATION",
    category: "Skin Care",
    price: 38.0,
    image: "https://picsum.photos/seed/p8/800/800",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "A silk-smooth foundation that provides buildable coverage and a natural finish.",
    slug: "silk-foundation",
    tags: ["Foundation", "Silk"],
    gallery: ["https://picsum.photos/seed/p8g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 9,
    name: "EYELASH CURLER",
    category: "Eye Care",
    price: 12.0,
    image: "https://picsum.photos/seed/p9/800/800",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "The perfect tool for beautifully curled lashes that last all day.",
    slug: "eyelash-curler",
    tags: ["Tools", "Curler"],
    gallery: ["https://picsum.photos/seed/p9g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 10,
    name: "BROW GEL",
    category: "Eye Care",
    price: 15.0,
    image: "https://picsum.photos/seed/p10/800/800",
    badge: "New",
    featured: true,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "Keep your brows in place and perfectly defined with our long-wear gel.",
    slug: "brow-gel",
    tags: ["Brows", "Gel"],
    gallery: ["https://picsum.photos/seed/p10g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 11,
    name: "PEACH BLUSH",
    category: "Cheek",
    price: 22.0,
    image: "https://picsum.photos/seed/p11/800/800",
    badge: "Sale",
    featured: false,
    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "A natural peach flush that adds warmth and glow to any complexion.",
    slug: "peach-blush",
    tags: ["Blush", "Peach"],
    gallery: ["https://picsum.photos/seed/p11g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
  {
    id: 12,
    name: "MATTE BRONZER",
    category: "Cheek",
    price: 28.0,
    image: "https://picsum.photos/seed/p12/800/800",
    featured: true,

    description: "An dico accommodare ius, porro mnesarchum pro in. Cetero fierent urbanitas eam id, sed movet voluptua ut.",
    shortDescription: "Get a sun-kissed look without the shine with our velvety matte bronzer.",
    slug: "matte-bronzer",
    tags: ["Bronzer", "Matte"],
    gallery: ["https://picsum.photos/seed/p12g1/800/800"],
    videos: ["vP9X2V9c3Uw"],
    purchaseLink: "#"
  },
];
