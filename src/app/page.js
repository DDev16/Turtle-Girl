// app/page.js
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCollections />
    
      <Contact />
    </>
  );
}