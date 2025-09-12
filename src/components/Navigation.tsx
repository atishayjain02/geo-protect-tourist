import { useState } from "react";
import { Shield, UserCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentView: "tourist" | "emergency";
  onViewChange: (view: "tourist" | "emergency") => void;
}

const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-6 p-4 bg-card rounded-lg border">
      <div className="flex items-center space-x-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-semibold">Tourist Safety System</span>
      </div>
      
      <div className="flex space-x-2">
        <Button
          variant={currentView === "tourist" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange("tourist")}
        >
          <UserCheck className="h-4 w-4 mr-2" />
          Tourist View
        </Button>
        
        <Button
          variant={currentView === "emergency" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange("emergency")}
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Emergency Center
        </Button>
      </div>
    </div>
  );
};

export { Navigation };