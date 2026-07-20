const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const pool = require("./config/db");

console.log("PORT =", process.env.PORT);
console.log("DATABASE_URL exists =", !!process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("🚀 RetailIQ AI Backend is Running...");
});

pool
  .connect()
  .then(() => {
    console.log("✅ Connected to Neon PostgreSQL");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:");
    console.error(err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});