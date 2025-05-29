import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Sync dark mode with localStorage & html class
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle theme handler
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mr-2"
        >
          Surendhiran
        </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  location.pathname === path
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-black-700 dark:text-gray-100"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
          {/* Resume Download */}
          <li>
            <a
              href="/SurendhiranM_Updated_Resume.pdf"
              download
              className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Right Controls: Dark Mode + Mobile Button */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-14 h-8 flex items-center px-1 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-300 relative"
          >
            <div
              className={`w-6 h-6 flex items-center justify-center text-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode
                  ? "translate-x-6 bg-indigo-500"
                  : "translate-x-0 bg-yellow-500"
              }`}
            >
              {darkMode ? <FiMoon size={16} /> : <FiSun size={16} />}
            </div>
          </button>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <FiX size={20} className="text-gray-800 dark:text-gray-200" />
            ) : (
              <FiMenu size={20} className="text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>
      <Transition
  show={isMobileMenuOpen}
  enter="transition transform duration-300"
  enterFrom="-translate-y-10 opacity-0"
  enterTo="translate-y-0 opacity-100"
  leave="transition transform duration-200"
  leaveFrom="translate-y-0 opacity-100"
  leaveTo="-translate-y-10 opacity-0"
>
  <ul className="md:hidden backdrop-blur-md bg-white/60 dark:bg-gray-900/80 px-6 py-6 space-y-4 text-center rounded-b-xl shadow-lg">
    {navLinks.map(({ name, path }) => (
      <li key={name}>
        <Link
          to={path}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`block text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
            location.pathname === path
              ? "text-indigo-600 dark:text-indigo-400 font-semibold"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          {name}
        </Link>
      </li>
    ))}
    <li>
      <a
        href="/SurendhiranM_Updated_Resume.pdf"
        download
        className="inline-block mt-2 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Resume
      </a>
    </li>
  </ul>
</Transition>

    </nav>
  );
}
