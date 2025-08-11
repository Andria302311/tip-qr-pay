import { Card } from "@/components/ui/card";
import { Shield, Zap, CheckCircle, Globe } from "lucide-react";

export const PaymentFlow = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Payments processed in under 5 seconds with real-time confirmation",
      color: "bg-gradient-primary"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "PCI DSS compliant with end-to-end encryption and fraud detection",
      color: "bg-success"
    },
    {
      icon: CheckCircle,
      title: "Open Banking Compatible",
      description: "Supports PSD2 payment initiation and secure bank account access",
      color: "bg-accent"
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Process payments in multiple currencies with automatic conversion",
      color: "bg-gradient-primary"
    }
  ];

  const steps = [
    { step: "1", title: "Scan QR Code", description: "Customer scans merchant's QR code" },
    { step: "2", title: "Enter Amount", description: "Input desired tip amount" },
    { step: "3", title: "Authenticate", description: "Secure bank authentication" },
    { step: "4", title: "Payment Complete", description: "Instant transfer to merchant" }
  ];

  return (
    <section id="payments" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and fast payment processing with modern banking standards
          </p>
        </div>

        {/* Payment Flow Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">{step.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border transform -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Security & Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-button transition-smooth">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Technical Details */}
        <Card className="mt-12 p-8 bg-gradient-card border-0 shadow-card">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Excellence</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-2">EMVCo QR Standard</h4>
              <p className="text-sm text-muted-foreground">
                Industry-standard QR code format ensuring compatibility across all payment systems
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">ISO 20022 Messaging</h4>
              <p className="text-sm text-muted-foreground">
                Modern financial messaging standard for seamless bank integration
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">99.9% Uptime</h4>
              <p className="text-sm text-muted-foreground">
                Highly available infrastructure with automatic scaling and failover
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};