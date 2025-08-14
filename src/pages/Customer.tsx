import { Navigation } from "@/components/Navigation";
import { QRScanner } from "@/components/QRScanner";
import { PaymentFlow } from "@/components/PaymentFlow";
import { Footer } from "@/components/Footer";

const Customer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
              Simple tip
              <span className="font-medium">
                {" "}payments
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Scan. Tip. Done. The simplest way to leave a tip using your phone.
            </p>
          </div>
        </div>
        <QRScanner />
        <PaymentFlow />
      </main>
      <Footer />
    </div>
  );
};

export default Customer;