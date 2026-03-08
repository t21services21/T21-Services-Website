'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'healthcare', name: 'Healthcare', count: 5 },
    { id: 'it', name: 'IT & Technology', count: 4 },
    { id: 'business', name: 'Business', count: 3 }
  ];

  const jobs = [
    {
      id: 1,
      title: 'RTT Coordinator',
      category: 'healthcare',
      location: 'Liverpool, UK',
      type: 'Permanent',
      salary: '£28,000 - £35,000',
      description: 'Manage NHS referral to treatment pathways, ensure compliance with 18-week targets.',
      requirements: ['NHS experience', 'RTT knowledge', 'Data analysis skills'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Healthcare Administrator',
      category: 'healthcare',
      location: 'Manchester, UK',
      type: 'Permanent',
      salary: '£24,000 - £28,000',
      description: 'Support clinical teams with administrative tasks, patient records, and scheduling.',
      requirements: ['Admin experience', 'NHS knowledge', 'Excellent communication'],
      posted: '5 days ago'
    },
    {
      id: 3,
      title: 'Senior Software Developer',
      category: 'it',
      location: 'Remote',
      type: 'Permanent',
      salary: '£50,000 - £70,000',
      description: 'Build healthcare technology solutions using Python, React, and cloud platforms.',
      requirements: ['5+ years experience', 'Python/React', 'Healthcare domain knowledge'],
      posted: '1 week ago'
    },
    {
      id: 4,
      title: 'Data Analyst',
      category: 'it',
      location: 'London, UK',
      type: 'Contract',
      salary: '£400 - £500/day',
      description: 'Analyze healthcare data, create dashboards, support decision-making.',
      requirements: ['SQL/Python', 'Data visualization', 'Healthcare experience'],
      posted: '3 days ago'
    },
    {
      id: 5,
      title: 'Business Analyst',
      category: 'business',
      location: 'Birmingham, UK',
      type: 'Permanent',
      salary: '£35,000 - £45,000',
      description: 'Bridge business and technology, gather requirements, improve processes.',
      requirements: ['BA experience', 'Stakeholder management', 'Agile methodology'],
      posted: '1 day ago'
    },
    {
      id: 6,
      title: 'Clinical Support Worker',
      category: 'healthcare',
      location: 'Leeds, UK',
      type: 'Temporary',
      salary: '£12 - £15/hour',
      description: 'Provide direct patient care support in hospital or clinic settings.',
      requirements: ['Care certificate', 'Compassionate', 'Team player'],
      posted: '4 days ago'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Current <span className="text-[#D4AF37]">Opportunities</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading organizations across healthcare, IT, and business sectors
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="#jobs"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
            >
              Browse Jobs
            </Link>
            <Link 
              href="/careers/submit-cv"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Submit Your CV
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section id="jobs" className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        💼 {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        💰 {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        🕐 {job.posted}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/consultation"
                    className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-[#D4AF37] mb-2">Key Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <span 
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        ✓ {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Alerts */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't See Your <span className="text-[#D4AF37]">Perfect Role?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Submit your CV and we'll match you with opportunities as they become available
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/careers/submit-cv"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Submit Your CV
            </Link>
            <Link 
              href="/careers/advice"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Career Advice
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
