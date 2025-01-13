// app/shop/[category]/page.js
import ProductsGrid from '@/components/ProductsGrid';

// Example products data - you can move this to a separate file later
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
  // Add more products...
];

export async function generateMetadata({ params }) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return {
    title: `${category} - Turtle Girl Jewelry`,
    description: `Browse our collection of handcrafted ${params.category}`,
  };
}

export default function CategoryPage({ params }) {
  const categoryProducts = products.filter(
    product => product.category === params.category
  );

  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-800 text-white mb-8">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold capitalize">{params.category}</h1>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <ProductsGrid products={categoryProducts} />
      </main>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return [
    { category: 'necklaces' },
    { category: 'earrings' },
    { category: 'bracelets' },
    { category: 'rings' }
  ];
}