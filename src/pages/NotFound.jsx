import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 dark:text-white px-4">
      {/* Animated Illustration */}
      <img
        src="/404.png"
        alt="Lost in Space"
        className="w-64 mb-6 animate-pop"
      />

      {/* 404 Header */}
      <h1
        className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
      >
        404 😵
      </h1>

    {/* Slogan */}
    <p
        className="text-2xl sm:text-3xl mb-8 max-w-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text drop-shadow-lg"
    >
        Services available only on Earth
    </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition shadow-lg transform hover:scale-105"
      >
        Back to safety 🏠
      </Link>
    </section>
  )
}
