import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-xl text-foreground/70 max-w-2xl mx-auto">
            Ready to stock premium FMCG products? Contact us today for wholesale inquiries and partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Our Location
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  Shop No.12, Block A, Bangunan Haji Awang Besar<br/>
                  Simpang 480, Kampong Kapok, Jalan Muara<br/>
                  BT2328, Brunei Darussalam
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary p-3 rounded-lg">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  WhatsApp
                </h3>
                <p className="font-body text-foreground/70">
                  +6732651687
                </p>
                <p className="font-body text-sm text-foreground/50 mt-1">
                  Available for business inquiries
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-fresh p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Email
                </h3>
                <p className="font-body text-foreground/70">
                  info@noorbismi.com
                </p>
                <p className="font-body text-sm text-foreground/50 mt-1">
                  For general inquiries and product information
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                variant="default" 
                size="lg"
                className="w-full md:w-auto"
              >
                Contact Us Today
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Find Us Here
                </h3>
                <p className="font-body text-foreground/70">
                  Kampong Kapok, Jalan Muara<br/>
                  Brunei Darussalam
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.open('https://maps.google.com/?q=Kampong+Kapok+Jalan+Muara+Brunei', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
