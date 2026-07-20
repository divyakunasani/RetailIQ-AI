import { motion } from "framer-motion";
import {
  FaBox,
  FaChartLine,
  FaWarehouse,
  FaDollarSign,
  FaRobot,
} from "react-icons/fa";

function KPICards({
  totalProducts,
  avgProfit,
  totalInventory,
  totalRevenue,
}) {
  const cards = [
    {
      title: "Products",
      value: totalProducts,
      color: "bg-blue-100 text-blue-700",
      icon: <FaBox />,
    },
    {
      title: "Avg Profit",
      value: `${avgProfit}%`,
      color: "bg-green-100 text-green-700",
      icon: <FaChartLine />,
    },
    {
      title: "Inventory",
      value: totalInventory,
      color: "bg-purple-100 text-purple-700",
      icon: <FaWarehouse />,
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      color: "bg-orange-100 text-orange-700",
      icon: <FaDollarSign />,
    },
    {
      title: "AI Confidence",
      value: "96%",
      color: "bg-cyan-100 text-cyan-700",
      icon: <FaRobot />,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-6"
        >
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${card.color}`}
          >
            {card.icon}
          </div>

          <p className="mt-5 text-slate-500 text-sm">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            {card.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}

export default KPICards;