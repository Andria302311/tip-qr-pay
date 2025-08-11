import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Download, Eye, TrendingUp, DollarSign, Users } from "lucide-react";
import merchantDashboardImage from "@/assets/merchant-dashboard.jpg";

export const MerchantDashboard = () => {
  const [qrGenerated, setQrGenerated] = useState(false);
  const [merchantName, setMerchantName] = useState("");

  const generateQR = () => {
    if (!merchantName.trim()) return;
    setQrGenerated(true);
  };

  const mockStats = [
    { label: "Today's Tips", value: "₾245.50", icon: DollarSign, trend: "+15%" },
    { label: "Total Customers", value: "142", icon: Users, trend: "+8%" },
    { label: "Average Tip", value: "₾8.20", icon: TrendingUp, trend: "+12%" },
  ];

  return (
    <section id="merchant" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Merchant Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Generate QR codes, track tips, and manage your payment settings all in one place
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* QR Code Generation */}
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Generate QR Code</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="merchantName">Business Name</Label>
                <Input
                  id="merchantName"
                  placeholder="Enter your business name"
                  value={merchantName}
                  onChange={(e) => setMerchantName(e.target.value)}
                />
              </div>

              {!qrGenerated ? (
                <Button onClick={generateQR} className="w-full" disabled={!merchantName.trim()}>
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
              ) : (
                <div className="space-y-4">
                  {/* Mock QR Code */}
                  <div className="w-48 h-48 mx-auto bg-background border-2 border-border rounded-lg p-4 flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      QR Code for {merchantName}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Analytics */}
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Analytics Overview</h3>
            
            <div className="space-y-4">
              {mockStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-xl font-semibold">{stat.value}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-success font-medium">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mt-12">
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Full Dashboard Experience</h3>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={merchantDashboardImage} 
                alt="Merchant Dashboard Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 text-center">
              <Button variant="hero">
                Access Full Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};