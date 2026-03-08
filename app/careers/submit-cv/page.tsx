'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function SubmitCVPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    experience: '',
    availability: '',
    linkedin: '',
    coverLetter: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for registering your interest. We will review your details and contact you within 48 hours.');
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
            Register Your <span className="text-[#D4AF37]">Interest</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Join our workforce of experienced healthcare operational professionals
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>48-hour response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>NHS trust placements</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>Professional development</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="Last name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="+44 7XXX XXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Location *</label>
                  <input type="text" name="location" required value={formData.location} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="City, UK" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">LinkedIn Profile</label>
                  <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Experience and Preferences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Area of Experience *</label>
                  <select name="category" required value={formData.category} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                    <option value="">Select area</option>
                    <option value="rtt-validation">RTT Validation</option>
                    <option value="waiting-list">Waiting List Management</option>
                    <option value="patient-access">Patient Access Administration</option>
                    <option value="pathway-coordination">Pathway Coordination</option>
                    <option value="clinical-coding">Clinical Coding</option>
                    <option value="data-quality">Healthcare Data Quality</option>
                    <option value="medical-secretary">Medical Secretary</option>
                    <option value="healthcare-admin">Healthcare Administration</option>
                    <option value="multiple">Multiple Areas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Years of NHS Experience *</label>
                  <select name="experience" required value={formData.experience} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                    <option value="">Select experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Availability *</label>
                  <select name="availability" required value={formData.availability} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                    <option value="">When can you start?</option>
                    <option value="immediate">Immediately</option>
                    <option value="2weeks">2 weeks notice</option>
                    <option value="1month">1 month notice</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">About You</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Tell us about your healthcare operational experience</label>
                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                  placeholder="Describe your NHS experience, systems knowledge, specialties covered, and what you are looking for..." />
              </div>
              <div className="mt-6 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#D4AF37]">Note:</strong> Please also email your CV to{' '}
                  <a href="mailto:admin@t21services.co.uk" className="text-[#D4AF37] hover:underline">admin@t21services.co.uk</a>
                  {' '}referencing this submission.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-[#D4AF37] text-black px-12 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg">
                Register Interest
              </button>
              <p className="text-sm text-gray-400 mt-4">We will review your details and contact you within 48 hours</p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Why Join <span className="text-[#D4AF37]">T21 Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-3">NHS Trust Placements</h3>
              <p className="text-gray-300 text-sm">Work across 40+ NHS trusts gaining broad healthcare operational experience</p>
            </div>
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Professional Growth</h3>
              <p className="text-gray-300 text-sm">Access TQUK-approved training and ongoing professional development opportunities</p>
            </div>
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Supportive Team</h3>
              <p className="text-gray-300 text-sm">Work within a structured team with team lead oversight and quality assurance support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}