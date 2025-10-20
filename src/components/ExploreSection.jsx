import { motion } from "framer-motion";
import { useState } from "react";

export default function ExploreSection() {
  const features = [
    {
      title: "AI-Powered Systems",
      desc: "Next-gen automation using neural networks and edge computing.",
      icon: "🤖",
    },
    {
      title: "Global Infrastructure",
      desc: "Deploy instantly across 60+ regions with lightning-fast latency.",
      icon: "🌍",
    },
    {
      title: "Seamless Integration",
      desc: "Connect APIs and pipelines effortlessly with enterprise-grade security.",
      icon: "🔗",
    },
  ];

  return (
    <section
      id="explore"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 bg-gradient-to-b from-white via-indigo-50 to-blue-100 overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <motion.h2
        className="text-5xl font-bold text-center text-indigo-700 mb-8 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Explore Infinite Possibilities
      </motion.h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto z-10">
        Discover how Unified IT transforms cloud computing with smart, secure,
        and scalable AI-driven solutions.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {features.map((f, i) => (
          <TiltCard key={i} feature={f} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}

/* 🌀 Tilt Card Component */
function TiltCard({ feature, delay }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="relative bg-white/60 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/50 p-8 text-center cursor-pointer select-none transition-transform duration-300"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
        setRotate({ x, y });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-0 hover:opacity-30 blur-2xl transition-opacity duration-500"
        whileHover={{ opacity: 0.4 }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-5xl mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          {feature.icon}
        </motion.div>
        <h3 className="text-2xl font-semibold text-blue-800 mb-3">
          {feature.title}
        </h3>
        <p className="text-gray-700">{feature.desc}</p>
      </div>
    </motion.div>
  );
}
