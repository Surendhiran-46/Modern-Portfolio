import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
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
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
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

        {/* Mobile Menu Toggle */}
        {/* For now, keep mobile simple, no hamburger menu to save time */}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
