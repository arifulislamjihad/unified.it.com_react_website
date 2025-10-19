import { motion } from "framer-motion";

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="min-h-screen bg-gradient-to-tr from-purple-50 via-blue-50 to-cyan-50 py-24 text-center"
    >
      <motion.h2
        className="text-5xl font-bold text-purple-700 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Next-Gen Cloud Solutions
      </motion.h2>
      <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
        Advanced solutions built with AI, automation, and scalable cloud computing infrastructure.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {["AI Insights", "Zero Downtime", "Multi-Cloud Ready"].map((title, i) => (
          <motion.div
            key={title}
            className="w-72 h-72 bg-white/50 rounded-2xl shadow-xl flex flex-col justify-center items-center cursor-pointer hover:rotate-1 hover:scale-105 transition-all duration-300 border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">{title}</h3>
            <p className="text-gray-600 px-4">
              Scalable architecture designed for enterprise-grade performance.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
