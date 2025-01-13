'use client';

// app/admin/settings/page.js
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    storeName: 'Turtle Girl',
    email: 'contact@turtlegirl.com',
    phone: '',
    freeShippingThreshold: 100,
    enableNotifications: true,
    enableCustomization: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSwitchChange = (name, checked) => {
    setSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Settings</h1>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Store Name</Label>
                <Input
                  name="storeName"
                  value={settings.storeName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label>Contact Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={settings.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Free Shipping Threshold ($)</Label>
                <Input
                  name="freeShippingThreshold"
                  type="number"
                  value={settings.freeShippingThreshold}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Order Notifications</Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications for new orders
                  </p>
                </div>
                <Switch
                  checked={settings.enableNotifications}
                  onCheckedChange={(checked) => 
                    handleSwitchChange('enableNotifications', checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Customization Requests</Label>
                  <p className="text-sm text-gray-500">
                    Allow customers to request custom pieces
                  </p>
                </div>
                <Switch
                  checked={settings.enableCustomization}
                  onCheckedChange={(checked) => 
                    handleSwitchChange('enableCustomization', checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}