'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Thank you! We have received your message and will respond within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiry_type: 'general'
        });
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        console.error('API Error:', errorData);
        alert(`Error: ${errorData.message || 'Something went wrong. Please try again or contact us directly.'}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Something went wrong. Please try again or contact us directly.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your career or organization? Contact us today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Contact <span className="text-[#D4AF37]">Information</span>
              </h2>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start gap-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Email Us</h3>
                    <a href="mailto:info@t21services.co.uk" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                      info@t21services.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start gap-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Call Us</h3>
                    <a href="tel:+442033752061" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                      +44 (0) 203 375 2061
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mb-8">
                <div className="flex items-start gap-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/442033752061" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Visit Us</h3>
                    <p className="text-gray-300">
                      64 Upper Parliament Street<br />
                      Liverpool, L8 7LF<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/t21services" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg flex items-center justify-center hover:border-[#D4AF37] transition-all text-2xl"
                  >
                    💼
                  </a>
                  <a 
                    href="https://twitter.com/t21services" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg flex items-center justify-center hover:border-[#D4AF37] transition-all text-2xl"
                  >
                    🐦
                  </a>
                  <a 
                    href="https://facebook.com/t21services" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg flex items-center justify-center hover:border-[#D4AF37] transition-all text-2xl"
                  >
                    📘
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Send Us a <span className="text-[#D4AF37]">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="inquiry_type" className="block text-gray-300 mb-2 font-medium">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    required
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors [&>option]:bg-gray-900 [&>option]:text-white"
                  >
                    <option value="general" className="bg-gray-900 text-white">General Inquiry</option>
                    <option value="training" className="bg-gray-900 text-white">Training & Certification</option>
                    <option value="recruitment" className="bg-gray-900 text-white">Recruitment & Staffing</option>
                    <option value="software" className="bg-gray-900 text-white">Software & AI Solutions</option>
                    <option value="international" className="bg-gray-900 text-white">International Programs</option>
                    <option value="consultancy" className="bg-gray-900 text-white">Business Consultancy</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Office <span className="text-[#D4AF37]">Hours</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Monday - Friday</h3>
              <p className="text-gray-300">9:00 AM - 6:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Saturday</h3>
              <p className="text-gray-300">10:00 AM - 2:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Sunday</h3>
              <p className="text-gray-300">Closed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
