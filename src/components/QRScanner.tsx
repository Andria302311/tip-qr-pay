import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Scan, DollarSign, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MerchantInfo {
  name: string;
  id: string;
  account: string;
  currency: string;
}

export const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [merchantInfo, setMerchantInfo] = useState<MerchantInfo | null>(null);
  const [tipAmount, setTipAmount] = useState("");
  const { toast } = useToast();

  const simulateQRScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setMerchantInfo({
        name: "Café Central",
        id: "merch_12345",
        account: "GE***1234",
        currency: "GEL"
      });
      toast({
        title: "QR Code Scanned",
        description: "Merchant details loaded successfully",
      });
    }, 2000);
  };

  const handlePayment = () => {
    const normalized = tipAmount.replace(",", ".").trim();
    const amount = Number(normalized);
    if (!normalized || Number.isNaN(amount) || !Number.isFinite(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid tip amount",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Payment Initiated",
      description: `Tip of ${amount.toFixed(2)} ${merchantInfo?.currency} sent to ${merchantInfo?.name}`,
    });
    
    // Reset state
    setMerchantInfo(null);
    setTipAmount("");
  };

  return (
    <section id="scanner" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">QR Code Scanner</h2>
          <p className="text-muted-foreground">
            Scan a merchant's QR code to start sending a tip
          </p>
        </div>

        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          {!merchantInfo ? (
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-muted/50">
                {isScanning ? (
                  <div className="animate-pulse">
                    <Scan className="w-16 h-16 text-primary mb-4 animate-bounce" />
                    <p className="text-muted-foreground">Scanning QR Code...</p>
                  </div>
                ) : (
                  <div>
                    <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Point camera at QR code</p>
                  </div>
                )}
              </div>
              
              <Button 
                variant="scan" 
                size="lg" 
                onClick={simulateQRScan}
                disabled={isScanning}
                className="w-full"
              >
                {isScanning ? "Scanning..." : "Start QR Scan"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Merchant Info */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{merchantInfo.name}</h3>
                    <p className="text-sm text-muted-foreground">ID: {merchantInfo.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Account: {merchantInfo.account}</span>
                </div>
              </div>

              {/* Tip Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="tipAmount">Tip Amount ({merchantInfo.currency})</Label>
                <Input
                  id="tipAmount"
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={tipAmount}
                  onChange={(e) => setTipAmount(e.target.value)}
                  className="text-center text-lg font-semibold"
                />
              </div>

              {/* Payment Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setMerchantInfo(null);
                    setTipAmount("");
                  }}
                >
                  Cancel
                </Button>
                <Button variant="success" onClick={handlePayment}>
                  Send Tip
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};