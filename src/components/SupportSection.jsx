import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <section
      id="support"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-50 to-cyan-100"
    >
      <motion.h2
        className="text-5xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        24/7 Customer Support
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        We’re here to help you — anytime, anywhere.  
        Get instant help from our AI-powered chat support or speak directly with our experts.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Live Chat</h3>
          <p className="text-gray-600">
            Connect instantly with our support team to solve technical or billing queries.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Documentation</h3>
          <p className="text-gray-600">
            Explore detailed guides, tutorials, and API references to get started easily.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Community Forum</h3>
          <p className="text-gray-600">
            Join thousands of developers to discuss, share ideas, and find smart solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
