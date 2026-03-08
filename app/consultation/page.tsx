'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service_interest: '',
    preferred_date: '',
    preferred_time: '',
    consultation_type: 'video',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        const result = await response.json();
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          service_interest: '',
          preferred_date: '',
          preferred_time: '',
          consultation_type: 'video',
          message: ''
        });
        alert('Thank you! We will contact you shortly to confirm your consultation.');
      } else {
        setSubmitStatus('error');
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        console.error('API Error:', errorData);
        alert(`Error: ${errorData.message || 'Something went wrong. Please try again or contact us directly.'}`);
      }
    } catch (error) {
      setSubmitStatus('error');
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book Your <span className="text-[#D4AF37]">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your career or organization
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Tailored Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">
                Request a <span className="text-[#D4AF37]">Consultation</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service_interest"
                    required
                    value={formData.service_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-white">Select a service</option>
                    <option value="training" className="bg-gray-800 text-white">Training & Certification</option>
                    <option value="recruitment" className="bg-gray-800 text-white">Recruitment Services</option>
                    <option value="software" className="bg-gray-800 text-white">Software & AI Solutions</option>
                    <option value="consultancy" className="bg-gray-800 text-white">Business Consultancy</option>
                    <option value="international" className="bg-gray-800 text-white">International Programs</option>
                    <option value="community" className="bg-gray-800 text-white">Community Impact</option>
                    <option value="other" className="bg-gray-800 text-white">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select time</option>
                      <option value="morning" className="bg-gray-800 text-white">Morning (9AM - 12PM)</option>
                      <option value="afternoon" className="bg-gray-800 text-white">Afternoon (12PM - 5PM)</option>
                      <option value="evening" className="bg-gray-800 text-white">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                    placeholder="Tell us about your needs, goals, or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
                >
                  Request Consultation
                </button>

                <p className="text-sm text-gray-400 text-center">
                  We'll contact you within 24 hours to confirm your consultation
                </p>
              </form>
            </div>

            {/* Contact Information & What to Expect */}
            <div className="space-y-8">
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Initial Contact</h4>
                      <p className="text-gray-300 text-sm">We'll reach out within 24 hours to confirm your preferred date and time</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Consultation Call</h4>
                      <p className="text-gray-300 text-sm">30-60 minute discussion about your needs and how we can help</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Tailored Proposal</h4>
                      <p className="text-gray-300 text-sm">Receive a customized solution and pricing based on your requirements</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Get Started</h4>
                      <p className="text-gray-300 text-sm">Once approved, we begin working on your project immediately</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:admin@t21services.co.uk" className="text-white hover:text-[#D4AF37] transition-colors">
                        admin@t21services.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+442033752061" className="text-white hover:text-[#D4AF37] transition-colors">
                        +44 (0) 203 375 2061
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white">
                        64 Upper Parliament Street<br />
                        Liverpool, L8 7LF, UK
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="text-sm text-gray-400">Business Hours</p>
                      <p className="text-white">
                        Mon - Fri: 9:00 AM - 5:00 PM<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prefer to Call? */}
              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-black border border-[#D4AF37]/30 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-3">Prefer to Call?</h4>
                <p className="text-gray-300 mb-4">
                  Speak directly with our team
                </p>
                <a 
                  href="tel:+442033752061"
                  className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
