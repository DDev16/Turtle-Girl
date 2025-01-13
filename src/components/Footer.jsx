// components/Footer.jsx
import Link from 'next/link';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
    { href: '/shipping', label: 'Shipping & Returns' }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/turtlegirljewelry', 
      label: 'Instagram' 
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/turtlegirljewelry', 
      label: 'Facebook' 
    },
    { 
      icon: Twitter, 
      href: 'https://www.twitter.com/turtlegirljewelry', 
      label: 'Twitter' 
    },
    { 
      icon: Mail, 
      href: 'mailto:contact@turtlegirl.com', 
      label: 'Email' 
    }
  ];

  return (
    <footer className="bg-emerald-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-emerald-900">Turtle Girl</CardTitle>
              <CardDescription>
                Handcrafted jewelry inspired by the beauty of nature and the spirit of the ocean.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-emerald-900">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="link"
                  asChild
                  className="text-emerald-800 hover:text-emerald-600"
                >
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card>
            <CardHeader>
              <CardTitle>Stay Connected</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for exclusive updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8 bg-emerald-200" />

        {/* Copyright and Legal */}
        <div className="text-center">
          <p className="text-sm text-emerald-800">
            © {currentYear} Turtle Girl. All rights reserved.
          </p>
          <div className="mt-2 space-x-4 text-sm">
            <Button
              variant="link"
              asChild
              className="text-emerald-700 hover:text-emerald-900"
            >
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </Button>
            <Button
              variant="link"
              asChild
              className="text-emerald-700 hover:text-emerald-900"
            >
              <Link href="/terms-of-service">
                Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;