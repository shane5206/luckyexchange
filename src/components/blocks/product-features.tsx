'use client';

import { CheckIcon } from "lucide-react";

export function ProductFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              Product Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Features to Meet All Your Needs
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our product offers comprehensive features to help you easily manage your sports betting business
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Real-time Odds</h3>
            <p className="text-gray-500">
              Provides real-time updated odds to ensure your users always get the latest betting options
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Fast Settlements</h3>
            <p className="text-gray-500">
              Immediate settlement after matches end, improving user satisfaction and platform efficiency
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Multiple Sports</h3>
            <p className="text-gray-500">
              Coverage of various global sports events, including football, basketball, tennis, and many more
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Risk Management</h3>
            <p className="text-gray-500">
              Advanced risk management system to help you control risks and maximize profits
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Data Analytics</h3>
            <p className="text-gray-500">
              Comprehensive data analysis tools to help you understand user behavior and business performance
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4 rounded-lg border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">API Integration</h3>
            <p className="text-gray-500">
              Simple and easy-to-use APIs that integrate seamlessly with your existing systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 