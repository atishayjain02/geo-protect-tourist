import { useState } from "react";
import { AlertTriangle, Users, Phone, MapPin, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EmergencyDashboard = () => {
  const [activeEmergencies] = useState([
    {
      id: "EMG-001",
      tourist: "John Traveler",
      type: "SOS Alert",
      location: "28.6139° N, 77.2090° E",
      time: "2 min ago",
      status: "active",
      priority: "high"
    },
    {
      id: "EMG-002", 
      tourist: "Sarah Wilson",
      type: "Geo-fence Violation",
      location: "28.5355° N, 77.3910° E",
      time: "15 min ago",
      status: "responding",
      priority: "medium"
    }
  ]);

  const [incidentPredictions] = useState([
    {
      area: "India Gate",
      risk: "Overcrowding",
      probability: "85%",
      timeframe: "Next 2 hours",
      severity: "high"
    },
    {
      area: "Red Fort",
      risk: "Traffic Congestion",
      probability: "70%", 
      timeframe: "Next 1 hour",
      severity: "medium"
    },
    {
      area: "Chandni Chowk",
      risk: "Stampede Risk",
      probability: "60%",
      timeframe: "Evening Rush",
      severity: "high"
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-danger text-danger-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-info text-info-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-danger/10 border-danger text-danger";
      case "responding":
        return "bg-warning/10 border-warning text-warning";
      case "resolved":
        return "bg-safe/10 border-safe text-safe";
      default:
        return "bg-muted/10 border-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Emergency Response Center</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="destructive" className="animate-pulse">
            2 ACTIVE ALERTS
          </Badge>
          <Button size="sm" variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Contact Central Command
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Active Emergencies</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-safe/10 text-safe">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Monitored Tourists</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-info/10 text-info">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">3.2</p>
                <p className="text-sm text-muted-foreground">Avg Response (min)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-warning/10 text-warning">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-muted-foreground">Risk Zones</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="emergencies" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="emergencies">Active Emergencies</TabsTrigger>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="emergencies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Emergency Incidents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeEmergencies.map((emergency) => (
                  <div key={emergency.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Badge className={getPriorityColor(emergency.priority)}>
                          {emergency.priority.toUpperCase()}
                        </Badge>
                        <h3 className="font-semibold">{emergency.type}</h3>
                        <Badge variant="outline" className={getStatusColor(emergency.status)}>
                          {emergency.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p><strong>Tourist:</strong> {emergency.tourist} (ID: {emergency.id})</p>
                        <p><strong>Location:</strong> {emergency.location}</p>
                        <p><strong>Time:</strong> {emergency.time}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">
                        Respond
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Risk Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {incidentPredictions.map((prediction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold">{prediction.area}</h3>
                        <Badge variant={prediction.severity === "high" ? "destructive" : "secondary"}>
                          {prediction.probability}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p><strong>Risk:</strong> {prediction.risk}</p>
                        <p><strong>Timeframe:</strong> {prediction.timeframe}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Deploy Prevention
                      </Button>
                      <Button size="sm" variant="outline">
                        Alert Tourists
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Tourist Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MapPin className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Real-time Map Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Live tracking of all registered tourists with geo-fence monitoring
                </p>
                <Button>
                  Launch Full Map View
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmergencyDashboard;