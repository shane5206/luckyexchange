import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Underage Gaming Policy | Lucky Exchange",
  description: "Our policy regarding underage gaming and age restrictions.",
};

export default function UnderageGamingPolicy() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Underage Gaming Policy</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg font-semibold mb-4">
          Block Treasure N.V. strictly prohibits participation by persons under the legal age of 18 years.
        </p>

        <div className="space-y-4">
          <p>
            Lucky Exchange maintains a strict policy against underage gaming. We take our responsibility to prevent underage gambling very seriously and have implemented various measures to ensure compliance with this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Age Verification</h2>
          <p>
            All users must be at least 18 years of age to register and play on our platform. During the registration process, we require:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Valid government-issued identification</li>
            <li>Proof of age documentation</li>
            <li>Verification of identity through our KYC process</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Preventive Measures</h2>
          <p>
            We have implemented several measures to prevent underage gaming:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Strict age verification during registration</li>
            <li>Regular age verification checks</li>
            <li>Clear age restriction notices on our website</li>
            <li>Parental control tools and information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Consequences</h2>
          <p>
            Any account found to be registered by or used by an individual under the age of 18 will be:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immediately suspended</li>
            <li>All funds will be returned to the original payment method</li>
            <li>Account will be permanently closed</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Reporting Underage Gaming</h2>
          <p>
            If you suspect someone is gaming underage on our platform, please contact our support team immediately at:
          </p>
          <p className="font-semibold">Email: support@luckysports.cloud</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> It is illegal for anyone under the age of 18 to gamble. We maintain a zero-tolerance policy for underage gaming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 