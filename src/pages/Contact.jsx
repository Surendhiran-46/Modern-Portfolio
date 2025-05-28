import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const profiles = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={32} />,
    href: "https://www.linkedin.com/in/surendhiran-m/",
    colorFrom: "from-blue-500",
    colorTo: "to-indigo-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={32} />,
    href: "https://github.com/Surendhiran-46",
    colorFrom: "from-gray-700",
    colorTo: "to-black",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={32} />,
    href: "https://leetcode.com/u/Surendhiran46/", // Update if needed
    colorFrom: "from-orange-500",
    colorTo: "to-yellow-500",
  },
    {
    name: "Email",
    icon: <FaEnvelope size={32} />,
    href: "mailto:surendhiran.official@gmail.com",
    colorFrom: "from-pink-500",
    colorTo: "to-purple-500",
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 dark:text-white text-center">
      <h2 className="text-4xl font-bold mb-6">📬 Let’s Connect</h2>
      <p className="text-lg mb-12">
        Don't be shy — reach out through any of the platforms below:
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {profiles.map((profile, idx) => (
          <a
            key={idx}
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            className={`relative group border border-gray-300 dark:border-gray-700 rounded-2xl p-8 flex flex-col items-center transition duration-300 overflow-hidden hover:scale-105 hover:rotate-1`}
          >
            {/* Icon and label */}
            <div className="z-10 flex flex-col items-center gap-2">
              <div className="text-3xl text-indigo-600 dark:text-indigo-400 group-hover:text-white transition duration-300">
                {profile.icon}
              </div>
              <span className="text-lg font-semibold group-hover:text-white transition">
                {profile.name}
              </span>
            </div>

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${profile.colorFrom} ${profile.colorTo} opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-110 transition-all duration-500 ease-in-out rounded-2xl z-0`}
            ></div>
          </a>
        ))}
      </div>
    </section>
  );
}
