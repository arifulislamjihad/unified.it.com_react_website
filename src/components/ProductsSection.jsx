import { motion } from "framer-motion";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-50 to-pink-50"
    >
      <motion.h2
        className="text-5xl font-bold text-purple-700 mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Smart Cloud Products
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Leverage AI-driven analytics, machine learning pipelines, and
        cross-platform integrations for your business growth.
      </motion.p>
    </section>
  );
}
