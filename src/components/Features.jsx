import { Lightbulb, Rocket, Layers } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Rocket className="w-10 h-10 text-blue-600" />,
    title: "Build with Confidence",
    desc: "Develop reliable solutions faster with built-in security, scalability, and AI integration.",
  },
  {
    id: 2,
    icon: <Lightbulb className="w-10 h-10 text-purple-600" />,
    title: "Innovate Faster",
    desc: "Experiment freely and scale globally with cloud services designed for speed and agility.",
  },
  {
    id: 3,
    icon: <Layers className="w-10 h-10 text-orange-500" />,
    title: "Scale Seamlessly",
    desc: "Grow from startup to enterprise without changing your infrastructure foundation.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Empower Your Cloud Journey
      </h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
