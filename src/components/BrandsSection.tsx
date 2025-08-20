const BrandsSection = () => {
  const brands = [
    { name: "Parle", description: "India's favorite biscuit brand" },
    { name: "GRB", description: "Premium ghee and dairy products" },
    { name: "Nandini", description: "Quality milk and dairy solutions" },
    { name: "Adani Wilmar", description: "Leading edible oils manufacturer" }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Trusted Brands We Import
          </h2>
          <p className="font-body text-xl text-foreground/70 max-w-2xl mx-auto">
            Partnering with India's most respected food manufacturers to bring you quality products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg text-center border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">
                {brand.name.charAt(0)}
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                {brand.name}
              </h3>
              <p className="font-body text-foreground/70 text-sm">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-foreground/60 italic">
            * Brand logos and partnerships subject to availability and licensing agreements
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;