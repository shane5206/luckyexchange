"use client";

import React from 'react';
import { Button } from '@/components/ui/moving-border';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Lucky Exchange</h1>
          
          <div className="prose max-w-none">
            <p className="text-xl mb-8 leading-relaxed">
              Lucky Exchange stands at the forefront of online sports betting innovation, delivering a top-tier experience through our cutting-edge platform. In collaboration with the world&apos;s leading bookmakers and exchanges, we&apos;ve created an ecosystem that combines unparalleled market access, attractive odds, and seamless performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Global Partnerships</h2>
                <p>
                  Our strategic partnerships with premier bookmakers and exchanges worldwide ensure you have access to the most comprehensive and competitive betting markets available.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Premium Platform</h2>
                <p>
                  Experience a seamlessly integrated platform designed for optimal performance, offering real-time odds updates and instant market access across all devices.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-12 mb-6">Our Advantages</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <strong>Market Leadership:</strong> Unparalleled access to global betting markets and competitive odds
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <strong>Technical Excellence:</strong> State-of-the-art platform ensuring seamless performance and reliability
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <strong>User Experience:</strong> Intuitive interface designed for convenience at every step
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <div>
                  <strong>Security:</strong> Advanced security measures protecting your interests and transactions
                </div>
              </li>
            </ul>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-lg">
                At Lucky Exchange, we&apos;re committed to providing the most reliable, secure, and efficient sports betting platform in the industry. Our focus on technological innovation and customer satisfaction drives us to continuously enhance our services and maintain our position as an industry leader.
              </p>
            </div>
            
            <div className="mt-12 bg-black p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
              <p className="mb-8 ">
                Ready to experience the Lucky Exchange advantage? Our team is here to support your success.
              </p>
              <div className="flex justify-center">
                <Button
                  as={Link}
                  href="/contact-us"
                  borderRadius="1.75rem"
                  containerClassName="w-64 h-16"
                  className="bg-black/80 text-yellow-500 hover:bg-black/60 transition-colors"
                  borderClassName="bg-[radial-gradient(var(--amber-500)_80%,transparent_100%)]"
                  duration={3000}
                >
                  Contact us today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 