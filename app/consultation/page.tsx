'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    service_interest: '',
    preferred_date: '',
    preferred_time: '',
    consultation_type: 'video',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [bookingRef, setBookingRef] = useState('');

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

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setBookingRef(result.bookingReference || '');
        setFormData({
          name: '', email: '', phone: '', organisation: '',
          service_interest: '', preferred_date: '', preferred_time: '',
          consultation_type: 'video', message: ''
        });
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Discuss Your <span className="text-[#D4AF37]">Requirements</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Arrange a consultation to discuss how T21 Services can support your healthcare operational requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>No Obligation Discussion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>Healthcare Operations Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>Tailored Workforce Solutions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Request a <span className="text-[#D4AF37]">Consultation</span>
              </h2>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-[#D4AF37] mb-4">Consultation Request Received</h3>
                  <p className="text-gray-300 mb-3">
                    Thank you for your interest in T21 Services. A member of our team will contact you within 24 hours to confirm your consultation.
                  </p>
                  {bookingRef && (
                    <p className="text-sm text-gray-400 mb-4">
                      Your reference: <span className="text-[#D4AF37] font-semibold">{bookingRef}</span>
                    </p>
                  )}
                  <p className="text-sm text-gray-400 mb-6">
                    If you require immediate assistance, please call <strong className="text-white">+44 (0) 203 375 2061</strong> or email <a href="mailto:admin@t21services.co.uk" className="text-[#D4AF37]">admin@t21services.co.uk</a>.
                  </p>
                  <button onClick={() => setSubmitStatus('idle')}
                    className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-gray-300 mb-8">
                    Complete the form below and we will contact you within 24 hours to arrange a consultation.
                  </p>

                  {submitStatus === 'error' && (
                    <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6">
                      <p className="text-red-300 font-medium mb-1">We were unable to process your request at this time.</p>
                      <p className="text-red-400 text-sm">
                        Please try again, or contact us directly at{' '}
                        <a href="mailto:admin@t21services.co.uk" className="text-[#D4AF37] underline">admin@t21services.co.uk</a>
                        {' '}or call <strong>+44 (0) 203 375 2061</strong>.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                        placeholder="Full name" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                        placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                        placeholder="+44 7XXX XXXXXX" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Organisation</label>
                      <input type="text" name="organisation" value={formData.organisation} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                        placeholder="NHS Trust / Organisation name" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Service Area of Interest *</label>
                      <select name="service_interest" required value={formData.service_interest} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                        <option value="">Select a service area</option>
                        <option value="rtt-validation">RTT Validation and Elective Recovery</option>
                        <option value="patient-access">Patient Access Workforce</option>
                        <option value="clinical-coding">Clinical Coding and Data Quality</option>
                        <option value="workforce-development">Workforce Development and Training</option>
                        <option value="insourcing">Insourcing Partnership</option>
                        <option value="multiple">Multiple Service Areas</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Date</label>
                        <input type="date" name="preferred_date" value={formData.preferred_date} onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Time</label>
                        <select name="preferred_time" value={formData.preferred_time} onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                          <option value="">Select time</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Additional Information</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                        placeholder="Tell us about your operational requirements, workforce needs, or any specific questions..." />
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg disabled:opacity-50">
                      {isSubmitting ? 'Submitting Request...' : 'Request Consultation'}
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      We will contact you within 24 hours to confirm
                    </p>
                  </form>
                </>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-[#D4AF37]">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Initial Contact</h4>
                      <p className="text-gray-300 text-sm">We contact you within 24 hours to confirm a convenient time</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Requirements Discussion</h4>
                      <p className="text-gray-300 text-sm">30-45 minute discussion about your operational requirements and workforce needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Workforce Proposal</h4>
                      <p className="text-gray-300 text-sm">We provide a tailored workforce and service delivery proposal based on your requirements</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Deployment</h4>
                      <p className="text-gray-300 text-sm">Once agreed, we deploy experienced workforce with structured delivery coordination</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-[#D4AF37]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-lg">&#9993;</span>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:admin@t21services.co.uk" className="text-white hover:text-[#D4AF37] transition-colors">admin@t21services.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-lg">&#9742;</span>
                    <div>
                      <p className="text-sm text-gray-400">Telephone</p>
                      <a href="tel:+442033752061" className="text-white hover:text-[#D4AF37] transition-colors">+44 (0) 203 375 2061</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-lg">&#9906;</span>
                    <div>
                      <p className="text-sm text-gray-400">Registered Office</p>
                      <p className="text-white">64 Upper Parliament Street<br />Liverpool, L8 7LF, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/10 to-black border border-[#D4AF37]/30 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-3">Prefer to Call?</h4>
                <p className="text-gray-300 mb-4">Speak directly with our team</p>
                <a href="tel:+442033752061"
                  className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all">
                  Call +44 (0) 203 375 2061
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