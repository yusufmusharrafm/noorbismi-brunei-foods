import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Brunei's Trusted Importer of
          <span className="block text-secondary"> Quality Foods</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium FMCG products from India - bringing you the finest biscuits, spices, pulses, and dairy products
        </p>
        
        <Button 
          variant="hero" 
          size="lg" 
          onClick={scrollToProducts}
          className="transform hover:scale-105 transition-all duration-300"
        >
          Explore Products
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;