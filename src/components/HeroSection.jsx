import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png"; // তোমার নিজের hero image

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-between items-center px-8 md:px-20 pt-28 md:pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 overflow-hidden"
    >
      {/* 🌈 Background subtle animation blob */}
      <motion.div
        className="absolute top-0 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Left Content */}
      <motion.div
        className="z-10 max-w-lg space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-sm text-blue-600 tracking-wider">
          Unified IT — Limitless Innovation
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Empower Your <span className="text-blue-600">Cloud</span> Journey
          <br /> with AI Intelligence
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Build, scale, and innovate with Unified IT’s secure, AI-driven cloud
          infrastructure. Experience seamless integration and unmatched
          performance across your enterprise.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Explore AI Cloud
          </motion.button>
        </div>
      </motion.div>

      {/* 🖼️ Right Hero Image */}
      <motion.img
        src={heroImage}
        alt="Developer working on AI Cloud"
        className="max-w-md md:max-w-lg mt-12 md:mt-0 drop-shadow-2xl rounded-2xl z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        animate={{
          y: [0, -10, 0],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
}
