const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Noor Bismi Trading Company
            </h3>
            <p className="font-body text-white/80 mb-4 leading-relaxed">
              Brunei's trusted importer of quality FMCG products from India. 
              Serving the community with halal-certified foods since our establishment.
            </p>
            <p className="font-body text-white/60 text-sm">
              Licensed food importer & wholesaler
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="font-body text-white/80 hover:text-secondary transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="font-body text-white/80 hover:text-secondary transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="font-body text-white/80 hover:text-secondary transition-colors duration-300 text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="font-body text-white/80 hover:text-secondary transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Information
            </h4>
            <div className="space-y-3">
              <p className="font-body text-white/80 text-sm">
                Shop No.12, Block A<br/>
                Bangunan Haji Awang Besar<br/>
                Kampong Kapok, Jalan Muara<br/>
                BT2328, Brunei
              </p>
              <div className="pt-2">
                <p className="font-body text-white/80 text-sm">
                  WhatsApp: +673-XXXXXXX
                </p>
                <p className="font-body text-white/80 text-sm">
                  Email: info@noorbismi.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-body text-white/60 text-sm">
            © {currentYear} Noor Bismi Trading Company Sdn Bhd – All Rights Reserved.
          </p>
          <p className="font-body text-white/40 text-xs mt-2">
            Halal-certified products | Licensed food importer | Brunei Darussalam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;