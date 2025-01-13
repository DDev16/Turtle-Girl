'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4 text-emerald-800">About Turtle Girl</h3>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Kels.jpg" // Add the jeweler's picture here
                alt="Turtle Girl Creator"
                fill
                className="object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2">Sarah Johnson</h4>
                <p className="text-emerald-100">Master Jeweler & Founder</p>
              </div>
            </div>
            {/* Decorative Turtle Pattern */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-emerald-200 rounded-2xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Inspired by the gentle grace of sea turtles and the timeless beauty of nature, 
              each piece is thoughtfully crafted to bring a touch of wonder to your everyday life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-emerald-50/50">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold mb-2 text-emerald-800">Sustainable Materials</h4>
                  <p className="text-gray-600">We use ethically sourced materials and eco-friendly practices.</p>
                </CardContent>
              </Card>
              <Card className="bg-emerald-50/50">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-semibold mb-2 text-emerald-800">Handcrafted</h4>
                  <p className="text-gray-600">Each piece is made with attention to detail and love.</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Our commitment to quality and sustainable practices ensures that every piece 
                not only looks beautiful but also helps preserve the natural world we love.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  Our Process
                </Button>
                <Button
                  variant="ghost"
                  className="text-emerald-600 hover:bg-emerald-50"
                >
                  Learn More →
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600">5+</h4>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600">1000+</h4>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-emerald-600">500+</h4>
                <p className="text-gray-600 text-sm">Unique Designs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;