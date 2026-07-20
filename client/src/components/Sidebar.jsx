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

    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 shadow-xl">


      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">

        <FaStore className="text-3xl text-blue-400" />

        <h2 className="text-2xl font-bold text-blue-400">
          RetailIQ
        </h2>

      </div>



      {/* Menu */}
      <nav className="space-y-3">

        {
          menuItems.map((item, index) => (

            <div
              key={index}
              className="
              flex items-center gap-4 
              p-3 rounded-lg 
              cursor-pointer 
              hover:bg-slate-800 
              hover:text-blue-400
              transition duration-300
              "
            >

              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>

            </div>

          ))
        }

      </nav>


      {/* Bottom AI Card */}
      <div className="mt-12 bg-slate-800 p-4 rounded-xl">

        <p className="text-sm text-slate-400">
          AI Assistant
        </p>

        <p className="text-blue-400 font-semibold">
          Smart Pricing Active
        </p>

      </div>


    </aside>

  );

}


export default Sidebar;