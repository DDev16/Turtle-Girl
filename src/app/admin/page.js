// app/admin/page.js
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345",
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
      trend: "+12.5%"
    },
    {
      title: "Total Orders",
      value: "156",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      trend: "+8.2%"
    },
    {
      title: "Products",
      value: "48",
      icon: <Package className="w-6 h-6 text-purple-600" />,
      trend: "4 new"
    },
    {
      title: "Customers",
      value: "2,345",
      icon: <Users className="w-6 h-6 text-orange-600" />,
      trend: "+15.3%"
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 mt-1">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add more dashboard content like charts, recent orders, etc. */}
    </div>
  );
}