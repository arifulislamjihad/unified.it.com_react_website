import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      type: "spring",
      stiffness: 70,
      damping: 12,
      mass: 0.9,
    },
  }),
};

export default function ExploreSection() {
  const features = [
    {
      title: "AI-Powered Systems",
      desc: "Next-gen automation using neural networks and edge computing for real-time insights.",
    },
    {
      title: "Global Infrastructure",
      desc: "Deploy instantly across 60+ regions with lightning-fast, reliable performance and uptime.",
    },
    {
      title: "Seamless Integration",
      desc: "Connect APIs and data pipelines effortlessly with zero downtime and enterprise-grade security.",
    },
  ];

  return (
    <section
      id="explore"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-24 text-center overflow-hidden"
    >
      {/* Floating gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-blue-50 to-purple-200 blur-3xl opacity-60"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.h2
        className="text-5xl font-extrabold text-indigo-700 mb-8 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1], // easeOutExpo type
        }}
      >
        Explore Infinite Possibilities
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-16 max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover how Unified IT transforms cloud computing with intelligent, secure, and scalable technologies.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10 perspective-1000">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.05,
              rotateX: 4,
              rotateY: -4,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className="p-10 bg-white/60 backdrop-blur-2xl shadow-2xl rounded-2xl border border-white/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-blue-300/50"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {f.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
