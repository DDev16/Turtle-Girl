// app/product/[id]/page.js
import { products } from '@/data/products';
import Navigation from '@/components/Navigation';
import ProductDetails from '@/components/ProductDetails';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const product = products.find(p => p.id === params.id);
  if (!product) return {};

  return {
    title: `${product.name} - Turtle Girl Jewelry`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-emerald-50">
   
      <main className="container mx-auto px-6 py-12">
        <ProductDetails product={product} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}