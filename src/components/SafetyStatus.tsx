import { Shield, MapPin, Clock, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SafetyStatus = () => {
  const safetyMetrics = [
    {
      icon: Shield,
      label: "Safety Level",
      value: "HIGH",
      status: "safe",
      description: "You are in a monitored safe zone"
    },
    {
      icon: MapPin,
      label: "GPS Status",
      value: "ACTIVE",
      status: "safe",
      description: "Location tracking enabled"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 5 MIN",
      status: "info",
      description: "Emergency services nearby"
    },
    {
      icon: Wifi,
      label: "Connection",
      value: "STRONG",
      status: "safe",
      description: "Real-time monitoring active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "bg-safe/10 border-safe text-safe";
      case "warning":
        return "bg-warning/10 border-warning text-warning";
      case "danger":
        return "bg-danger/10 border-danger text-danger";
      case "info":
        return "bg-info/10 border-info text-info";
      default:
        return "bg-muted/10 border-muted text-muted-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {safetyMetrics.map((metric, index) => (
        <Card key={index} className="relative overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${getStatusColor(metric.status)}`}>
                <metric.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <p className="text-lg font-bold truncate">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { SafetyStatus };