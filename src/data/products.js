// data/products.js

export const products = [
    {
      id: '1',
      name: 'Sea Turtle Pendant Necklace',
      description: 'Handcrafted sterling silver turtle pendant with turquoise inlay',
      price: 129.99,
      category: 'necklaces',
      images: ['/images/necklace-1.jpg'],
      inStock: true,
      materials: ['Sterling Silver', 'Turquoise'],
      dimensions: '18 inch chain',
      isCustomizable: true,
      featured: true
    },
    {
      id: '2',
      name: 'Wave Earrings',
      description: 'Ocean-inspired wave design with freshwater pearls',
      price: 89.99,
      category: 'earrings',
      images: ['/images/earrings-1.jpg'],
      inStock: true,
      materials: ['14K Gold Plated', 'Freshwater Pearl'],
      isCustomizable: false,
      featured: true
    },
    // Add more products...
  ];
  
  export const categories = [
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Elegant pieces for every occasion',
      image: '/images/category-necklaces.jpg'
    },
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'Statement pieces that stand out',
      image: '/images/category-earrings.jpg'
    },
    {
      id: 'bracelets',
      name: 'Bracelets',
      description: 'Delicate designs for your wrist',
      image: '/images/category-bracelets.jpg'
    },
    {
      id: 'rings',
      name: 'Rings',
      description: 'Unique rings for every style',
      image: '/images/category-rings.jpg'
    }
  ];