// components/Navigation.jsx
'use client';

import Link from 'next/link';
import { 
  ShoppingBag, 
  Menu, 
  X,
  Turtle 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { cartCount } = useCart();
  const router = useRouter();

  const NavLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
      {/* Logo with Turtle Icon */}
      <Link 
        href="/" 
        className="flex items-center gap-2 text-2xl font-bold text-emerald-900 hover:text-emerald-700 transition-colors duration-300"
        aria-label="Home"
      >
        <Turtle className="w-8 h-8 text-emerald-700" />
        Turtle Girl
      </Link>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-4">
            {NavLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                onClick={() => handleNavigation(link.href)}
                className="w-full justify-start"
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/cart')}
              className="w-full justify-start relative"
            >
              Cart
              {cartCount > 0 && (
                <span 
                  className={cn(
                    "ml-2 absolute right-0 bg-emerald-500 text-white text-xs",
                    "rounded-full w-5 h-5 flex items-center justify-center animate-pulse"
                  )}
                >
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {NavLinks.map((link) => (
          <Button
            key={link.href}
            variant="ghost"
            onClick={() => handleNavigation(link.href)}
          >
            {link.label}
          </Button>
        ))}
        
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => handleNavigation('/cart')}
          className="relative"
        >
          <ShoppingBag className="h-6 w-6" />
          {cartCount > 0 && (
            <span 
              className={cn(
                "absolute -top-2 -right-2 bg-emerald-500 text-white text-xs",
                "rounded-full w-5 h-5 flex items-center justify-center animate-pulse"
              )}
            >
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;