import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import ProductsSection from "./components/ProductsSection";
import SolutionsSection from "./components/SolutionsSection";
import PricingSection from "./components/PricingSection";
import SupportSection from "./components/SupportSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <ProductsSection />
      <SolutionsSection />
      <PricingSection />
      <SupportSection />
      <CTASection />
      <Footer />
    </>
  );
}
