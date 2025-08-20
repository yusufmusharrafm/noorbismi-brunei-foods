import warehouseImage from "@/assets/warehouse.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">
              About Noor Bismi Trading Company
            </h2>
            <p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed">
              Noor Bismi Trading Company is a Brunei-based importer and distributor of high-quality FMCG products from India, specializing in biscuits, spices, pulses, edible oils, and dairy products.
            </p>
            <p className="font-body text-lg text-foreground/80 mb-8 leading-relaxed">
              With years of experience in the food import business, we ensure that all our products meet the highest quality standards and are fully halal-certified for our valued customers across Brunei.
            </p>
            
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">Our Location</h3>
              <p className="font-body text-foreground/70">
                Shop No.12, Block A, Bangunan Haji Awang Besar<br/>
                Simpang 480, Kampong Kapok, Jalan Muara<br/>
                BT2328, Brunei Darussalam
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={warehouseImage} 
              alt="Noor Bismi Trading Company warehouse facility"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;