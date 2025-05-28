import AnimateOnScroll from "../components/AnimateOnScroll";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 dark:bg-gray-900 dark:text-white">
      <AnimateOnScroll type="fade-right" delay={100}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Yo, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Surendhiran
          </span>{" "}
          👨‍💻
        </h1>
      </AnimateOnScroll>
      <AnimateOnScroll type="fade-left" delay={100}>
        <p className="max-w-xl text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 ">
          FullStack Developer and AI/ML Engineer. Tech Nerd who likes to build
          cool stuffs. I turn ideas into interfaces and caffeine into code ☕💻
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll type="fade-up" delay={200}>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            View Projects
          </Link>
          <a
            href="/SurendhiranM_Updated_Resume.pdf"
            download
            className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-5 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
