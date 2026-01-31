import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <Preloader />
      <BackToTop />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollRevealInit />
    </>
  );
}
