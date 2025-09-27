import Header from "@/components/layout/Header";
import HeroSection from "@/components/marketplace/HeroSection";
import ListingsGrid from "@/components/marketplace/ListingsGrid";
import TrustSection from "@/components/marketplace/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ListingsGrid />
        <TrustSection />
      </main>
    </div>
  );
};

export default Index;
