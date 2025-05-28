import { motion } from "framer-motion"

const projects = [
  {
    title: "Eco Scope 🌿 – Environmental Impact App",
    description:
      "Assesses environmental impact with data-driven insights for sustainability. Built with React.",
    link: "https://github.com/Surendhiran-46/Code-Catalysts",
  },
  {
    title: "FreshCart 🛒 – Grocery Shopping App",
    description:
      "React + MUI-based modern grocery app. Browse, search, and simulate checkout experience.",
    link: "https://github.com/Surendhiran249/React-Course",
  },
{
    title: "Cognify 🧠 (Ongoing)",
    description:
      "AI platform that tracks your knowledge growth like a brain map using NLP, embeddings & graphs.",
    link: "https://github.com/Surendhiran-46/Cognify-Knowledge-Tracker",
  },
  {
    title: "Electricity Peak Demand Prediction Using AI ⚡",
    description:
      "Random Forest + React app to predict peak electricity demand and enhance grid stability.",
    link: "#",
  },
  
  {
    title: "CollegeTips Gallery 📷",
    description:
      "A React-based photo gallery created for CollegeTips.in as part of an internship assignment.",
    link: "https://github.com/Surendhiran-46/collegetips-gallery",
  },
  {
    title: "AI Chatbot 🤖 (React + LM Studio)",
    description:
      "Dynamic, context-aware chatbot using React and LM Studio. Human-like, interactive conversations.",
    link: "#",
  },
  {
    title: "OpenCV Projects 📸",
    description:
      "Face detection, emotion recognition, and YOLOv8 object detection using OpenCV.",
    link: "#",
  },
]


export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">🧩 Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-left flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  🔗 View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
