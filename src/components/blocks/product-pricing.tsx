'use client';

import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export function ProductPricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
              Pricing Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose the Right Plan for Your Business
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer flexible pricing plans to meet the needs of businesses of all sizes
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-gray-500">For small betting companies</p>
            </div>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">$9,999</span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Real-time odds updates</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>10 sports</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Basic risk management</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Standard API access</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Email support</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Professional</h3>
              <p className="text-gray-500">For medium-sized betting companies</p>
            </div>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">$19,999</span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Real-time odds updates</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>20 sports</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Advanced risk management</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Advanced API access</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Priority email and phone support</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-gray-500">For large betting companies</p>
            </div>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">Custom</span>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Real-time odds updates</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>All sports</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Enterprise-grade risk management</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Fully customized API</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>Custom development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 