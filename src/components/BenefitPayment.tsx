import { useState } from "react";
import { CreditCard, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface BenefitPaymentProps {
  amount: string;
  description: string;
  onSuccess?: () => void;
}

export const BenefitPayment = ({ amount, description, onSuccess }: BenefitPaymentProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setLoading(true);
    
    // Simulate payment processing
    // In production, integrate with Benefit Pay API
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully via Benefit Pay.",
      });
      onSuccess?.();
    }, 2000);
  };

  return (
    <div className="bg-card p-6 rounded-xl border-2 space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
          <CreditCard className="h-6 w-6 text-secondary" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Secure Payment</h3>
          <p className="text-sm text-muted-foreground">Powered by Benefit Pay</p>
        </div>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground">Amount</span>
          <span className="text-2xl font-bold">{amount} BHD</span>
        </div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium mb-2 block">Card Number</label>
          <Input placeholder="1234 5678 9012 3456" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium mb-2 block">Expiry</label>
            <Input placeholder="MM/YY" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">CVV</label>
            <Input placeholder="123" type="password" maxLength={3} />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm text-muted-foreground">
        <Shield className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
        <p>
          Your payment is secured with 256-bit SSL encryption through Benefit Pay, 
          Bahrain's trusted payment gateway.
        </p>
      </div>

      <Button 
        onClick={handlePayment}
        disabled={loading}
        size="lg" 
        className="w-full gradient-primary hover:opacity-90"
      >
        {loading ? (
          "Processing..."
        ) : (
          <>
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Pay Securely with Benefit
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-4 pt-4 border-t">
        <div className="text-xs text-muted-foreground">Accepted payment methods:</div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-muted rounded text-xs font-medium">Benefit</div>
          <div className="px-3 py-1 bg-muted rounded text-xs font-medium">Visa</div>
          <div className="px-3 py-1 bg-muted rounded text-xs font-medium">Mastercard</div>
        </div>
      </div>
    </div>
  );
};
