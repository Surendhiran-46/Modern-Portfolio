export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-900 dark:text-white text-center">
      <div data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">🎮 Hey, I’m Surendhiran</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
          I’m a gamer with a keyboard, an artist with a vision, and a developer on a mission — to craft interfaces that feel alive,
          smart, and story-driven. I build like I play: bold, strategic, and with style.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="200">
        {/* Card 1 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-500 dark:text-indigo-300">♟️ Strategic Thinker</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Whether it’s solving bugs or chess endgames, I love thinking five steps ahead. Every line of code is a move in a bigger plan.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-500 dark:text-indigo-300">🎨 Visual Creator</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I sketch futuristic worlds, design interfaces with emotion, and dream of holographic UIs that blur lines between code and canvas.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-500 dark:text-indigo-300">🧠 AI + Dev Fusionist</h3>
          <p className="text-gray-600 dark:text-gray-400">
            From LLMs to learning maps, I’m building tools that understand how humans learn — and how machines can help us evolve faster.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition hover:-translate-y-1 hover:shadow-xl duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-500 dark:text-indigo-300">📚 Fiction-Driven Builder</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Inspired by epic stories and game worlds, I build tech that feels like fiction turned real — immersive, interactive, and unforgettable.
          </p>
        </div>
      </div>

      <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
        <p className="italic text-gray-500 dark:text-gray-400">
          "I don't just code features — I create experiences."
        </p>
      </div>
    </section>
  )
}
