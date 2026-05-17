const cookies = [
  {
    id: 1,
    name: "Chocolate Chip Thins",
    category: "Classic",
    price: 1,
    calories: 140,
    protein: 2,
    description:
      "Thin chewy chocolate chip cookies with crispy edges and soft buttery centers.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    allergens: ["Wheat", "Eggs", "Milk"],
    pricing: {
      single: "$1",
      threePack: "$2",
      sixPack: "$4",
      dozen: "$7",
    },
  },

  {
    id: 2,
    name: "Chocolate Peanut Butter Cookie",
    category: "Gourmet",
    price: 5,
    calories: 420,
    protein: 7,
    description:
      "Thick brownie-style chocolate cookies topped with creamy peanut butter icing.",
    image:
      "https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1200&q=80",
    allergens: ["Wheat", "Eggs", "Milk", "Peanuts"],
    pricing: {
      single: "$5",
      fourPack: "$18",
      sixPack: "$25",
    },
  },

  {
    id: 3,
    name: "Brown Butter Cookie",
    category: "Gourmet",
    price: 4,
    calories: 310,
    protein: 4,
    description:
      "Rich brown butter cookies with soft centers and deep caramel flavor.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80",
    allergens: ["Wheat", "Eggs", "Milk"],
    pricing: {
      single: "$4",
      fourPack: "$14",
      sixPack: "$20",
    },
  },

  {
    id: 4,
    name: "Cookie Cakes",
    category: "Specialty",
    price: 18,
    calories: 900,
    protein: 10,
    description:
      "Custom cookie cakes perfect for birthdays, parties, and celebrations.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    allergens: ["Wheat", "Eggs", "Milk"],
    pricing: {
      mini: "$18",
      medium: "$28",
      large: "$40",
    },
  },
]

export default cookies