const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database connection
const { initializeDatabase } = require("./config/db");
const { verifyToken } = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("RetailIQ AI Backend Running");
});

// Server
const PORT = process.env.PORT || 5000;

// AI Price Recommendation API
app.post("/api/pricing/recommend", verifyToken, (req, res) => {
  const { product, category, costPrice, competitorPrice, demand = "Medium", stock = 0 } = req.body;

  const cost = Number(costPrice) || 0;
  const competitor = Number(competitorPrice) || 0;

  if (!product || !cost || !competitor) {
    return res.status(400).json({ message: "Product name, cost price, and competitor price are required" });
  }

  const demandLevel = String(demand).toLowerCase();
  const demandMultiplier = demandLevel === "high" ? 1.035 : demandLevel === "low" ? 0.96 : 1.0;
  let recommendedPrice = competitor * demandMultiplier;
  const minimumPrice = cost + cost * 0.08;

  if (recommendedPrice < minimumPrice) {
    recommendedPrice = minimumPrice;
  }

  const roundedPrice = Math.round(recommendedPrice);
  const expectedProfit = roundedPrice - cost;
  const profitMargin = Math.round((expectedProfit / roundedPrice) * 100);

  let marketPosition = "Competitive";
  if (roundedPrice > competitor * 1.04) {
    marketPosition = "Premium";
  } else if (roundedPrice < competitor * 0.95) {
    marketPosition = "Value";
  }

  const confidence = Math.min(96, 72 + (demandLevel === "high" ? 12 : demandLevel === "low" ? 6 : 8));

  const reasons = [];
  if (demandLevel === "high") {
    reasons.push("Demand is strong, so a slight premium is justified.");
  } else if (demandLevel === "low") {
    reasons.push("Demand is soft, so the pricing is moderated for conversion.");
  } else {
    reasons.push("Demand is balanced, so a competitive price is ideal.");
  }

  reasons.push("Competitor benchmark completed and blended with your cost baseline.");
  if (stock <= 5) {
    reasons.push("Low stock supports a slightly stronger price position.");
  } else if (stock >= 20) {
    reasons.push("Healthy stock allows a more competitive price to boost sales.");
  }

  res.json({
    product,
    category: category || "General",
    recommendedPrice: roundedPrice,
    expectedProfit,
    profitMargin,
    marketPosition,
    confidence: Math.max(70, confidence),
    reasons
  });
});

const startServer = async () => {
  await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
};

startServer();
