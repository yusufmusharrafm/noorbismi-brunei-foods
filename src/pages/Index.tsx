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
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Us Section */}
      <div id="about">
        <AboutSection />
      </div>
      
      {/* Product Categories Section */}
      <ProductCategories />
      
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
