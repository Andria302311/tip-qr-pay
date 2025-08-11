import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Smartphone, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-qr-scanner.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
            Simple tip
            <span className="font-medium">
              {" "}payments
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Scan. Tip. Done. The simplest way to leave a tip using your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Scanning
            </Button>
            <Button variant="outline" size="lg">
              For Merchants
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src={heroImage} 
              alt="QR Code Scanner Interface"
              className="w-full h-auto"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 border border-border shadow-soft">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
              <QrCode className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-3">Scan</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Point your camera at the QR code
            </p>
          </Card>

          <Card className="p-8 border border-border shadow-soft">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-3">Choose Amount</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Select your tip amount
            </p>
          </Card>

          <Card className="p-8 border border-border shadow-soft">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-6">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-3">Pay</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Secure instant payment
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};