const express = require("express");
const router = express.Router();

const Plant = require("../models/Plant");

router.get("/categories", async (req, res) => {
  try {
    const categories = await Plant.distinct("category");

    res.status(200).json({
      success: true,
      categories: categories.sort(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch plant categories",
      error: error.message,
    });
  }
});

function normalizeText(value = "") {
  return String(value).toLowerCase().trim();
}

function getRecommendedPlants(plants, answers = {}) {
  const category = normalizeText(answers.category || "");
  const light = normalizeText(answers.light || "");
  const difficulty = normalizeText(answers.difficulty || "");

  return plants
    .map((plant) => {
      const plantData = plant.toObject ? plant.toObject() : plant;
      const plantCategory = normalizeText(plantData.category || "");
      const plantLight = normalizeText(plantData.light || "");
      const plantDifficulty = normalizeText(plantData.difficulty || "");

      let score = 0;

      if (category && plantCategory === category) {
        score += 5;
      }

      if (light && plantLight.includes(light)) {
        score += 3;
      }

      if (difficulty && plantDifficulty === difficulty) {
        score += 2;
      }

      return {
        ...plantData,
        matchScore: score,
      };
    })
    .filter((plant) => {
      if (category) {
        return plant.category && normalizeText(plant.category) === category;
      }

      if (!light && !difficulty) return true;

      return plant.matchScore > 0;
    })
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 6);
}

// GET all plants / filter by category
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let plants;

    if (category) {
      plants = await Plant.find({
        category: {
          $regex: new RegExp(`^${category}$`, "i"),
        },
      });
    } else {
      plants = await Plant.find();
    }

    res.status(200).json({
      success: true,
      count: plants.length,
      plants: plants,
    });
  } catch (error) {
    console.error("Error fetching plants:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch plants",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);

    if (!plant) {
      return res.status(404).json({
        success: false,
        message: "Plant not found",
      });
    }

    res.status(200).json({ success: true, plant });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid plant id",
      error: error.message,
    });
  }
});

router.post("/recommend", async (req, res) => {
  try {
    const { category, light, difficulty } = req.body || {};

    const plants = await Plant.find({});
    const recommendedPlants = getRecommendedPlants(plants, {
      category,
      light,
      difficulty,
    });

    res.status(200).json({
      success: true,
      count: recommendedPlants.length,
      plants: recommendedPlants,
    });
  } catch (error) {
    console.error("Recommended plant error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get plant recommendations",
      error: error.message,
    });
  }
});

module.exports = router;
module.exports.getRecommendedPlants = getRecommendedPlants;