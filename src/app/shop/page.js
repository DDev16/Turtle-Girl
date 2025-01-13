// app/shop/page.js
import ProductsGrid from '@/components/ProductsGrid';

// Example products data (you can move this to a separate file)
const products = [
  {
    id: '1',
    name: 'Sea Turtle Pendant',
    description: 'Sterling silver turtle pendant with turquoise inlay',
    price: 129.99,
    category: 'necklaces',
    images: ['/placeholder.jpg'],
    inStock: true,
    materials: ['Sterling Silver', 'Turquoise'],
  },
  {
    id: '2',
    name: 'Wave Earrings',
    description: 'Ocean-inspired wave design earrings',
    price: 89.99,
    category: 'earrings',
    images: ['/placeholder.jpg'],
    inStock: true,
    materials: ['14K Gold Plated'],
  },
  // Add more products as needed
];

export const metadata = {
  title: 'Shop - Turtle Girl Jewelry',
  description: 'Browse our collection of handcrafted jewelry',
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-800 text-white mb-8">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold">Our Collections</h1>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <ProductsGrid products={products} />
      </main>
    </div>
  );
}