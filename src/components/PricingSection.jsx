import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-orange-50 to-yellow-50"
    >
      <motion.h2
        className="text-5xl font-bold text-orange-700 mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Flexible Pricing Plans
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Start free, grow anytime. Choose a plan that scales with your success.
      </motion.p>
    </section>
  );
}
