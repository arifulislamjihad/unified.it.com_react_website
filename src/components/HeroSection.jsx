import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png"; // তোমার hero image

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center px-10 md:px-20 pt-28 md:pt-32 pb-16 bg-gradient-to-tr from-orange-100 via-pink-100 to-purple-200 overflow-hidden">
      
      {/* Animated gradient glow background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-purple-200/30 via-blue-200/20 to-pink-200/20 blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Text section */}
      <motion.div
        className="max-w-lg space-y-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase text-sm text-gray-600 tracking-wider">
          UITL. LIMITLESS INNOVATION.
        </p>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Trust your tools.<br />
          Transform your future.
        </h1>
        <p className="text-gray-700">
          With built-in security and governance, UITL helps you build AI-powered
          solutions that scale and inspire. Pay as you go or try UITL free for up to 30 days.
        </p>

        <div className="flex gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-700"
          >
            Get started with UITL
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 px-5 py-2 rounded-md hover:bg-gray-100"
          >
            Explore UITL AI Foundry
          </motion.button>
        </div>
      </motion.div>

      {/* Floating image */}
      <motion.img
        src={heroImage}
        alt="Developer working"
        className="max-w-md rounded-2xl shadow-xl mt-10 md:mt-0 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
      />
    </section>
  );
}
