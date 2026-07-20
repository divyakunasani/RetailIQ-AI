import {
  FaBoxOpen,
  FaRupeeSign,
  FaChartLine,
  FaExclamationTriangle
} from "react-icons/fa";

function DashboardCards({
  products,
  revenue,
  averageProfit,
  lowStock
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-8">

      {/* Total Products */}
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Total Products
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {products}
            </h1>

          </div>

          <div className="bg-blue-100 p-4 rounded-full">

            <FaBoxOpen
              className="text-blue-600 text-3xl"
            />

          </div>

        </div>

      </div>

      {/* Revenue */}

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Total Revenue
            </p>

            <h1 className="text-4xl font-bold mt-2">
              ₹{revenue}
            </h1>

          </div>

          <div className="bg-green-100 p-4 rounded-full">

            <FaRupeeSign
              className="text-green-600 text-3xl"
            />

          </div>

        </div>

      </div>

      {/* Profit */}

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Average Profit
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {averageProfit}%
            </h1>

          </div>

          <div className="bg-purple-100 p-4 rounded-full">

            <FaChartLine
              className="text-purple-600 text-3xl"
            />

          </div>

        </div>

      </div>

      {/* Low Stock */}

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500">
              Low Stock
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {lowStock}
            </h1>

          </div>

          <div className="bg-red-100 p-4 rounded-full">

            <FaExclamationTriangle
              className="text-red-600 text-3xl"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCards;