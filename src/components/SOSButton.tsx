import { useState } from "react";
import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const SOSButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSOSPress = () => {
    if (isPressed) return;
    
    setIsPressed(true);
    setCountdown(3);
    
    // Countdown before activation
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          activateEmergencyMode();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Allow cancellation
    setTimeout(() => {
      if (countdown > 0) {
        clearInterval(timer);
        setIsPressed(false);
        setCountdown(0);
      }
    }, 3000);
  };

  const activateEmergencyMode = () => {
    toast({
      variant: "destructive",
      title: "🚨 EMERGENCY ACTIVATED",
      description: "Authorities notified. Live location shared. Help is on the way.",
    });
    
    // Simulate emergency response
    setTimeout(() => {
      toast({
        title: "📍 Location Sent",
        description: "Your exact coordinates have been shared with emergency services.",
      });
    }, 2000);

    setTimeout(() => {
      setIsPressed(false);
    }, 5000);
  };

  const handleCancel = () => {
    setIsPressed(false);
    setCountdown(0);
    toast({
      title: "SOS Cancelled",
      description: "Emergency alert has been cancelled.",
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {isPressed ? (
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
              <AlertTriangle className="h-12 w-12 text-primary-foreground animate-bounce" />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-primary">Activating in {countdown}s</p>
            <p className="text-sm text-muted-foreground">Press cancel to abort</p>
          </div>
          <Button variant="outline" onClick={handleCancel} size="sm">
            Cancel
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-2">
          <Button
            size="lg"
            className="w-24 h-24 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={handleSOSPress}
          >
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-1" />
              <span className="text-xs font-bold">SOS</span>
            </div>
          </Button>
          <p className="text-sm text-muted-foreground">Emergency Button</p>
        </div>
      )}
    </div>
  );
};

export { SOSButton };