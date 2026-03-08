'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 6 },
    { id: 'validation', name: 'RTT & Validation', count: 2 },
    { id: 'patient-access', name: 'Patient Access', count: 2 },
    { id: 'data', name: 'Coding & Data', count: 2 }
  ];

  const jobs = [
    {
      id: 1,
      title: 'RTT Validator',
      category: 'validation',
      location: 'Remote / NHS Trust Sites',
      type: 'Contract',
      description: 'Experienced RTT validator supporting pathway validation, waiting list management and elective recovery programmes across NHS trusts.',
      requirements: ['RTT validation experience', 'NHS PAS systems knowledge', 'Pathway management understanding', 'Attention to detail'],
      posted: 'Ongoing recruitment'
    },
    {
      id: 2,
      title: 'Waiting List Coordinator',
      category: 'validation',
      location: 'Remote / NHS Trust Sites',
      type: 'Contract',
      description: 'Experienced waiting list coordinator supporting PTL management, pathway tracking and elective recovery operational programmes.',
      requirements: ['Waiting list management experience', 'NHS operational knowledge', 'Data analysis skills', 'Multi-specialty experience'],
      posted: 'Ongoing recruitment'
    },
    {
      id: 3,
      title: 'Patient Access Officer',
      category: 'patient-access',
      location: 'Remote / NHS Trust Sites',
      type: 'Contract',
      description: 'Experienced patient access officer supporting referral management, appointment booking and patient pathway administration.',
      requirements: ['Patient access experience', 'NHS booking systems', 'Referral processing', 'Patient communication skills'],
      posted: 'Ongoing recruitment'
    },
    {
      id: 4,
      title: 'Pathway Coordinator',
      category: 'patient-access',
      location: 'Remote / NHS Trust Sites',
      type: 'Contract',
      description: 'Experienced pathway coordinator supporting the full patient pathway lifecycle from referral through to discharge and pathway closure.',
      requirements: ['Pathway coordination experience', 'NHS systems knowledge', 'Clinical correspondence', 'Multi-specialty working'],
      posted: 'Ongoing recruitment'
    },
    {
      id: 5,
      title: 'Clinical Coder',
      category: 'data',
      location: 'Remote / NHS Trust Sites',
      type: 'Contract',
      description: 'Experienced clinical coder supporting healthcare data quality and coding accuracy across NHS trust specialties.',
      requirements: ['Clinical coding qualification', 'ICD-10 / OPCS-4 experience', 'NHS coding standards', 'Multi-specialty coding'],
      posted: 'Ongoing recruitment'
    },
    {
      id: 6,
      title: 'Data Quality Analyst',
      category: 'data',
      location: 'Remote / NHS Trust Sites',
      type: 'Contract',
      description: 'Experienced data quality analyst supporting PAS data cleansing, duplicate record management and healthcare information accuracy.',
      requirements: ['Healthcare data experience', 'PAS systems knowledge', 'Data cleansing skills', 'Reporting and analysis'],
      posted: 'Ongoing recruitment'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Join Our <span className="text-[#D4AF37]">Workforce</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Opportunities for experienced healthcare operational professionals across NHS trusts
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#jobs" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all">
              View Opportunities
            </Link>
            <Link href="/careers/submit-cv" className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all">
              Register Your Interest
            </Link>
          </div>
        </div>
      </section>

      <section id="jobs" className="py-12 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {jobCategories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id ? 'bg-[#D4AF37] text-black' : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}>
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="glass-card hover:border-[#D4AF37] transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all whitespace-nowrap">
                    Express Interest
                  </Link>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">
            Why Work With <span className="text-[#D4AF37]">T21 Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Diverse NHS Experience</h3>
              <p className="text-gray-300 text-sm">Work across 40+ NHS trusts gaining broad operational experience across specialties and systems</p>
            </div>
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Professional Development</h3>
              <p className="text-gray-300 text-sm">Access to TQUK-approved training programmes and continuous professional development</p>
            </div>
            <div className="glass-card text-center">
              <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Flexible Opportunities</h3>
              <p className="text-gray-300 text-sm">Remote and on-site roles with flexible arrangements across healthcare operational services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Don't See Your <span className="text-[#D4AF37]">Role?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Register your interest and we will contact you when suitable opportunities arise
          </p>
          <Link href="/careers/submit-cv" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg">
            Register Your Interest
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}