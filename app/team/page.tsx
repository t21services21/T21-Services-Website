'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-[#D4AF37]">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced healthcare operational professionals delivering quality services across NHS trusts
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Leadership <span className="text-[#D4AF37]">Team</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-28 h-28 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <span className="text-[#D4AF37] text-3xl font-playfair font-bold">TO</span>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-1">Ambassador Tosin Owonifari</h3>
                  <p className="text-[#D4AF37] font-semibold mb-4">Founder and Chief Executive Officer</p>
                  <p className="text-gray-300 leading-relaxed">
                    Over 14 years of direct healthcare operational experience across 40+ NHS trusts. Specialist in RTT validation, patient access administration, waiting list management and healthcare data quality operations.
                  </p>
                  <div className="mt-4">
                    <a href="https://www.linkedin.com/in/tosin-owonifari" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors text-sm">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Operational <span className="text-[#D4AF37]">Workforce</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#D4AF37] text-2xl font-bold">50+</span>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Experienced Workforce</h3>
              <p className="text-gray-300 text-sm">
                Experienced healthcare operational staff across RTT validation, patient access, clinical coding and data quality
              </p>
            </div>

            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#D4AF37] text-xl font-bold">TL</span>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Team Lead Oversight</h3>
              <p className="text-gray-300 text-sm">
                Structured delivery with team leads providing quality oversight, coordination and performance management
              </p>
            </div>

            <div className="glass-card text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#D4AF37] text-xl font-bold">QA</span>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Quality Assurance</h3>
              <p className="text-gray-300 text-sm">
                Dedicated quality assurance supporting accuracy monitoring, work sampling and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Workforce <span className="text-[#D4AF37]">Compliance</span>
          </h2>
          <div className="glass-card max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-6">
              All T21 Services workforce members deployed to healthcare organisations are fully compliance-checked and meet NHS operational requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['DBS checked', 'Information Governance trained', 'Data Protection and GDPR compliant', 'NHS Caldicott Principles trained', 'Safeguarding trained', 'Cyber Security Awareness trained', 'Patient Confidentiality trained', 'Right to Work verified'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">&#10003;</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Join Our <span className="text-[#D4AF37]">Workforce</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              T21 Services is always looking for experienced healthcare operational professionals to join our workforce
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="glass-card text-center">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Healthcare Experience</h3>
                <p className="text-gray-300 text-sm">Work across diverse NHS trusts and healthcare organisations</p>
              </div>
              <div className="glass-card text-center">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Professional Development</h3>
                <p className="text-gray-300 text-sm">Access to TQUK-approved training and development programmes</p>
              </div>
              <div className="glass-card text-center">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Flexible Working</h3>
                <p className="text-gray-300 text-sm">Remote and on-site opportunities across healthcare operations</p>
              </div>
            </div>
            <Link href="/careers" className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg">
              View Opportunities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}