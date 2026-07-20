import { useState } from "react";
import axios from "axios";
import { FaMagic, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";
import { toast } from "react-toastify";

function PricingForm() {
  const [formData, setFormData] = useState({
    product: "",
    category: "",
    costPrice: "",
    competitorPrice: "",
    demand: "High",
    stock: ""
  });

  const [recommendation, setRecommendation] = useState(null);
  const [suggestedPrice, setSuggestedPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generatePrice = async () => {
    const cost = Number(formData.costPrice);
    const competitor = Number(formData.competitorPrice);

    if (!formData.product || !cost || !competitor) {
      toast.error("Please enter product name, cost, and competitor price");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("retailiqToken");
      const response = await axios.post("http://localhost:5000/api/pricing/recommend", {
        product: formData.product,
        category: formData.category,
        costPrice: cost,
        competitorPrice: competitor,
        demand: formData.demand,
        stock: Number(formData.stock || 0)
      }, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });

      const result = response.data;
      setRecommendation(result);
      setSuggestedPrice(result.recommendedPrice);
      toast.success("AI pricing recommendation ready");
    } catch (error) {
      console.error(error);
      toast.error("Pricing engine is unavailable right now");
    } finally {
      setLoading(false);
    }
  };

  const submitProduct = async (e) => {
    e.preventDefault();

    if (!suggestedPrice) {
      toast.warning("Generate AI price first");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("retailiqToken");
      await axios.post("http://localhost:5000/api/products/add", {
        product: formData.product,
        category: formData.category,
        cost: Number(formData.costPrice),
        competitor: Number(formData.competitorPrice),
        price: suggestedPrice,
        stock: Number(formData.stock || 0),
        demand: formData.demand,
        confidence: recommendation?.confidence || 0
      }, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });

      toast.success("Product saved and synced to the dashboard");
      setFormData({
        product: "",
        category: "",
        costPrice: "",
        competitorPrice: "",
        demand: "High",
        stock: ""
      });
      setRecommendation(null);
      setSuggestedPrice(null);
    } catch (error) {
      console.error(error);
      toast.error("Could not save product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-purple-100 p-3 text-purple-700">
              <FaMagic className="text-2xl" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">AI Pricing Engine</p>
              <h2 className="text-2xl font-semibold text-slate-900">Optimize every listing with executive-grade pricing precision</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">Designed for modern sellers who need fast, accurate pricing decisions with real-time signal interpretation.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <div className="flex items-center gap-2 font-semibold"><FaShieldAlt /> Accuracy Target 95%+</div>
            <p className="mt-1">Built for confident, revenue-first decisions.</p>
          </div>
        </div>

        <form onSubmit={submitProduct} className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" type="text" name="product" placeholder="Product Name" value={formData.product} onChange={handleChange} required />
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" type="number" name="costPrice" placeholder="Cost Price" value={formData.costPrice} onChange={handleChange} required />
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" type="number" name="competitorPrice" placeholder="Competitor Price" value={formData.competitorPrice} onChange={handleChange} required />
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" name="demand" value={formData.demand} onChange={handleChange}>
            <option value="High">High Demand</option>
            <option value="Medium">Medium Demand</option>
            <option value="Low">Low Demand</option>
          </select>
          <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" type="number" name="stock" placeholder="Current Stock" value={formData.stock} onChange={handleChange} />

          <button type="button" onClick={generatePrice} disabled={loading} className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? "Analyzing market signals..." : "Generate AI Price ✨"}
          </button>

          {suggestedPrice && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
              <p className="text-sm text-emerald-700">Recommended Price</p>
              <h3 className="text-3xl font-semibold text-emerald-800">₹ {suggestedPrice}</h3>
            </div>
          )}

          <button type="submit" disabled={loading} className="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 lg:col-span-2">
            {loading ? "Saving to portfolio..." : "Save Product to Portfolio"}
          </button>
        </form>
      </div>

      {recommendation && (
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <FaChartLine className="text-blue-600" /> AI Recommendation Summary
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Expected Profit</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">₹ {recommendation.expectedProfit}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Profit Margin</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">{recommendation.profitMargin}%</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Market Position</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">{recommendation.marketPosition}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Confidence Score</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">{recommendation.confidence}%</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaRocket className="text-blue-400" /> Why this recommendation?
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {recommendation.reasons.map((reason, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingForm;