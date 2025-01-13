'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBag, 
  LayoutDashboard, 
  Settings, 
  Package, 
  Users,
  LogOut 
} from 'lucide-react';

const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: '/admin'
    },
    {
      title: 'Products',
      icon: <Package className="w-5 h-5" />,
      href: '/admin/products'
    },
    {
      title: 'Orders',
      icon: <ShoppingBag className="w-5 h-5" />,
      href: '/admin/orders'
    },
    {
      title: 'Customers',
      icon: <Users className="w-5 h-5" />,
      href: '/admin/customers'
    },
    {
      title: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      href: '/admin/settings'
    }
  ];

  return (
    <div className="min-h-screen w-64 bg-white border-r">
      <div className="p-6">
        <h2 className="text-xl font-bold text-emerald-800">Turtle Girl Admin</h2>
      </div>
      
      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-emerald-50 text-emerald-800' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-64 p-4 border-t">
        <button className="flex items-center gap-3 px-4 py-2 w-full text-gray-600 hover:bg-gray-50 rounded-lg">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;