import { MapPin, Shield, AlertTriangle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GeoFenceMap = () => {
  const zones = [
    { id: 1, name: "Tourism District", type: "safe", x: "30%", y: "40%" },
    { id: 2, name: "Market Area", type: "safe", x: "60%", y: "30%" },
    { id: 3, name: "Forest Reserve", type: "danger", x: "15%", y: "70%" },
    { id: 4, name: "Construction Zone", type: "warning", x: "80%", y: "60%" },
    { id: 5, name: "Hospital District", type: "safe", x: "45%", y: "25%" },
  ];

  const getZoneColor = (type: string) => {
    switch (type) {
      case "safe":
        return "bg-safe text-safe-foreground border-safe";
      case "warning":
        return "bg-warning text-warning-foreground border-warning";
      case "danger":
        return "bg-danger text-danger-foreground border-danger";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  const getZoneIcon = (type: string) => {
    switch (type) {
      case "safe":
        return Shield;
      case "warning":
        return AlertTriangle;
      case "danger":
        return AlertTriangle;
      default:
        return MapPin;
    }
  };

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="relative w-full h-96 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg border overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(180deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Your Location */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: "50%", top: "50%" }}
        >
          <div className="relative">
            <div className="w-4 h-4 bg-info rounded-full border-2 border-white shadow-lg animate-pulse" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Badge variant="outline" className="text-xs whitespace-nowrap">
                You are here
              </Badge>
            </div>
            {/* Radar circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-info/30 rounded-full animate-ping" />
          </div>
        </div>

        {/* Geo-fenced Zones */}
        {zones.map((zone) => {
          const Icon = getZoneIcon(zone.type);
          return (
            <div
              key={zone.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: zone.x, top: zone.y }}
            >
              <div className={`p-2 rounded-full border-2 shadow-lg ${getZoneColor(zone.type)}`}>
                <Icon className="h-4 w-4" />
              </div>
              {/* Zone radius */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-dashed opacity-40 rounded-full ${zone.type === 'safe' ? 'border-safe' : zone.type === 'warning' ? 'border-warning' : 'border-danger'}`} />
            </div>
          );
        })}
      </div>

      {/* Zone Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-safe rounded-full"></div>
          <span className="text-sm">Safe Zones (5)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-warning rounded-full"></div>
          <span className="text-sm">Caution Areas (1)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-danger rounded-full"></div>
          <span className="text-sm">Restricted Zones (1)</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" className="flex-1">
          <Navigation className="h-4 w-4 mr-2" />
          Get Safe Route
        </Button>
        <Button variant="outline" className="flex-1">
          <MapPin className="h-4 w-4 mr-2" />
          Nearby Services
        </Button>
      </div>
    </div>
  );
};

export { GeoFenceMap };