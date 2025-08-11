import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Smartphone, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-qr-scanner.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Seamless QR
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Tip Payments
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your service experience with instant, contactless tip payments. 
            Scan, confirm, and send tips directly from your bank account to merchants.
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
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-button transition-smooth">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick QR Scan</h3>
            <p className="text-muted-foreground">
              Simply scan the merchant's QR code with your smartphone camera to initiate payment.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-button transition-smooth">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
            <p className="text-muted-foreground">
              Optimized for mobile devices with an intuitive interface that works on any smartphone.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-button transition-smooth">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-success-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">
              Bank-grade security with PCI DSS compliance and encrypted transactions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};