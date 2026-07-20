import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaLock, FaUserPlus } from "react-icons/fa";

function AuthPage({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      toast.error("Please fill in the required details");
      return;
    }

    try {
      setLoading(true);
      const endpoint = isLogin ? "http://localhost:5000/api/auth/login" : "http://localhost:5000/api/auth/signup";
      const response = await axios.post(endpoint, formData);

      localStorage.setItem("retailiqToken", response.data.token);
      localStorage.setItem("retailiqUser", JSON.stringify(response.data.user));
      onAuthSuccess(response.data.user);
      toast.success(isLogin ? "Welcome back!" : "Account created successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row">
      <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
            <FaLock className="text-xl" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Secure Seller Access</p>
            <h2 className="text-2xl font-semibold text-slate-900">Sign in to your RetailIQ AI workspace</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-blue-600">
            {isLogin ? "Create an account" : "Sign in instead"}
          </button>
        </div>
      </div>

      <div className="flex-1 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl bg-white/10 p-3 text-blue-300">
            <FaUserPlus className="text-xl" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why sign up?</p>
            <h3 className="text-xl font-semibold">Build your pricing command center</h3>
          </div>
        </div>
        <ul className="space-y-3 text-sm text-slate-300">
          <li>• Save and review your AI pricing recommendations</li>
          <li>• Keep your portfolio and inventory organized</li>
          <li>• Access your smart pricing workspace securely</li>
        </ul>
      </div>
    </div>
  );
}

export default AuthPage;
