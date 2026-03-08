'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Recruitment & <span className="text-[#D4AF37]">Staffing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Connecting exceptional talent with leading organizations across healthcare and business sectors
            </p>
            <Link 
              href="/services"
              className="text-[#D4AF37] hover:text-[#FFD700] transition-colors inline-flex items-center gap-2"
            >
              ← Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Recruitment Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Temporary Staffing */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all group">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Temporary Staffing</h3>
              <p className="text-gray-300 mb-6">
                Flexible staffing solutions to meet your short-term and project-based needs with qualified professionals.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Quick placement (24-48 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Pre-screened candidates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Flexible contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">All sectors covered</span>
                </li>
              </ul>
              <Link 
                href="/consultation"
                className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
              >
                Request Staff
              </Link>
            </div>

            {/* Permanent Placement */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all group">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Permanent Placement</h3>
              <p className="text-gray-300 mb-6">
                Find the perfect long-term fit for your organization with our comprehensive permanent recruitment service.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Thorough candidate vetting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Cultural fit assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">90-day guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Onboarding support</span>
                </li>
              </ul>
              <Link 
                href="/consultation"
                className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
              >
                Hire Talent
              </Link>
            </div>

            {/* Executive Search */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all group">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Executive Search</h3>
              <p className="text-gray-300 mb-6">
                Specialized recruitment for senior leadership and executive positions across all industries.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">C-suite recruitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Confidential search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Market mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Leadership assessment</span>
                </li>
              </ul>
              <Link 
                href="/consultation"
                className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
              >
                Find Leaders
              </Link>
            </div>

            {/* NHS Specialists */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all group">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">NHS Specialists</h3>
              <p className="text-gray-300 mb-6">
                Expert recruitment for NHS and healthcare positions, from administrators to clinical staff.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">RTT Coordinators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Healthcare Administrators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">Clinical Support Staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span className="text-gray-300">DBS & compliance checks</span>
                </li>
              </ul>
              <Link 
                href="/consultation"
                className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
              >
                Hire NHS Staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            For <span className="text-[#D4AF37]">Job Seekers</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center hover:border-[#D4AF37] transition-all group">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Submit Your CV</h3>
              <p className="text-gray-300 mb-6">
                Upload your CV and let us match you with the perfect opportunity
              </p>
              <Link 
                href="/careers/submit-cv"
                className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Upload CV
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center hover:border-[#D4AF37] transition-all">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Browse Jobs</h3>
              <p className="text-gray-300 mb-6">
                Explore current vacancies across healthcare, IT, and business sectors
              </p>
              <Link 
                href="/careers"
                className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                View Jobs
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center hover:border-[#D4AF37] transition-all">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Career Advice</h3>
              <p className="text-gray-300 mb-6">
                Get expert guidance on CV writing, interviews, and career development
              </p>
              <Link 
                href="/careers/advice"
                className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Get Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Access Talent Portal */}
      <section className="py-12 px-4 bg-black border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Access Our <span className="text-[#D4AF37]">Talent Portal</span>
          </h3>
          <p className="text-gray-300 mb-6">
            Browse current vacancies, submit your CV, or post job openings
          </p>
          <a 
            href="https://t21-healthcare-platform.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
          >
            💼 Access Talent Portal
          </a>
        </div>
      </section>

      {/* Success Rate */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Success Rate</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">95%</div>
              <p className="text-gray-300">Placement Success</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">48hrs</div>
              <p className="text-gray-300">Average Fill Time</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
              <p className="text-gray-300">Placements Made</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">50+</div>
              <p className="text-gray-300">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Success <span className="text-[#D4AF37]">Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "T21 found us the perfect RTT Coordinator within 48 hours. Their understanding of NHS requirements is exceptional. Highly recommend!"
              </p>
              <p className="text-[#D4AF37] font-bold">Dr. Emma Williams</p>
              <p className="text-gray-400 text-sm">HR Director, NHS Trust</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "After months of searching, T21 helped me land my dream job in healthcare administration. Their support throughout the process was outstanding!"
              </p>
              <p className="text-[#D4AF37] font-bold">James Okonkwo</p>
              <p className="text-gray-400 text-sm">Healthcare Administrator</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "We've been using T21 for all our IT recruitment needs. They consistently deliver quality candidates who are the right fit for our organization."
              </p>
              <p className="text-[#D4AF37] font-bold">David Chen</p>
              <p className="text-gray-400 text-sm">CTO, Tech Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            How <span className="text-[#D4AF37]">It Works</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-8">For Employers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Submit Requirements</h4>
                    <p className="text-gray-300 text-sm">Tell us about the role, skills needed, and your timeline</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">We Source Candidates</h4>
                    <p className="text-gray-300 text-sm">Access our database and network to find perfect matches</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Review & Interview</h4>
                    <p className="text-gray-300 text-sm">We present shortlisted candidates, you interview and select</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Hire & Onboard</h4>
                    <p className="text-gray-300 text-sm">We handle paperwork, you welcome your new team member</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-8">For Job Seekers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Submit Your CV</h4>
                    <p className="text-gray-300 text-sm">Upload your CV and tell us about your career goals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">We Match You</h4>
                    <p className="text-gray-300 text-sm">Our team finds opportunities that fit your skills and goals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Interview Prep</h4>
                    <p className="text-gray-300 text-sm">We coach you and prepare you for interviews</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-xl font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Land Your Job</h4>
                    <p className="text-gray-300 text-sm">Accept offer and start your new career journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How quickly can you fill a position?</h3>
              <p className="text-gray-300">For temporary roles, we can provide candidates within 24-48 hours. Permanent placements typically take 1-2 weeks depending on the role complexity and requirements.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What are your fees?</h3>
              <p className="text-gray-300">Our fees vary based on the service type and role level. Temporary staffing is charged as a percentage markup. Permanent placement fees are typically 15-20% of first-year salary. Contact us for a detailed quote.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you specialize in any sectors?</h3>
              <p className="text-gray-300">Yes! We specialize in healthcare (NHS), IT, business administration, and professional services. Our team has deep expertise in these sectors and strong networks.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What if the candidate doesn't work out?</h3>
              <p className="text-gray-300">We offer a 90-day guarantee on permanent placements. If the candidate leaves or is terminated within 90 days, we'll find a replacement at no additional cost.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How do you screen candidates?</h3>
              <p className="text-gray-300">All candidates undergo thorough screening including CV verification, reference checks, skills assessment, and interviews. For NHS roles, we also handle DBS checks and compliance verification.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can you help with visa sponsorship?</h3>
              <p className="text-gray-300">Yes! We can assist with visa sponsorship processes and have experience placing international candidates. We'll guide you through the requirements and paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your <span className="text-[#D4AF37]">Perfect Match?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're hiring or looking for your next role, we're here to help
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              For Employers
            </Link>
            <Link 
              href="/consultation"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              For Job Seekers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
