import { motion } from "framer-motion";
import {
  FaRobot,
  FaArrowTrendUp,
  FaBullseye,
  FaChartLine,
  FaCircleCheck,
} from "react-icons/fa6";

function AIRecommendation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        {/* Left */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/20 p-4">
              <FaRobot className="text-3xl" />
            </div>

            <div>
              <p className="text-blue-100 text-sm">
                RetailIQ Artificial Intelligence
              </p>

              <h2 className="text-3xl font-bold">
                Smart Pricing Recommendation
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between rounded-xl bg-white/10 p-4">
              <span>AI Confidence</span>
              <span className="font-bold">96%</span>
            </div>

            <div className="flex justify-between rounded-xl bg-white/10 p-4">
              <span>Market Demand</span>
              <span className="font-bold text-green-300">
                High ↑
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-white/10 p-4">
              <span>Expected Profit</span>
              <span className="font-bold text-yellow-300">
                +18%
              </span>
            </div>

            <div className="flex justify-between rounded-xl bg-white/10 p-4">
              <span>Suggested Price</span>
              <span className="font-bold">
                ₹1,249
              </span>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="flex-1 rounded-3xl bg-white p-7 text-slate-800">

          <h3 className="flex items-center gap-2 text-2xl font-bold">
            <FaBullseye className="text-blue-600" />
            AI Business Insight
          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex gap-3">
              <FaChartLine className="mt-1 text-green-600" />

              <p>
                Demand for this product is increasing compared to previous
                weeks.
              </p>
            </div>

            <div className="flex gap-3">
              <FaCircleCheck className="mt-1 text-blue-600" />

              <p>
                Inventory level is healthy. No immediate restocking required.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5">

              <h4 className="font-bold text-green-700">
                Final Recommendation
              </h4>

              <p className="mt-2 text-slate-700">
                Increase the selling price by
                <span className="font-bold text-green-700">
                  {" "}₹20–₹30
                </span>
                . Current market conditions indicate strong customer demand
                with healthy stock availability, improving overall profit
                potential while remaining competitive.
              </p>

            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default AIRecommendation;