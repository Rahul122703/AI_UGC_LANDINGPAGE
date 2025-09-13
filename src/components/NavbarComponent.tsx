import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";

const NavbarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] rounded-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo / Brand */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          AI UGC Agency
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Services", link: "/services" },
            { name: "Pricing", link: "/pricing" },
            { name: "Onboarding", link: "/onboarding" },
            { name: "Why Choose Us", link: "/why-us" },
            { name: "Contact", link: "/contact" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="relative group text-gray-900 dark:text-gray-100 font-medium transition">
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all"></span>
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            to="/trial"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all">
            Start Trial ₹4,000
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-3 p-2 rounded-full bg-white/40 dark:bg-gray-800/60 backdrop-blur-sm hover:scale-110 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-white/40 dark:bg-gray-800/60 backdrop-blur-sm hover:scale-110 transition"
          onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 px-4 bg-white/50 dark:bg-gray-900/70 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/40">
          {[
            { name: "Services", link: "/services" },
            { name: "Pricing", link: "/pricing" },
            { name: "Onboarding", link: "/onboarding" },
            { name: "Why Choose Us", link: "/why-us" },
            { name: "Contact", link: "/contact" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 transition">
              {item.name}
            </Link>
          ))}

          <Link
            to="/trial"
            onClick={() => setOpen(false)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all">
            Start Trial ₹4,000
          </Link>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/40 dark:bg-gray-800/60 backdrop-blur-sm hover:scale-110 transition">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
