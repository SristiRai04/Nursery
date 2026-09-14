const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    light: {
      type: String,
      default: "",
    },

    water: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      default: "Easy",
    },

    potSize: {
      type: String,
      default: "Medium",
    },

    stock: {
      type: Number,
      default: 0,
    },

    petSafe: {
      type: Boolean,
      default: false,
    },

    features: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", plantSchema);