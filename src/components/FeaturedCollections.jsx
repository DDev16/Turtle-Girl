// components/FeaturedCollections.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 'Pendants',
      name: 'Pendants',
      description: 'Elegant pieces for every occasion',
      image: '/Pendant.webp'
    },
    {
      id: 'Rings',
      name: 'Rings',
      description: 'Statement pieces that stand out',
      image: '/Ring.webp'
    },
    {
      id: 'bracelets',
      name: 'Bracelets',
      description: 'Delicate designs for your wrist',
      image: '/Bracelet.webp'
    }
  ];

  return (
    <section id="shop" className="py-16 container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Card 
            key={collection.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0 relative h-64">
              {collection.image && (
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <CardTitle className="text-xl">
                {collection.name}
              </CardTitle>
              <CardDescription>
                {collection.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                variant="link" 
                className="p-0 text-emerald-600 hover:text-emerald-700"
              >
                <Link href={`/shop/${collection.id}`}>
                  View Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;