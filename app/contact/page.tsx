'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [referenceNumber, setReferenceNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setReferenceNumber(result.referenceNumber || '');
        setFormData({ name: '', email: '', phone: '', organisation: '', subject: '', message: '', inquiry_type: 'general' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Contact <span className="text-[#D4AF37]">T21 Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discuss your healthcare operational requirements with our team
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">
                Contact <span className="text-[#D4AF37]">Information</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 glass-card">
                  <span className="text-[#D4AF37] text-2xl mt-0.5">&#9993;</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#D4AF37] mb-1">Operational Enquiries</h3>
                    <a href="mailto:admin@t21services.co.uk" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                      admin@t21services.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-card">
                  <span className="text-[#D4AF37] text-2xl mt-0.5">&#9742;</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#D4AF37] mb-1">Telephone</h3>
                    <a href="tel:+442033752061" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                      +44 (0) 203 375 2061
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-card">
                  <span className="text-[#D4AF37] text-2xl mt-0.5">&#9906;</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#D4AF37] mb-1">Registered Office</h3>
                    <p className="text-gray-300">
                      64 Upper Parliament Street<br />
                      Liverpool, L8 7LF<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 glass-card">
                  <span className="text-[#D4AF37] text-2xl mt-0.5">&#128172;</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#D4AF37] mb-1">WhatsApp</h3>
                    <a href="https://wa.me/442033752061" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 glass-card">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-4">Connect With Us</h3>
                <a href="https://www.linkedin.com/company/t21services" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors">
                  LinkedIn - T21 Services
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">
                Send an <span className="text-[#D4AF37]">Enquiry</span>
              </h2>

              {submitStatus === 'success' ? (
                <div className="glass-card border-[#D4AF37] border-2">
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-[#D4AF37] mb-4">Enquiry Received</h3>
                    <p className="text-gray-300 mb-3">
                      Thank you for contacting T21 Services. Your enquiry has been received and a member of our team will respond within 24 hours.
                    </p>
                    {referenceNumber && (
                      <p className="text-sm text-gray-400 mb-6">
                        Your reference number: <span className="text-[#D4AF37] font-semibold">{referenceNumber}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-400 mb-6">
                      A confirmation has been sent to your email address. If you require immediate assistance, please call us on <strong className="text-white">+44 (0) 203 375 2061</strong>.
                    </p>
                    <button onClick={() => setSubmitStatus('idle')}
                      className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all">
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitStatus === 'error' && (
                    <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                      <p className="text-red-300 font-medium mb-1">We were unable to process your enquiry at this time.</p>
                      <p className="text-red-400 text-sm">
                        Please try again, or contact us directly at{' '}
                        <a href="mailto:admin@t21services.co.uk" className="text-[#D4AF37] underline">admin@t21services.co.uk</a>
                        {' '}or call <strong>+44 (0) 203 375 2061</strong>.
                      </p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="Full name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="your@email.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="+44 123 456 7890" />
                  </div>

                  <div>
                    <label htmlFor="organisation" className="block text-gray-300 mb-2 font-medium">Organisation</label>
                    <input type="text" id="organisation" name="organisation" value={formData.organisation} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="NHS Trust / Organisation name" />
                  </div>

                  <div>
                    <label htmlFor="inquiry_type" className="block text-gray-300 mb-2 font-medium">Enquiry Type *</label>
                    <select id="inquiry_type" name="inquiry_type" required value={formData.inquiry_type} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors [&>option]:bg-gray-900 [&>option]:text-white">
                      <option value="general">General Enquiry</option>
                      <option value="rtt-validation">RTT Validation and Elective Recovery</option>
                      <option value="patient-access">Patient Access Workforce</option>
                      <option value="clinical-coding">Clinical Coding and Data Quality</option>
                      <option value="workforce-development">Workforce Development and Training</option>
                      <option value="insourcing">Insourcing Partnership</option>
                      <option value="operational">Operational Delivery Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">Subject *</label>
                    <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="Brief description of your requirements" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message *</label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your operational requirements..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                  </button>

                  <p className="text-sm text-gray-400 text-center">We respond to all enquiries within 24 hours</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Office <span className="text-[#D4AF37]">Hours</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Monday - Friday</h3>
              <p className="text-gray-300">9:00 AM - 5:00 PM</p>
            </div>
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Saturday</h3>
              <p className="text-gray-300">Closed</p>
            </div>
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Sunday</h3>
              <p className="text-gray-300">Closed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}