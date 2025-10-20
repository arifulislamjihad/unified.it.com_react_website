import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SupportSection() {
  const [showBubble, setShowBubble] = useState(false);

  // Chat bubble animation trigger
  useEffect(() => {
    const timer = setInterval(() => {
      setShowBubble((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const supports = [
    {
      title: "24/7 Live Support",
      desc: "Our global support engineers are always available to assist you in real time — day or night.",
      icon: "💬",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "AI Chat Assistance",
      desc: "Experience our AI-powered assistant for instant troubleshooting and smart solutions.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Global Community",
      desc: "Join thousands of developers & experts in our Unified IT community forum worldwide.",
      icon: "🌐",
      color: "from-green-400 to-emerald-600",
    },
  ];

  return (
    <section
      id="support"
      className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-white py-24 overflow-hidden flex flex-col items-center"
    >
      {/* Animated glowing background */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-3xl rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-purple-500 opacity-20 blur-3xl rounded-full"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h2
        className="text-5xl font-bold text-indigo-700 mb-6 z-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Always Here to Support You
      </motion.h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto z-10">
        Unified IT ensures that every user — developer or enterprise — gets
        instant help and reliable customer support worldwide.
      </p>

      {/* Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {supports.map((s, i) => (
          <motion.div
            key={i}
            className="relative p-8 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl text-center overflow-hidden transition-transform hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 hover:opacity-15 blur-2xl rounded-2xl transition duration-500`}
            />

            {/* Floating icon */}
            <motion.div
              className="text-6xl mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {s.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold text-indigo-700 mb-3 z-10 relative">
              {s.title}
            </h3>
            <p className="text-gray-700 leading-relaxed z-10 relative">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating Chat Bubble */}
      <motion.div
        className="fixed bottom-8 right-8 flex flex-col items-end z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {showBubble && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white shadow-xl p-4 rounded-xl text-sm text-gray-700 border border-gray-200 mb-2"
          >
            👋 Need help? Chat with us now!
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          💬
        </motion.button>
      </motion.div>
    </section>
  );
}
