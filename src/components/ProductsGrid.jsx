'use client';

import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const sortProducts = (products) => {
    switch (sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return products;
    }
  };

  const filterProducts = (products) => {
    if (filterCategory === 'all') return products;
    return products.filter(product => product.category === filterCategory);
  };

  const displayedProducts = sortProducts(filterProducts(products));

  return (
    <div className="py-8">
      {/* Filters and Sort */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
          <div className="flex items-center gap-4">
            <label className="text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-4 py-2 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Category</h4>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                >
                  <option value="all">All Categories</option>
                  <option value="necklaces">Necklaces</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelets">Bracelets</option>
                  <option value="rings">Rings</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* No Results */}
      {displayedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;