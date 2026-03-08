'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SubmitCVPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    jobType: '',
    category: '',
    experience: '',
    salary: '',
    availability: '',
    linkedin: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CV Submission:', formData);
    alert('Thank you! Your CV has been submitted. We will review it and contact you within 48 hours.');
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Submit Your <span className="text-[#D4AF37]">CV</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Join our talent pool and get matched with your perfect opportunity
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>48-hour response time</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Personalized job matching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Career guidance included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Personal Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Doe"
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
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Liverpool, UK"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </div>

            {/* Job Preferences */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Job Preferences</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Job Type *
                  </label>
                  <select
                    name="jobType"
                    required
                    value={formData.jobType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-white">Select job type</option>
                    <option value="permanent" className="bg-gray-800 text-white">Permanent</option>
                    <option value="contract" className="bg-gray-800 text-white">Contract</option>
                    <option value="temporary" className="bg-gray-800 text-white">Temporary</option>
                    <option value="flexible" className="bg-gray-800 text-white">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-white">Select category</option>
                    <option value="healthcare" className="bg-gray-800 text-white">Healthcare</option>
                    <option value="it" className="bg-gray-800 text-white">IT & Technology</option>
                    <option value="business" className="bg-gray-800 text-white">Business & Admin</option>
                    <option value="other" className="bg-gray-800 text-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-white">Select experience</option>
                    <option value="0-1" className="bg-gray-800 text-white">0-1 years</option>
                    <option value="1-3" className="bg-gray-800 text-white">1-3 years</option>
                    <option value="3-5" className="bg-gray-800 text-white">3-5 years</option>
                    <option value="5-10" className="bg-gray-800 text-white">5-10 years</option>
                    <option value="10+" className="bg-gray-800 text-white">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Salary Expectations *
                  </label>
                  <input
                    type="text"
                    name="salary"
                    required
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="£30,000 - £40,000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Availability *
                  </label>
                  <select
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-white">When can you start?</option>
                    <option value="immediate" className="bg-gray-800 text-white">Immediately</option>
                    <option value="2weeks" className="bg-gray-800 text-white">2 weeks notice</option>
                    <option value="1month" className="bg-gray-800 text-white">1 month notice</option>
                    <option value="flexible" className="bg-gray-800 text-white">Flexible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Cover Letter</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Tell us about yourself and your career goals
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                  placeholder="Share your experience, skills, and what you're looking for in your next role..."
                />
              </div>

              <div className="mt-6 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#D4AF37]">Note:</strong> Please attach your CV document by emailing it to{' '}
                  <a href="mailto:careers@t21services.co.uk" className="text-[#D4AF37] hover:underline">
                    careers@t21services.co.uk
                  </a>
                  {' '}with reference to this submission.
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#D4AF37] text-black px-12 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
              >
                Submit Application
              </button>
              <p className="text-sm text-gray-400 mt-4">
                We'll review your application and contact you within 48 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Work With <span className="text-[#D4AF37]">T21?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Perfect Matches</h3>
              <p className="text-gray-300">
                We don't just find you a job - we find you the RIGHT job that matches your skills and goals
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Fast Placement</h3>
              <p className="text-gray-300">
                Average placement time of 2 weeks - we move quickly to get you into your new role
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Ongoing Support</h3>
              <p className="text-gray-300">
                Career advice, interview prep, and support throughout your job search journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
