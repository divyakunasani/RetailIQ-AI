const express = require("express");
const router = express.Router();
const { pool } = require("../config/db");
const { verifyToken } = require("../middleware/authMiddleware");
const { addProduct, getProducts } = require("../services/productStore");

router.use(verifyToken);

// Add Product
router.post("/add", async (req, res) => {
  try {
    const { product, category, cost, competitor, price, stock, suggestedPrice, confidence } = req.body;

    const costPrice = Number(cost) || 0;
    const competitorPrice = Number(competitor) || 0;
    const sellingPrice = Number(price || suggestedPrice) || 0;
    const stockCount = Number(stock) || 0;

    const inMemoryProduct = addProduct({
      product_name: product,
      category,
      cost_price: costPrice,
      selling_price: sellingPrice,
      competitor_price: competitorPrice,
      stock: stockCount,
      confidence
    });

    try {
      const result = await pool.query(
        `INSERT INTO products
        (
          product_name,
          category,
          cost_price,
          selling_price,
          competitor_price,
          stock
        )
        VALUES($1,$2,$3,$4,$5,$6)
        RETURNING *`,
        [product, category, costPrice, sellingPrice, competitorPrice, stockCount]
      );
      res.json({ ...result.rows[0], ...inMemoryProduct });
    } catch (dbError) {
      res.json(inMemoryProduct);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// View Products
router.get("/", async (req, res) => {
  try {
    const dbProducts = await pool.query("SELECT * FROM products ORDER BY id DESC");
    const memoryProducts = getProducts();
    const merged = [...memoryProducts, ...dbProducts.rows];
    const uniqueProducts = merged.filter((item, index, self) => index === self.findIndex((entry) => (entry.id || entry.product_name) === (item.id || item.product_name)));
    res.json(uniqueProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;