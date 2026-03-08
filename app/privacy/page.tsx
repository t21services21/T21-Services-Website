'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Privacy <span className="text-[#D4AF37]">Policy</span>
          </h1>
          <p className="text-gray-400 mb-12">Last Updated: November 1, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                T21 Services UK ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and phone number</li>
                <li>Date of birth and address</li>
                <li>Educational and employment history</li>
                <li>Course enrollment and payment information</li>
                <li>CV and application materials</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process course enrollments and provide training services</li>
                <li>Communicate with you about courses, services, and updates</li>
                <li>Process job applications and recruitment services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and TQUK requirements</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze usage patterns and optimize user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-4">Under GDPR, we process your personal data based on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contract:</strong> To fulfill our obligations in providing training and services</li>
                <li><strong>Consent:</strong> When you agree to receive marketing communications</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li><strong>Legal Obligation:</strong> To comply with TQUK and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">5. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>TQUK:</strong> For qualification verification and certification</li>
                <li><strong>Employers:</strong> With your consent, for recruitment services</li>
                <li><strong>Service Providers:</strong> Payment processors, email services, hosting providers</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">7. Your Rights Under GDPR</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Limit how we use your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at admin@t21services.co.uk</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">8. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to provide services, comply with legal obligations, and resolve disputes. Course records are retained for 7 years in accordance with TQUK requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">9. Cookies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. See our Cookie Policy for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">11. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries outside the UK/EU. We ensure appropriate safeguards are in place to protect your data in accordance with GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">12. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">13. Contact Us</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                <p className="mb-4">If you have questions about this Privacy Policy or wish to exercise your rights:</p>
                <p className="mb-2"><strong>T21 Services UK</strong></p>
                <p className="mb-2">64 Upper Parliament Street</p>
                <p className="mb-2">Liverpool, L8 7LF, United Kingdom</p>
                <p className="mb-2">Email: admin@t21services.co.uk</p>
                <p className="mb-2">Phone: +44 (0) 203 375 2061</p>
                <p className="mt-4 text-sm text-gray-400">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data protection rights have been violated.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
