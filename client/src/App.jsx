import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PricingForm from "./components/PricingForm";
import AuthPage from "./components/AuthPage";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("retailiqUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("retailiqToken") || "");

  useEffect(() => {
    if (!token) {
      setUser(null);
    }
  }, [token]);

  const handleAuthSuccess = (authUser) => {
    setUser(authUser);
    setToken(localStorage.getItem("retailiqToken") || "");
  };

  const handleLogout = () => {
    localStorage.removeItem("retailiqToken");
    localStorage.removeItem("retailiqUser");
    setUser(null);
    setToken("");
  };

  const isAuthenticated = Boolean(token);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)]">
        <Navbar user={user} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/auth" element={isAuthenticated ? <Navigate to="/" replace /> : <AuthPage onAuthSuccess={handleAuthSuccess} />} />
            <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" replace />} />
            <Route path="/pricing" element={isAuthenticated ? <PricingForm /> : <Navigate to="/auth" replace />} />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/auth"} replace />} />
          </Routes>
        </main>
      </div>

      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </BrowserRouter>
  );
}

export default App;