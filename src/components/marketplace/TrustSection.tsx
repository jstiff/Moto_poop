import { Card, CardContent } from "@/components/ui/card";
import { Shield, Camera, MapPin, Clock, FileCheck, Users } from "lucide-react";
import verificationIcon from "@/assets/verification-icon.jpg";

const TrustSection = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-accent" />,
      title: "Photo Proof Required",
      description: "Every maintenance record includes timestamped photos of work being performed"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "GPS Verification",
      description: "Location data anchors each service record to prevent tampering"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Immutable Timeline",
      description: "Blockchain-inspired record keeping ensures maintenance history cannot be altered"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-accent" />,
      title: "Complete Documentation",
      description: "Parts receipts, service dates, and odometer readings create a complete picture"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img
              src={verificationIcon}
              alt="Verification"
              className="h-16 w-16 rounded-full"
            />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why MotorVerse is Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've revolutionized motorcycle sales by replacing unreliable odometer readings 
            with verifiable "Proof of Care" maintenance histories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Shield className="h-12 w-12 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">99.7%</div>
              <div className="text-primary-foreground/80">Buyer Satisfaction</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Users className="h-12 w-12 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-primary-foreground/80">Verified Transactions</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <FileCheck className="h-12 w-12 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Maintenance Records</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;