import biscuitsImage from "@/assets/biscuits.jpg";
import spicesImage from "@/assets/spices.jpg";
import pulsesImage from "@/assets/pulses.jpg";
import oilsImage from "@/assets/oils.jpg";
import milkImage from "@/assets/milk.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Biscuits & Wafers",
      image: biscuitsImage,
      description: "Premium quality biscuits including Parle-G, cream wafers, and traditional Indian varieties"
    },
    {
      title: "Spices & Masalas", 
      image: spicesImage,
      description: "Authentic spice powders, masala blends, and traditional Indian seasonings"
    },
    {
      title: "Pulses & Flours",
      image: pulsesImage,
      description: "Fresh pulses, lentils, and premium quality flours for all your cooking needs"
    },
    {
      title: "Edible Oils",
      image: oilsImage,
      description: "Pure and refined cooking oils including sunflower, mustard, and specialty oils"
    },
    {
      title: "Dairy / UHT Milk",
      image: milkImage,
      description: "Long-life milk products, Nandini brand dairy, and other premium dairy items"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Our Product Categories
          </h2>
          <p className="font-body text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our wide range of premium FMCG products imported directly from trusted Indian suppliers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;