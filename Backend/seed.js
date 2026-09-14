const mongoose = require("mongoose");
require("dotenv").config();

const Plant = require("./models/Plant");

const plants = [

  // =====================================================
  // INDOOR PLANTS
  // =====================================================

  {
    name: "Snake Plant",
    category: "Indoor Plants",
    description: "A beautiful and easy-care indoor plant.",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    light: "Low to bright indirect light",
    water: "Low",
    difficulty: "Easy",
  },

  {
    name: "Monstera",
    category: "Indoor Plants",
    description: "A tropical plant with beautiful split leaves.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "ZZ Plant",
    category: "Indoor Plants",
    description: "A hardy indoor plant that thrives with very little attention.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Low to bright indirect light",
    water: "Low",
    difficulty: "Easy",
  },

  {
    name: "Peace Lily",
    category: "Indoor Plants",
    description: "Elegant foliage and white blooms for a calm indoor setting.",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    light: "Medium indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  // =====================================================
  // OUTDOOR PLANTS
  // =====================================================

  {
    name: "Areca Palm",
    category: "Outdoor Plants",
    description: "A lush palm perfect for outdoor spaces.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1523430117849-3d7b6c5a4f5d",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Croton",
    category: "Outdoor Plants",
    description: "Colorful foliage that brightens balconies and gardens.",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1597055181300-d7c2c2c1e3b5",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Bougainvillea",
    category: "Outdoor Plants",
    description: "A vibrant climber that brings colour to terraces and patios.",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Fern",
    category: "Outdoor Plants",
    description: "A lush green choice for shady outdoor corners and balconies.",
    price: 479,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    light: "Medium indirect light",
    water: "High",
    difficulty: "Medium",
  },

  // =====================================================
  // FLOWERING PLANTS
  // =====================================================

  {
    name: "Rose Plant",
    category: "Flowering Plants",
    description: "Classic flowering plant with beautiful blooms.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Hibiscus",
    category: "Flowering Plants",
    description: "A colorful flowering plant for gardens and balconies.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1597848212624-e19d8c5a4f5d",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Jasmine",
    category: "Flowering Plants",
    description: "Fragrant blooms that add a soothing scent to your garden.",
    price: 429,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Marigold",
    category: "Flowering Plants",
    description: "Bright and cheerful flowers that attract pollinators.",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Easy",
  },

  // =====================================================
  // SUCCULENTS
  // =====================================================

  {
    name: "Aloe Vera",
    category: "Succulents",
    description: "A low-maintenance succulent for your home.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Easy",
  },

  {
    name: "Echeveria",
    category: "Succulents",
    description: "A compact succulent with beautiful rosette leaves.",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Easy",
  },

  {
    name: "Jade Plant",
    category: "Succulents",
    description: "A classic indoor succulent with glossy green leaves.",
    price: 359,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Easy",
  },

  {
    name: "Cactus",
    category: "Succulents",
    description: "A cheerful little cactus for minimal-care spaces.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Easy",
  },

  // =====================================================
  // HERBS & VEGETABLES
  // =====================================================

  {
    name: "Basil",
    category: "Herbs & Vegetables",
    description: "Fresh basil that you can easily grow at home.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733",
    light: "Medium indirect light",
    water: "Moderate",
    difficulty: "Easy",
  },

  {
    name: "Mint",
    category: "Herbs & Vegetables",
    description: "Fresh and aromatic mint for your kitchen garden.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec",
    light: "Medium indirect light",
    water: "High",
    difficulty: "Easy",
  },

  {
    name: "Parsley",
    category: "Herbs & Vegetables",
    description: "Fresh culinary herbs perfect for small kitchen gardens.",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Medium indirect light",
    water: "Moderate",
    difficulty: "Easy",
  },

  {
    name: "Chili Plant",
    category: "Herbs & Vegetables",
    description: "A warm-weather favourite for home growers and balconies.",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  // =====================================================
  // SEEDS
  // =====================================================

  {
    name: "Sunflower Seeds",
    category: "Seeds",
    description: "Easy-to-grow seeds for beautiful sunflowers.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1597848212624-e19d8c5a4f5d",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Easy",
  },

  {
    name: "Tomato Seeds",
    category: "Seeds",
    description: "Grow fresh tomatoes right in your home garden.",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Marigold Seeds",
    category: "Seeds",
    description: "Bright pop of colour for your balcony or garden patch.",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Easy",
  },

  {
    name: "Lavender Seeds",
    category: "Seeds",
    description: "Fragrant seeds to grow a soothing flower bed at home.",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Medium",
  },

  {
    name: "Rubber Plant",
    category: "Indoor Plants",
    description: "Glossy, dramatic foliage that grows beautifully indoors.",
    price: 749,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Easy",
    potSize: "Large",
    stock: 12,
    petSafe: false,
    features: ["Air purifying", "Glossy foliage"],
  },
  {
    name: "Spider Plant",
    category: "Indoor Plants",
    description: "A forgiving trailing plant with lively striped leaves.",
    price: 399,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    light: "Medium indirect light",
    water: "Moderate",
    difficulty: "Easy",
    potSize: "Medium",
    stock: 18,
    petSafe: true,
    features: ["Pet friendly", "Fast growing"],
  },
  {
    name: "Lavender",
    category: "Outdoor Plants",
    description: "Fragrant purple blooms for sunny balconies and patios.",
    price: 459,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Medium",
    potSize: "Medium",
    stock: 10,
    petSafe: true,
    features: ["Fragrant", "Pollinator friendly"],
  },
  {
    name: "Geranium",
    category: "Flowering Plants",
    description: "Long-lasting colorful flowers for sunny windows and gardens.",
    price: 379,
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
    light: "Bright indirect light",
    water: "Moderate",
    difficulty: "Easy",
    potSize: "Medium",
    stock: 14,
    petSafe: false,
    features: ["Long blooming", "Balcony friendly"],
  },
  {
    name: "Haworthia",
    category: "Succulents",
    description: "A compact striped succulent made for bright small spaces.",
    price: 279,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Easy",
    potSize: "Small",
    stock: 22,
    petSafe: true,
    features: ["Compact", "Pet friendly"],
  },
  {
    name: "Rosemary",
    category: "Herbs & Vegetables",
    description: "A fragrant culinary herb that loves a sunny kitchen window.",
    price: 189,
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
    light: "Bright indirect light",
    water: "Low",
    difficulty: "Easy",
    potSize: "Small",
    stock: 16,
    petSafe: true,
    features: ["Culinary herb", "Fragrant"],
  },
  {
    name: "Coriander Seeds",
    category: "Seeds",
    description: "Quick-growing seeds for fresh coriander at home.",
    price: 69,
    image: "https://images.unsplash.com/photo-1535189487909-a262ad10c7d4",
    light: "Medium indirect light",
    water: "Moderate",
    difficulty: "Easy",
    potSize: "Small",
    stock: 40,
    petSafe: true,
    features: ["Kitchen garden", "Fast growing"],
  },
];


// =====================================================
// INSERT DATA
// =====================================================

async function seedDatabase() {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected 🌱");

    await Plant.deleteMany();

    await Plant.insertMany(plants);

    console.log("Plant data inserted successfully!");

    await mongoose.connection.close();

    console.log("Database connection closed.");

  } catch (error) {

    console.error("Seeding failed:");
    console.error(error);

    process.exit(1);
  }
}


seedDatabase();