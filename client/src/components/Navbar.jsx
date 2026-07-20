import { FaBell, FaUserCircle, FaRocket } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar({ user, isAuthenticated, onLogout }) {
  const location = useLocation();
  const isPricing = location.pathname === "/pricing";

  return (
    <nav className="border-b border-slate-200/70 bg-white/80 px-4 py-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-blue-600 p-2 text-white">
              <FaRocket className="text-sm" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-slate-900">RetailIQ AI</h1>
              <p className="text-sm text-slate-500">Amazon-style pricing intelligence for modern sellers</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {isAuthenticated && (
            <div className="hidden items-center gap-4 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 sm:flex">
              <Link to="/" className={`transition ${location.pathname === "/" ? "text-blue-600" : "hover:text-slate-900"}`}>
                Dashboard
              </Link>
              <Link to="/pricing" className={`transition ${isPricing ? "text-blue-600" : "hover:text-slate-900"}`}>
                Smart Pricing
              </Link>
            </div>
          )}

          {isAuthenticated && (
            <button className="relative rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600">
              <FaBell className="text-lg" />
              <span className="absolute -right-1 -top-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                3
              </span>
            </button>
          )}

          {isAuthenticated ? (
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              <FaUserCircle className="text-2xl text-blue-500" />
              <div>
                <p className="text-sm font-semibold text-slate-800">{user?.name || "Seller"}</p>
                <p className="text-xs text-slate-500">Signed in</p>
              </div>
              <button onClick={onLogout} className="ml-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;