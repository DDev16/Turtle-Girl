'use client';

import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';

const CartPage = () => {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const shipping = cartTotal >= 100 ? 0 : 10;
  const total = cartTotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    router.push('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-emerald-50">
        <header className="bg-emerald-800 text-white">
          <Navigation />
        </header>
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items yet.</p>
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-800 text-white">
        <Navigation />
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-4 p-6 border-b last:border-b-0"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <Link 
                      href={`/product/${item.id}`}
                      className="text-lg font-semibold hover:text-emerald-600"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-600">${item.price} each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Proceed to Checkout
              </button>

              <div className="mt-6 text-center">
                <Link 
                  href="/shop" 
                  className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Shipping Notice */}
            {cartTotal < 100 && (
              <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  Add ${(100 - cartTotal).toFixed(2)} more to qualify for free shipping!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;