import { Button } from "@/components/ui/button";
import { Shield, Search, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-motorcycle.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Trusted by 10,000+ riders</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Buy & Sell with
              <span className="text-accent block">Complete Trust</span>
            </h1>
            
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              The only marketplace with verifiable maintenance history. Every bike comes with 
              timestamped "Proof of Care" records that you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="accent" size="lg" className="font-semibold">
                <Search className="h-5 w-5" />
                Browse Motorcycles
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <TrendingUp className="h-5 w-5" />
                List Your Bike
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Verified History</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">15K+</div>
                <div className="text-sm text-primary-foreground/80">Happy Buyers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">$2.4M+</div>
                <div className="text-sm text-primary-foreground/80">Transactions</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl"></div>
            <img
              src={heroImage}
              alt="Premium motorcycle in garage"
              className="w-full h-auto rounded-2xl shadow-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;