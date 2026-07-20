import {
  FaHome,
  FaBox,
  FaChartLine,
  FaRobot,
  FaStore
} from "react-icons/fa";

function Sidebar() {

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />
    },
    {
      name: "Products",
      icon: <FaBox />
    },
    {
      name: "Analytics",
      icon: <FaChartLine />
    },
    {
      name: "AI Pricing",
      icon: <FaRobot />
    }
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-950 p-6 shadow-2xl">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
          <FaStore className="text-2xl text-white" />
        </div>

        <h2 className="text-3xl font-extrabold text-white">
          RetailIQ AI
        </h2>

      </div>


      {/* Menu */}
      <nav className="space-y-4">

        {menuItems.map((item, index) => (

          <div
            key={index}
            className="
            flex items-center gap-4
            rounded-xl
            bg-slate-900
            px-4
            py-3
            cursor-pointer
            text-white
            font-bold
            hover:bg-blue-600
            transition
            "
          >

            <span className="text-xl text-blue-400">
              {item.icon}
            </span>

            <span className="text-lg text-white">
              {item.name}
            </span>

          </div>

        ))}

      </nav>


      {/* AI Status Card */}
      <div className="mt-14 rounded-xl bg-blue-900 p-4">

        <p className="text-sm font-bold text-white">
          AI Assistant
        </p>

        <p className="mt-2 font-extrabold text-blue-200">
          Smart Pricing Active 🚀
        </p>

      </div>


    </aside>
  );
}

export default Sidebar;