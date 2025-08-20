import halalLogo from "@/assets/halal-logo.png";

const HalalSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Halal Certified & Compliant
            </h2>
            <p className="font-body text-xl mb-6 leading-relaxed opacity-90">
              All our products are halal-certified and listed under the Ministry of Religious Affairs Brunei's approved food premises.
            </p>
            <p className="font-body text-lg mb-8 leading-relaxed opacity-80">
              We ensure that every product we import meets the strict halal standards required by Brunei's religious authorities, giving you complete peace of mind with every purchase.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="font-body text-lg">Ministry of Religious Affairs Approved</span>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="font-body text-lg">100% Halal Certified Products</span>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="font-body text-lg">Strict Quality Control Standards</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src={halalLogo} 
                alt="Halal Certification Logo"
                className="w-32 h-32 mx-auto mb-6 filter brightness-110"
              />
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Certified Halal
              </h3>
              <p className="font-body opacity-80">
                Trusted by the Muslim community across Brunei
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalalSection;