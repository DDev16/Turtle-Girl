'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function OrderSuccessPage() {
  const router = useRouter();

  // Redirect if user directly accesses this page
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/shop');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-800 text-white">
        <Navigation />
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-8">
            We&apos;ve received your order and will begin processing it right away.
            You&apos;ll receive a confirmation email shortly with your order details.
          </p>

          <div className="space-y-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}