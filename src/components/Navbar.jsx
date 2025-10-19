import { useState } from "react";
import logo from "../assets/logo.png"; // তোমার লোগো ফাইল

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Logo click handler → scroll to top + reload
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
    window.location.href = "/"; // page reload (acts like main URL reload)
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* ✅ Only Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Unified IT Logo"
            onClick={handleLogoClick} // 👈 click করলে reload হবে
            className="h-10 w-auto object-contain cursor-pointer transition-transform hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#explore" className="hover:text-blue-600 transition">Explore</a></li>
          <li><a href="#products" className="hover:text-blue-600 transition">Products</a></li>
          <li><a href="#solutions" className="hover:text-blue-600 transition">Solutions</a></li>
          <li><a href="#pricing" className="hover:text-blue-600 transition">Pricing</a></li>
          <li><a href="#support" className="hover:text-blue-600 transition">Support</a></li>
        </ul>

        {/* Get Started button */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col text-center py-4 space-y-3 text-gray-700">
            <li><a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a></li>
            <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
            <li><a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a></li>
            <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
            <li><a href="#support" onClick={() => setMenuOpen(false)}>Support</a></li>
            <li>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
