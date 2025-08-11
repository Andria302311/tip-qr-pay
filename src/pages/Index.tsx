import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QRScanner } from "@/components/QRScanner";
import { MerchantDashboard } from "@/components/MerchantDashboard";
import { PaymentFlow } from "@/components/PaymentFlow";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <QRScanner />
        <MerchantDashboard />
        <PaymentFlow />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
