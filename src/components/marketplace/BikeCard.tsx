import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Shield, MapPin, Calendar, Gauge } from "lucide-react";

interface BikeCardProps {
  bike: {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    location: string;
    image: string;
    trustScore: number;
    maintenanceRecords: number;
    lastService: string;
  };
}

const BikeCard = ({ bike }: BikeCardProps) => {
  const getTrustBadge = (score: number) => {
    if (score >= 90) return { label: "Verified+", variant: "success" as const };
    if (score >= 75) return { label: "Verified", variant: "success" as const };
    if (score >= 60) return { label: "Good", variant: "warning" as const };
    return { label: "Basic", variant: "secondary" as const };
  };

  const trustBadge = getTrustBadge(bike.trustScore);

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer overflow-hidden border-border">
      <div className="relative overflow-hidden">
        <img
          src={bike.image}
          alt={`${bike.year} ${bike.make} ${bike.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={trustBadge.variant} className="font-medium">
            <Shield className="h-3 w-3 mr-1" />
            {trustBadge.label}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {bike.trustScore}% Trust
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-foreground">
            {bike.year} {bike.make} {bike.model}
          </h3>
          <p className="text-2xl font-bold text-primary">
            ${bike.price.toLocaleString()}
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Gauge className="h-4 w-4 mr-2" />
            <span>{bike.mileage.toLocaleString()} miles</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{bike.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last service: {bike.lastService}</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <strong>{bike.maintenanceRecords}</strong> verified maintenance records
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <Button className="w-full" variant="default">
            View Details
          </Button>
          <Button className="w-full" variant="outline" size="sm">
            View Maintenance History
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BikeCard;