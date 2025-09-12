import { Shield, MapPin, AlertTriangle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SOSButton } from "./SOSButton";
import { SafetyStatus } from "./SafetyStatus";
import { GeoFenceMap } from "./GeoFenceMap";

const TouristDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-secondary" />
          <h1 className="text-3xl font-bold">Tourist Safety Monitor</h1>
        </div>
        <Badge variant="secondary" className="px-4 py-2">
          SAFE ZONE
        </Badge>
      </div>

      {/* Current Status */}
      <SafetyStatus />

      {/* Emergency Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <span>Emergency Response</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-muted-foreground">
              In case of emergency, press the SOS button to alert authorities instantly
            </p>
            <SOSButton />
          </div>
        </CardContent>
      </Card>

      {/* Tourist ID & Location */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tourist ID Verification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">ID:</span>
                <span className="text-muted-foreground">TST-2024-001</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span className="text-muted-foreground">John Traveler</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Blockchain Hash:</span>
                <span className="text-muted-foreground text-xs">0x7f8a...bc34</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant="secondary">Verified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Current Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Coordinates:</span>
                <span className="text-muted-foreground">28.6139° N, 77.2090° E</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Area:</span>
                <span className="text-muted-foreground">Central Delhi</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Risk Level:</span>
                <Badge variant="secondary">LOW</Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Last Updated:</span>
                <span className="text-muted-foreground">2 minutes ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Geo-Fence Map */}
      <Card>
        <CardHeader>
          <CardTitle>Safe Zone Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <GeoFenceMap />
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Recent Safety Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-warning/20 rounded-lg bg-warning/5">
              <div>
                <p className="font-medium">Traffic Congestion Ahead</p>
                <p className="text-sm text-muted-foreground">Alternative route suggested</p>
              </div>
              <Badge variant="outline" className="border-warning text-warning">
                Warning
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-secondary/20 rounded-lg bg-secondary/5">
              <div>
                <p className="font-medium">Entered Safe Zone</p>
                <p className="text-sm text-muted-foreground">Tourism District - High Security</p>
              </div>
              <Badge variant="outline" className="border-secondary text-secondary">
                Info
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TouristDashboard;