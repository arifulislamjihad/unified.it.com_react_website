import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-24 text-center text-white"
    >
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6">Ready to Build the Future?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Join thousands of innovators using Unified IT to scale their vision faster than ever.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition">
          Start Free Trial
        </button>
      </motion.div>

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,white,transparent_60%)] animate-pulse" />
    </section>
  );
}
