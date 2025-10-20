import { motion } from "framer-motion";

export default function PricingSection() {
  const tiers = [
    {
      name: "Startup",
      subtitle: "For new businesses exploring the cloud",
      features: [
        "AI-powered deployment tools",
        "Scalable infrastructure",
        "Community support",
      ],
      color: "from-blue-400 to-indigo-500",
      icon: "🚀",
    },
    {
      name: "Growth",
      subtitle: "For teams scaling fast with automation",
      features: [
        "Advanced analytics",
        "24/7 technical support",
        "Global CDN optimization",
      ],
      color: "from-purple-500 to-pink-500",
      icon: "📈",
    },
    {
      name: "Enterprise",
      subtitle: "For organizations needing total control",
      features: [
        "Dedicated account manager",
        "Custom AI integration",
        "Enterprise-grade compliance",
      ],
      color: "from-green-400 to-emerald-600",
      icon: "🏢",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-24 flex flex-col items-center overflow-hidden"
    >
      <motion.h2
        className="text-5xl font-bold text-indigo-700 mb-6 z-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Plans for Every Stage of Growth
      </motion.h2>
      <p className="text-gray-600 text-center mb-16 max-w-2xl z-10">
        From early startups to global enterprises — Unified IT grows with you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 z-10">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="relative p-8 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl text-center hover:-translate-y-2 transition-all"
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 hover:opacity-15 blur-2xl rounded-2xl transition duration-500`}
            />

            <div className="text-6xl mb-4">{tier.icon}</div>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
              {tier.name}
            </h3>
            <p className="text-gray-600 mb-6">{tier.subtitle}</p>

            <ul className="text-gray-700 space-y-2 mb-8">
              {tier.features.map((f, idx) => (
                <li key={idx}>✅ {f}</li>
              ))}
            </ul>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
