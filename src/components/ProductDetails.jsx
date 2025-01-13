'use client';

import React, { useState } from 'react';
import { ShoppingBag, Heart, Clock, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductDetails = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Product Images */}
      <div className="lg:w-1/2">
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>
        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="mt-4 flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-24 h-24 bg-white rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl font-bold text-emerald-600 mb-6">
          ${product.price}
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        {/* Materials */}
        {product.materials && product.materials.length > 0 && (
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Materials</h2>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((material, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="p-3 border rounded-lg hover:bg-gray-50"
          >
            <Heart
              className={`w-6 h-6 ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        {/* Shipping Info */}
        <div className="border-t pt-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-600">Ships within 2-3 business days</span>
            </div>
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-600">Free shipping on orders over $100</span>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        {product.isCustomizable && (
          <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
            <p className="text-emerald-800">
              This piece can be customized to your preferences. Please contact us for details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;