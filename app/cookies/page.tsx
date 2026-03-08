'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Cookie <span className="text-[#D4AF37]">Policy</span>
          </h1>
          <p className="text-gray-400 mb-12">Last Updated: November 1, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keep you signed in to your student portal</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our website performance</li>
                <li>Provide personalized content</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Essential Cookies</h3>
                  <p className="mb-2"><strong>Purpose:</strong> Required for the website to function properly</p>
                  <p className="mb-2"><strong>Examples:</strong> Session management, security, load balancing</p>
                  <p className="mb-2"><strong>Duration:</strong> Session or up to 1 year</p>
                  <p className="text-sm text-gray-400">These cookies cannot be disabled as they are necessary for the site to work.</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Functional Cookies</h3>
                  <p className="mb-2"><strong>Purpose:</strong> Remember your preferences and choices</p>
                  <p className="mb-2"><strong>Examples:</strong> Language preference, theme selection, form data</p>
                  <p className="mb-2"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-sm text-gray-400">You can disable these, but some features may not work properly.</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Analytics Cookies</h3>
                  <p className="mb-2"><strong>Purpose:</strong> Help us understand how visitors use our website</p>
                  <p className="mb-2"><strong>Examples:</strong> Google Analytics, page views, bounce rate</p>
                  <p className="mb-2"><strong>Duration:</strong> Up to 2 years</p>
                  <p className="text-sm text-gray-400">These cookies collect anonymous data to improve our services.</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">Marketing Cookies</h3>
                  <p className="mb-2"><strong>Purpose:</strong> Track your activity for advertising purposes</p>
                  <p className="mb-2"><strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting</p>
                  <p className="mb-2"><strong>Duration:</strong> Up to 1 year</p>
                  <p className="text-sm text-gray-400">You can opt-out of these cookies without affecting site functionality.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4 leading-relaxed">
                We use services from trusted third parties that may set their own cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                <li><strong>Facebook:</strong> Social media integration and advertising</li>
                <li><strong>LinkedIn:</strong> Professional networking and advertising</li>
                <li><strong>Payment Processors:</strong> Secure payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">5. Managing Cookies</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
              <p className="mb-4 leading-relaxed">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Cookie Consent</h3>
              <p className="leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie banner. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">6. Do Not Track</h2>
              <p className="leading-relaxed">
                Some browsers have a "Do Not Track" feature. Currently, there is no industry standard for how to respond to these signals. We do not currently respond to Do Not Track signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">7. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">8. Contact Us</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                <p className="mb-4">If you have questions about our use of cookies:</p>
                <p className="mb-2"><strong>T21 Services UK</strong></p>
                <p className="mb-2">Email: admin@t21services.co.uk</p>
                <p className="mb-2">Phone: +44 (0) 203 375 2061</p>
                <p className="mt-4 text-sm text-gray-400">
                  For more information about how we handle your personal data, please see our Privacy Policy.
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
