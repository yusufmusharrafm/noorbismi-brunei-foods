import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import BrandsSection from "@/components/BrandsSection";
import HalalSection from "@/components/HalalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* About Us Section */}
      <div id="about">
        <AboutSection />
      </div>
      
      {/* Product Categories Section */}
      <div id="products">
        <ProductCategories />
      </div>
      
      {/* Brands We Import Section */}
      <BrandsSection />
      
      {/* Halal Certification Section */}
      <HalalSection />
      
      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
