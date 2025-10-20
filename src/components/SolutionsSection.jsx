import { motion } from "framer-motion";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Intelligent Cloud Solutions",
      desc: "Unlock the power of automation and analytics through our AI-driven cloud infrastructure designed for high efficiency.",
      icon: "☁️",
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Adaptive AI Insights",
      desc: "Leverage real-time learning models that adapt with your data — enabling faster decision-making and predictive intelligence.",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Secure & Scalable Ecosystem",
      desc: "Experience enterprise-grade encryption, global compliance, and rapid scalability built into every layer of Unified IT.",
      icon: "🔒",
      color: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <section
      id="solutions"
      className="relative min-h-screen flex flex-col justify-center items-center py-28 bg-gradient-to-br from-indigo-50 via-blue-50 to-white overflow-hidden"
    >
      {/* Background glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h2
        className="text-5xl font-bold text-center text-indigo-700 mb-8 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Smart Solutions for the Future
      </motion.h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto z-10">
        Unified IT combines AI, data, and secure infrastructure to create a
        unified digital ecosystem — built for tomorrow’s enterprises.
      </p>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {solutions.map((s, i) => (
          <SolutionCard key={i} solution={s} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}

/* 🔮 Single Solution Card */
function SolutionCard({ solution, delay }) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl shadow-2xl bg-white/30 backdrop-blur-xl border border-white/40 text-center overflow-hidden`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.color} opacity-0 hover:opacity-20 blur-2xl transition duration-500`}
      />

      {/* Icon pulse animation */}
      <motion.div
        className="text-6xl mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {solution.icon}
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
        {solution.title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{solution.desc}</p>
    </motion.div>
  );
}
