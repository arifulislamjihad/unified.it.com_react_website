// ✅ All Components Import
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import ProductsSection from "./components/ProductsSection";
import SolutionsSection from "./components/SolutionsSection";
import PricingSection from "./components/PricingSection";
import SupportSection from "./components/SupportSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

// ✅ Smooth Scroll Behavior (Optional but recommended)
import { useEffect } from "react";

export default function App() {
  // Scroll behavior smooth করা
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="font-inter text-gray-900 overflow-x-hidden">
      {/* 🧭 Navbar (Fixed Top) */}
      <Navbar />

      {/* 🌤 Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* 🧩 Explore Section */}
      <section id="explore">
        <ExploreSection />
      </section>

      {/* ☁️ Products Section */}
      <section id="products">
        <ProductsSection />
      </section>

      {/* 💠 Solutions Section */}
      <section id="solutions">
        <SolutionsSection />
      </section>

      {/* 💸 Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* 🧰 Support Section */}
      <section id="support">
        <SupportSection />
      </section>

      {/* 🚀 Call To Action */}
      <section id="cta">
        <CTASection />
      </section>

      {/* ⚫ Footer */}
      <Footer />
    </div>
  );
}
