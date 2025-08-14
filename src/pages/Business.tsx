import { Navigation } from "@/components/Navigation";
import { MerchantDashboard } from "@/components/MerchantDashboard";
import { Footer } from "@/components/Footer";

const Business = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
              Business
              <span className="font-medium">
                {" "}Dashboard
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Manage your QR codes, track tips, and grow your business with our merchant tools.
            </p>
          </div>
        </div>
        <MerchantDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Business;