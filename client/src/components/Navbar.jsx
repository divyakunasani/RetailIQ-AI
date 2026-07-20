import { FaBell, FaUserCircle, FaRocket } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar({ user, isAuthenticated, onLogout }) {
  const location = useLocation();
  const isPricing = location.pathname === "/pricing";

  return (
    <nav className="border-b border-slate-200 bg-white px-4 py-4 shadow-md sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-3 text-white shadow">
            <FaRocket className="text-lg" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              RetailIQ AI
            </h1>

            <p className="text-sm font-medium text-slate-600">
              AI-powered smart pricing for modern sellers
            </p>
          </div>
        </div>


        {/* Navigation */}
        <div className="flex items-center gap-4">

          {isAuthenticated && (
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 sm:flex">

              <Link
                to="/"
                className={`rounded-lg px-3 py-2 font-semibold transition ${
                  location.pathname === "/"
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                Dashboard
              </Link>


              <Link
                to="/pricing"
                className={`rounded-lg px-3 py-2 font-semibold transition ${
                  isPricing
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                Smart Pricing
              </Link>

            </div>
          )}


          {/* Notification */}
          {isAuthenticated && (
            <button className="relative rounded-full border border-slate-300 p-3 text-slate-700 hover:border-blue-500 hover:text-blue-600">

              <FaBell className="text-lg" />

              <span className="absolute -right-1 -top-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
                3
              </span>

            </button>
          )}



          {/* User */}
          {isAuthenticated ? (

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2">

              <FaUserCircle className="text-3xl text-blue-600" />

              <div>
                <p className="text-sm font-bold text-slate-900">
                  {user?.name || "Seller"}
                </p>

                <p className="text-xs font-medium text-green-600">
                  Online
                </p>
              </div>


              <button
                onClick={onLogout}
                className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-red-600"
              >
                Logout
              </button>

            </div>

          ) : (

            <Link
              to="/auth"
              className="rounded-full bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Sign in
            </Link>

          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;