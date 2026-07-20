import { motion } from "framer-motion";
import { FaRobot, FaChartLine, FaArrowTrendUp } from "react-icons/fa";

function HeroSection({
  totalProducts,
  totalRevenue,
  avgProfit,
  onRefresh,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[30px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-8"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm">
            AI Powered Retail Platform
          </p>

          <h1 className="mt-3 text-5xl font-black text-white drop-shadow-lg">
  🚀 RetailIQ.AI
</h1>

         <p className="mt-5 text-slate-200 max-w-2xl leading-7 font-medium"> 
            Empower sellers with AI-driven pricing, inventory intelligence,
            demand forecasting and profit optimization from one unified
            dashboard.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-100 text-blue-700 px-4 py-2 font-semibold">
              AI Confidence 96%
            </span>

            <span className="rounded-full bg-green-100 text-green-700 px-4 py-2 font-semibold">
              Live Analytics
            </span>

            <span className="rounded-full bg-purple-100 text-purple-700 px-4 py-2 font-semibold">
              Smart Pricing Active
            </span>

          </div>

        </div>

        <div className="flex flex-col gap-4">

          <button
            onClick={onRefresh}
            className="rounded-2xl bg-slate-900 px-6 py-4 text-white font-semibold hover:scale-105 transition"
          >
            Refresh Dashboard
          </button>

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white p-6 shadow-xl">

            <div className="flex items-center gap-3">

              <FaRobot size={32} />

              <div>

                <p className="text-sm opacity-90">
                  Today's AI Insight
                </p>

                <h3 className="text-xl font-bold">
                  Increase Electronics pricing by 8%
                </h3>

              </div>

            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">

              <div>

                <p className="text-sm opacity-80">
                  Products
                </p>

                <h2 className="text-2xl font-bold">
                  {totalProducts}
                </h2>

              </div>

              <div>

                <p className="text-sm opacity-80">
                  Revenue
                </p>

                <h2 className="text-2xl font-bold">
                  ₹{totalRevenue.toLocaleString()}
                </h2>

              </div>

              <div>

                <p className="text-sm opacity-80">
                  Profit
                </p>

                <h2 className="text-2xl font-bold">
                  {avgProfit}%
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="relative z-10 mt-8 grid md:grid-cols-3 gap-4">

        <div className="rounded-2xl bg-white/60 p-5 backdrop-blur">

          <FaRobot className="text-blue-600 text-3xl" />

          <h3 className="mt-3 font-bold text-slate-900">
            AI Pricing
          </h3>

          <p className="text-sm text-slate-600 mt-2">
            Intelligent pricing recommendations using competitor price,
            demand and profit analysis.
          </p>

        </div>

        <div className="rounded-2xl bg-white/60 p-5 backdrop-blur">

          <FaChartLine className="text-green-600 text-3xl" />

          <h3 className="mt-3 font-bold text-slate-900">
            Live Analytics
          </h3>

          <p className="text-sm text-slate-600 mt-2">
            Revenue, inventory and profit metrics updated instantly.
          </p>

        </div>

        <div className="rounded-2xl bg-white/60 p-5 backdrop-blur">

          <FaArrowTrendUp className="text-purple-600 text-3xl" />

          <h3 className="mt-3 font-bold text-slate-900">
            Growth Forecast
          </h3>

          <p className="text-sm text-slate-600 mt-2">
            AI predicts pricing opportunities before competitors react.
          </p>

        </div>

      </div>

    </motion.section>
  );
}

export default HeroSection;