import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KYC Policy",
  description: "KYC Policy of Block Treasure N.V.",
};

export default function KYCPolicyPage() {
  return (
    <div className="container py-16">
      <article className="prose prose-slate mx-auto max-w-3xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">KYC Policy of Block Treasure N.V.</h1>
          <p className="text-muted-foreground text-lg">Last updated: January 31th, 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <p className="text-lg leading-relaxed">
              When a user makes an aggregate lifetime total of deposits exceeding EUR 2000 or requests a withdrawal of any amount inside the www.luckysports.cloud Platform, then it is compulsory for them to perform a full KYC process.
            </p>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
              <p className="mb-4">During this process, the user will have to input some basic details about themselves and then upload:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A copy of Government Issued Photo ID (in some cases front and back depending on the doc)</li>
                <li>A selfie of themselves holding the ID doc</li>
                <li>A bank statement/Utility Bill</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verification Process</h2>
            <p className="mb-4">
              Once uploaded, the user will get a &quot;Temporarily Approved&quot; Status and the documents will now be on our side, and the &quot;KYC Team&quot; will have 24hrs to go over them and email the user about the outcome:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approval</li>
              <li>Rejection</li>
              <li>More information needed – No change in Status</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Temporary Approval Status</h2>
            <p className="mb-4">When the user is on &quot;Temporarily Approved&quot; Status then:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>They can use the platform normally</li>
              <li>They cannot deposit more than EUR 500 in aggregate total</li>
              <li>They cannot complete any withdrawal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Guideline for the KYC Process</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Proof of ID</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Signature Is there</li>
                  <li>Country is not a Restricted Country: United States of America and its territories, France and its territories, Netherlands and its territories and countries that form the Kingdom of Netherlands including Bonaire, Sint Eustatius, Saba, Aruba, Curacao and Sint Maarten, Australia and its territories, United Kingdom of Great Britain, Northern Ireland, Singapore, Spain.</li>
                  <li>Full Name matches client&apos;s name</li>
                  <li>Document does not expire in the next 3 months</li>
                  <li>Owner is over 18 years of age</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Proof of Residence</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bank Statement or Utility Bill</li>
                  <li>Country is not a Restricted Country: United States of America and its territories, France and its territories, Netherlands and its territories and countries that form the Kingdom of Netherlands including Bonaire, Sint Eustatius, Saba, Aruba, Curacao and Sint Maarten, Australia and its territories, United Kingdom of Great Britain, Northern Ireland, Austria, Germany, Singapore, Spain, and Cyprus.</li>
                  <li>Full Name matches client&apos;s name and is same as in proof of ID.</li>
                  <li>Date of Issue: In the last 3 months</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Selfie with ID</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Holder is the same as in the ID document above</li>
                  <li>ID document is the same as in &quot;1&quot;. Make sure photo/ID number is the same</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Notes on the KYC Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>When the KYC process is unsuccessful then the reason is documented and a support ticket is created in the system. The ticket number along with an explanation is communicated back to the user.</li>
              <li>Once all proper documents are in our possession then the account gets approved.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Other AML Measures</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>If a user has not passed full KYC then they cannot make additional deposits or withdrawals of any amount.</li>
              <li>If a user has passed the KYC process successfully then:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>There is a deposit limit per transaction (max EUR 2,000)</li>
                  <li>Prior to any withdrawal there is a detailed algorithmic and manual check on the activity and balance of the user to see if the amount withdrawn is a result of proper activity in the platform.</li>
                </ul>
              </li>
              <li>Under no circumstances may a user transfer funds directly to another user.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
} 