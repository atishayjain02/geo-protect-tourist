import { useState } from "react";
import TouristDashboard from "@/components/TouristDashboard";
import EmergencyDashboard from "@/components/EmergencyDashboard";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [currentView, setCurrentView] = useState<"tourist" | "emergency">("tourist");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        
        {currentView === "tourist" ? (
          <TouristDashboard />
        ) : (
          <EmergencyDashboard />
        )}
      </div>
    </div>
  );
};

export default Index;
