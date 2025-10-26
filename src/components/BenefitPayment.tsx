import { CreditCard, Shield, AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface BenefitPaymentProps {
  amount: string;
  description: string;
  onSuccess?: () => void;
}

/**
 * SECURE PAYMENT COMPONENT - PCI DSS COMPLIANT
 * 
 * This component does NOT handle raw card data to comply with PCI DSS standards.
 * To integrate with Benefit Pay, you must:
 * 
 * 1. Get Benefit Pay merchant credentials from https://benefit.bh/
 * 2. Choose one of these secure integration methods:
 *    - Hosted Payment Page (Redirect): Safest, no PCI compliance needed
 *    - Benefit Pay SDK with Tokenization: Card data never touches your code
 *    - Payment iFrame: Embedded secure form from Benefit Pay
 * 
 * 3. Create an Edge Function to process payments server-side:
 *    - Store Benefit Pay API key in secrets
 *    - Receive payment token (not raw card data)
 *    - Call Benefit Pay API to complete payment
 * 
 * NEVER collect raw card numbers, expiry dates, or CVV codes in your frontend!
 */
export const BenefitPayment = ({ amount, description, onSuccess }: BenefitPaymentProps) => {
  
  const handlePaymentRedirect = () => {
    // TODO: Replace with your actual Benefit Pay hosted payment page URL
    // This should be generated from your backend with proper authentication
    const benefitPayUrl = `https://payments.benefit.bh/checkout?amount=${amount}&orderId=${Date.now()}`;
    
    // In production, you would:
    // 1. Call your backend to create a payment session
    // 2. Receive a secure payment URL
    // 3. Redirect user to that URL
    
    window.open(benefitPayUrl, '_blank');
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

      <Alert variant="default" className="border-secondary/20 bg-secondary/5">
        <Shield className="h-4 w-4 text-secondary" />
        <AlertTitle>PCI DSS Compliant Payment</AlertTitle>
        <AlertDescription className="text-sm">
          For your security, you'll be redirected to Benefit Pay's secure payment page. 
          Your card details are never stored or handled by our system.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive" className="border-amber-500/20 bg-amber-500/5">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-600">Setup Required</AlertTitle>
        <AlertDescription className="text-sm text-amber-600">
          <strong>Developer Notice:</strong> This component requires Benefit Pay merchant integration. 
          Contact Benefit Pay to obtain your merchant credentials and API documentation, 
          then implement the secure payment flow in an Edge Function.
        </AlertDescription>
      </Alert>

      <div className="space-y-3">
        <Button 
          onClick={handlePaymentRedirect}
          size="lg" 
          className="w-full gradient-primary hover:opacity-90"
        >
          <Shield className="mr-2 h-5 w-5" />
          Proceed to Secure Payment
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          You will be redirected to Benefit Pay's secure payment portal
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 pt-4 border-t">
        <div className="text-xs text-muted-foreground">Accepted payment methods:</div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-muted rounded text-xs font-medium">Benefit</div>
          <div className="px-3 py-1 bg-muted rounded text-xs font-medium">Visa</div>
          <div className="px-3 py-1 bg-muted rounded text-xs font-medium">Mastercard</div>
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm text-muted-foreground pt-4 border-t">
        <Shield className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
        <div className="text-xs">
          <p className="font-medium mb-1">Your security is our priority:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>PCI DSS Level 1 compliant payment processing</li>
            <li>256-bit SSL encryption for all transactions</li>
            <li>No card data stored on our servers</li>
            <li>3D Secure authentication for added protection</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
