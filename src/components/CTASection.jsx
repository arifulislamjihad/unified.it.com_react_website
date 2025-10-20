import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-28"
    >
      {/* Background animated glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-indigo-800 mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Build the Future, Together 🌐
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        Empower your business with Unified IT — the platform where innovation meets intelligence.  
        Let’s create limitless opportunities powered by AI and the cloud.
      </motion.p>

      {/* Glowing Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.a
          href="#explore"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(59,130,246,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
        >
          Get Started Now
        </motion.a>

        <motion.a
          href="#support"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(147,51,234,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="border border-indigo-500 text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300"
        >
          Contact Support
        </motion.a>
      </motion.div>

      {/* Floating orbits animation */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          className="w-[400px] h-[400px] border-2 border-blue-400/40 rounded-full absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-[250px] h-[250px] border-2 border-purple-400/30 rounded-full absolute"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
}
