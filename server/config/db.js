const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const initializeDatabase = async () => {
    try {
        await pool.query("SELECT NOW()");
        console.log("CONNECTED TO NEON POSTGRESQL");

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                product_name VARCHAR(255),
                category VARCHAR(100),
                cost_price NUMERIC DEFAULT 0,
                selling_price NUMERIC DEFAULT 0,
                competitor_price NUMERIC DEFAULT 0,
                stock INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    } catch (error) {
        console.log("DATABASE CONNECTION FAILED");
        console.log(error.message);
    }
};

module.exports = { pool, initializeDatabase };