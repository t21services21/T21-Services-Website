'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Terms of <span className="text-[#D4AF37]">Service</span>
          </h1>
          <p className="text-gray-400 mb-12">Last Updated: November 1, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing or using T21 Services UK's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">2. Services Provided</h2>
              <p className="mb-4">T21 Services UK provides:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>TQUK-approved training and certification programs</li>
                <li>Professional development courses</li>
                <li>Recruitment and staffing services</li>
                <li>Software and AI solutions</li>
                <li>Business consultancy services</li>
                <li>International training programs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">3. Course Enrollment and Payment</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Enrollment</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Course enrollment is subject to availability and acceptance</li>
                <li>You must provide accurate and complete information</li>
                <li>You must meet course prerequisites where applicable</li>
                <li>We reserve the right to refuse enrollment</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Full payment is required unless payment plan is agreed</li>
                <li>Prices are in GBP and include VAT where applicable</li>
                <li>Payment methods: Bank transfer, credit/debit card</li>
                <li>Late payments may result in course access suspension</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.3 Refund Policy</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>14-Day Cooling Off:</strong> Full refund if cancelled within 14 days of enrollment (before course start)</li>
                <li><strong>After Course Start:</strong> Refunds calculated on pro-rata basis for unused portion</li>
                <li><strong>No Refund:</strong> After 50% course completion or for TQUK registration fees</li>
                <li><strong>Refund Process:</strong> Processed within 14 days of approval</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">4. Student Responsibilities</h2>
              <p className="mb-4">As a student, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Attend classes and complete assignments on time</li>
                <li>Maintain academic integrity and honesty</li>
                <li>Respect instructors and fellow students</li>
                <li>Not share course materials without permission</li>
                <li>Use learning platforms responsibly</li>
                <li>Provide accurate information for certification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">5. Intellectual Property</h2>
              <p className="mb-4 leading-relaxed">
                All course materials, content, and resources are the intellectual property of T21 Services UK or our licensors. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, distribute, or sell course materials</li>
                <li>Record or screenshot classes without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Reverse engineer or modify our software</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">6. Certification and Qualifications</h2>
              <p className="mb-4 leading-relaxed">
                TQUK qualifications are awarded upon successful completion of course requirements and assessments. Certificates are issued by TQUK and subject to their terms and conditions.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must complete all assessments to required standard</li>
                <li>Plagiarism or cheating will result in disqualification</li>
                <li>Certificates cannot be transferred or sold</li>
                <li>We reserve the right to revoke certificates for misconduct</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">7. Recruitment Services</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">7.1 For Job Seekers</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>CV submission grants us permission to share with potential employers</li>
                <li>We do not guarantee job placement</li>
                <li>You must provide accurate employment history</li>
                <li>You are responsible for interview attendance</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">7.2 For Employers</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recruitment fees are agreed in advance</li>
                <li>90-day replacement guarantee for permanent placements</li>
                <li>Temporary staffing charged at agreed rates</li>
                <li>Payment terms: 30 days from invoice date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">8. Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We are not liable for indirect or consequential damages</li>
                <li>Our liability is limited to the amount paid for services</li>
                <li>We do not guarantee specific employment outcomes</li>
                <li>We are not responsible for third-party content or services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">9. Termination</h2>
              <p className="mb-4 leading-relaxed">
                We may terminate or suspend your access to services for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violation of these terms</li>
                <li>Non-payment of fees</li>
                <li>Misconduct or disruptive behavior</li>
                <li>Fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">10. Complaints and Disputes</h2>
              <p className="mb-4 leading-relaxed">
                If you have a complaint:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us at admin@t21services.co.uk within 14 days</li>
                <li>We will acknowledge within 3 business days</li>
                <li>We will investigate and respond within 28 days</li>
                <li>If unresolved, you may escalate to TQUK or relevant authority</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">11. Force Majeure</h2>
              <p className="leading-relaxed">
                We are not liable for failure to perform due to circumstances beyond our control, including natural disasters, pandemics, strikes, or government actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">12. Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">13. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">14. Contact Information</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
                <p className="mb-4">For questions about these Terms of Service:</p>
                <p className="mb-2"><strong>T21 Services UK</strong></p>
                <p className="mb-2">64 Upper Parliament Street</p>
                <p className="mb-2">Liverpool, L8 7LF, United Kingdom</p>
                <p className="mb-2">Email: admin@t21services.co.uk</p>
                <p className="mb-2">Phone: +44 (0) 203 375 2061</p>
                <p className="mb-2">Business Hours: Monday-Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
