'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const turtleY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentY = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="relative h-[90vh] overflow-hidden" ref={ref}>
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: !isMobile ? backgroundY : 0 }}
      >
        <Image
          src="/Ocean.webp"
          alt="Ocean background"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/50 to-transparent" />
        
        {/* Animated water ripple effect */}
        <div className="absolute inset-0 bg-[url('/ripple.png')] bg-repeat-x bg-bottom opacity-30 animate-wave" />
        <div className="absolute inset-0 bg-[url('/ripple.png')] bg-repeat-x bg-bottom opacity-20 animate-wave-slow" />
      </motion.div>

      {/* Main Container - Using Grid for Better Layout */}
      <div className="relative container mx-auto h-full grid md:grid-cols-2 items-center px-6">
        {/* Left Side Content */}
        <motion.div 
          className="z-10"
          style={{ y: !isMobile ? contentY : 0 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-200"
            >
              Handcrafted Jewelry
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl mb-8 text-emerald-100"
            >
              Unique pieces inspired by nature&apos;s beauty, crafted with care and passion
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <Button
                size="lg"
                onClick={scrollToShop}
                className="bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-500/20 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
              >
                Explore Collection
              </Button>
            </motion.div>

            {/* Feature Badges - Updated styling */}
            <motion.div 
              variants={containerVariants}
              className="flex flex-col space-y-3"
            >
              {[
                { icon: '✨', text: 'Handcrafted with Love' },
                { icon: '🌿', text: 'Sustainable Materials' },
           
              ].map((item) => (
                <motion.div
                  key={item.text}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 w-fit rounded-full backdrop-blur-md bg-white/10 border border-white/20 
                    text-emerald-50 font-medium shadow-lg transition-all duration-300 
                    hover:bg-white/20 cursor-default flex items-center gap-2"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side Turtle */}
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: !isMobile ? turtleY : 0 }}
          className="absolute right-0 md:relative md:h-full flex items-center justify-center"
        >
          <Image
            src="/Turtle.png"
            alt="Sea Turtle"
            width={isMobile ? 300 : 500}
            height={isMobile ? 300 : 500}
            className="opacity-60 md:opacity-90 animate-float"
            priority
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;