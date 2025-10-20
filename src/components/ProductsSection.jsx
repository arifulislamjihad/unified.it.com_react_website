import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductsSection() {
  const products = [
    {
      title: "Unified Cloud Platform",
      desc: "Deploy, manage, and scale your workloads globally with enterprise-grade performance and zero downtime.",
      icon: "☁️",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "AI Engine",
      desc: "Unlock intelligence with real-time insights, predictive analytics, and adaptive AI pipelines for every business use case.",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Edge Network",
      desc: "Experience ultra-low latency through our 60+ edge regions, designed for modern IoT and real-time AI applications.",
      icon: "⚡",
      gradient: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <section
      id="products"
      className="relative min-h-screen flex flex-col justify-center items-center py-28 bg-gradient-to-br from-indigo-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Background floating lights */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400 to-blue-300 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-300 to-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <motion.h2
        className="text-5xl font-bold text-center text-blue-700 mb-8 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Core Products
      </motion.h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto z-10">
        Unified IT delivers scalable cloud, AI, and edge solutions that power
        tomorrow’s digital transformation — today.
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {products.map((p, i) => (
          <RotatingCard key={i} product={p} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}

/* 🌀 Rotating Product Card */
function RotatingCard({ product, delay }) {
  const [rotate, setRotate] = useState(0);

  return (
    <motion.div
      className={`relative p-8 rounded-2xl shadow-2xl text-center text-white bg-gradient-to-br ${product.gradient} transform-gpu transition-transform duration-500`}
      onMouseEnter={() => setRotate(15)}
      onMouseLeave={() => setRotate(0)}
      style={{
        transform: `rotateY(${rotate}deg)`,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Glowing edges */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-2xl"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        <motion.div
          className="text-6xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
        >
          {product.icon}
        </motion.div>
        <h3 className="text-2xl font-semibold">{product.title}</h3>
        <p className="text-white/90 text-base leading-relaxed">
          {product.desc}
        </p>
      </div>
    </motion.div>
  );
}
