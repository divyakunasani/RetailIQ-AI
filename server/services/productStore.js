const products = [];

function addProduct(product) {
  const normalized = {
    id: Date.now(),
    product_name: product.product_name || product.product || "Untitled Product",
    category: product.category || "General",
    cost_price: Number(product.cost_price || product.cost || 0),
    selling_price: Number(product.selling_price || product.price || product.suggestedPrice || 0),
    competitor_price: Number(product.competitor_price || product.competitor || 0),
    stock: Number(product.stock || 0),
    demand: product.demand || "Medium",
    confidence: Number(product.confidence || 0),
    created_at: new Date().toISOString()
  };

  products.unshift(normalized);
  return normalized;
}

function getProducts() {
  return products.slice(0, 50);
}

module.exports = { addProduct, getProducts };
