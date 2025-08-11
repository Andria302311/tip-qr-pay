import { QrCode, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">TipQR</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing the tipping experience with secure, instant QR-based payments. 
              Built with modern banking standards and designed for the future of contactless transactions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@tipqr.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#scanner" className="text-muted-foreground hover:text-foreground transition-smooth">QR Scanner</a></li>
              <li><a href="#merchant" className="text-muted-foreground hover:text-foreground transition-smooth">Merchant Dashboard</a></li>
              <li><a href="#payments" className="text-muted-foreground hover:text-foreground transition-smooth">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">API Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TipQR. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Powered by modern banking APIs</span>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-success rounded flex items-center justify-center">
                <span className="text-xs text-white font-bold">✓</span>
              </div>
              <span className="text-xs text-muted-foreground">PCI DSS Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};