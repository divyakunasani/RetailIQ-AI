import { motion } from "framer-motion";
import {
  FaRobot,
  FaArrowTrendUp,
  FaBoxesStack,
  FaCircleCheck,
} from "react-icons/fa6";

function AIInsight({ avgProfit, totalProducts }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-[30px] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-2xl"
    >
      <div className="p-8">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

            <FaRobot size={28}/>

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              AI Decision Center
            </h2>

            <p className="text-blue-100">
              RetailIQ Intelligence Engine
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-sm opacity-80">

              AI Confidence

            </p>

            <h2 className="text-3xl font-bold mt-2">

              96%

            </h2>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-sm opacity-80">

              Avg Profit

            </p>

            <h2 className="text-3xl font-bold mt-2">

              {avgProfit}%

            </h2>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-sm opacity-80">

              Products

            </p>

            <h2 className="text-3xl font-bold mt-2">

              {totalProducts}

            </h2>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-sm opacity-80">

              Forecast

            </p>

            <h2 className="text-3xl font-bold mt-2">

              +18%

            </h2>

          </div>

        </div>

        <div className="mt-8 rounded-3xl bg-white text-slate-800 p-6">

          <h3 className="font-bold text-xl flex items-center gap-2">

            <FaArrowTrendUp className="text-green-600"/>

            AI Recommendation

          </h3>

          <div className="space-y-4 mt-5">

            <div className="flex justify-between">

              <span>Demand</span>

              <span className="font-semibold text-green-600">

                High ↑

              </span>

            </div>

            <div className="flex justify-between">

              <span>Inventory</span>

              <span className="font-semibold">

                Healthy

              </span>

            </div>

            <div className="flex justify-between">

              <span>Expected Profit</span>

              <span className="font-bold text-green-600">

                +18%

              </span>

            </div>

            <div className="flex justify-between">

              <span>Risk Level</span>

              <span className="text-blue-600 font-semibold">

                Low

              </span>

            </div>

          </div>

          <div className="rounded-2xl bg-green-50 p-4 mt-6">

            <div className="flex gap-3">

              <FaCircleCheck className="text-green-600 mt-1"/>

              <p className="text-sm">

                AI suggests increasing Electronics prices by
                <b> 8%</b> while keeping Fashion products
                unchanged. Inventory levels are healthy and
                expected weekly revenue may increase.

              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default AIInsight;