import BikeCard from "./BikeCard";
import bikeImage1 from "@/assets/bike-sample-1.jpg";
import bikeImage2 from "@/assets/bike-sample-2.jpg";

// Sample data - will be replaced with real data from Supabase
const sampleBikes = [
  {
    id: "1",
    make: "Yamaha",
    model: "YZF-R1",
    year: 2021,
    price: 16500,
    mileage: 8400,
    location: "Seattle, WA",
    image: bikeImage1,
    trustScore: 95,
    maintenanceRecords: 12,
    lastService: "2 weeks ago"
  },
  {
    id: "2",
    make: "Harley-Davidson",
    model: "Street Bob",
    year: 2020,
    price: 14200,
    mileage: 12300,
    location: "Portland, OR",
    image: bikeImage2,
    trustScore: 88,
    maintenanceRecords: 8,
    lastService: "1 month ago"
  },
  {
    id: "3",
    make: "Honda",
    model: "CBR600RR",
    year: 2022,
    price: 12800,
    mileage: 3200,
    location: "Denver, CO",
    image: bikeImage1,
    trustScore: 92,
    maintenanceRecords: 5,
    lastService: "1 week ago"
  },
  {
    id: "4",
    make: "Kawasaki",
    model: "Ninja 650",
    year: 2019,
    price: 7500,
    mileage: 18500,
    location: "Austin, TX",
    image: bikeImage2,
    trustScore: 76,
    maintenanceRecords: 15,
    lastService: "3 weeks ago"
  },
  {
    id: "5",
    make: "BMW",
    model: "R1250GS",
    year: 2021,
    price: 18900,
    mileage: 6800,
    location: "San Francisco, CA",
    image: bikeImage1,
    trustScore: 97,
    maintenanceRecords: 9,
    lastService: "5 days ago"
  },
  {
    id: "6",
    make: "Ducati",
    model: "Panigale V2",
    year: 2022,
    price: 15200,
    mileage: 2100,
    location: "Miami, FL",
    image: bikeImage2,
    trustScore: 91,
    maintenanceRecords: 3,
    lastService: "2 weeks ago"
  }
];

const ListingsGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Motorcycles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every bike comes with complete maintenance history and verified "Proof of Care" records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-md font-medium transition-colors">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingsGrid;