'use client';

import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent link navigation when clicking the button
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault(); // Prevent link navigation when clicking the button
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link 
      href={`/product/${product.id}`} 
      className="group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        {/* Product Image */}
        <div className="h-64 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white z-10"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
              disabled={!product.inStock}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;