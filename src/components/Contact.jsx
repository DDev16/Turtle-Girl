// components/Contact.jsx
'use client';

import { useState } from 'react';
import { 
  Mail, 
  Instagram, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [copiedMethod, setCopiedMethod] = useState('');
  const [notification, setNotification] = useState(null);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@turtlegirl.com',
      href: 'mailto:contact@turtlegirl.com',
      type: 'email'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@turtlegirljewelry',
      href: 'https://www.instagram.com/turtlegirljewelry',
      type: 'social'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      type: 'phone'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Turtle Lane, Ocean City, CA 90210',
      href: 'https://maps.google.com/?q=123+Turtle+Lane,+Ocean+City,+CA+90210',
      type: 'address'
    }
  ];

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedMethod(value);
      showNotification('Copied to clipboard!');
      
      setTimeout(() => setCopiedMethod(''), 2000);
    });
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    showNotification('Message Sent! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-emerald-50 relative">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {notification}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactMethods.map((method) => (
                <div 
                  key={method.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <method.icon className="w-6 h-6 text-emerald-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-medium">{method.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleCopy(method.value)}
                      title="Copy"
                    >
                      {copiedMethod === method.value ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.type === 'email' ? 'Send Email' : 'Open'}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message here..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 w-4 h-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Dialog */}
        <Dialog>
          <DialogTrigger asChild className="fixed bottom-4 right-4 z-40">
            <Button size="lg" className="rounded-full shadow-lg">
              <Send className="mr-2 w-5 h-5" /> Quick Contact
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Quick Contact</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quick-name">Name</Label>
                <Input
                  id="quick-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quick-email">Email</Label>
                <Input
                  id="quick-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quick-message">Message</Label>
                <Textarea
                  id="quick-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 w-4 h-4" /> Send Message
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Contact;