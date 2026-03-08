'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CareerAdvicePage() {
  const adviceCategories = [
    {
      icon: '📝',
      title: 'CV Writing Tips',
      description: 'Create a standout CV that gets you interviews',
      tips: [
        'Keep it concise - 2 pages maximum',
        'Use action verbs (managed, developed, achieved)',
        'Quantify achievements with numbers',
        'Tailor it to each job application',
        'Include relevant keywords from job description',
        'Proofread carefully - no typos!'
      ]
    },
    {
      icon: '💼',
      title: 'Interview Preparation',
      description: 'Ace your interviews with confidence',
      tips: [
        'Research the company thoroughly',
        'Prepare STAR method examples',
        'Practice common interview questions',
        'Prepare questions to ask the interviewer',
        'Dress professionally',
        'Arrive 10 minutes early'
      ]
    },
    {
      icon: '🎯',
      title: 'Job Search Strategy',
      description: 'Find opportunities faster and smarter',
      tips: [
        'Use multiple job boards and platforms',
        'Network on LinkedIn actively',
        'Set up job alerts for your criteria',
        'Apply within 48 hours of posting',
        'Follow up after applications',
        'Track all applications in a spreadsheet'
      ]
    },
    {
      icon: '💰',
      title: 'Salary Negotiation',
      description: 'Get the compensation you deserve',
      tips: [
        'Research market rates for your role',
        'Know your minimum acceptable salary',
        'Let them make the first offer',
        'Negotiate total package, not just salary',
        'Be confident but realistic',
        'Get everything in writing'
      ]
    }
  ];

  const commonQuestions = [
    {
      question: 'Tell me about yourself',
      answer: 'Focus on your professional journey, key achievements, and why you\'re interested in this role. Keep it to 2-3 minutes and end with why you\'re excited about this opportunity.'
    },
    {
      question: 'What are your strengths?',
      answer: 'Choose 2-3 strengths relevant to the job. Provide specific examples of how you\'ve demonstrated these strengths in previous roles.'
    },
    {
      question: 'What are your weaknesses?',
      answer: 'Choose a real weakness but show how you\'re working to improve it. Avoid clichés like "I\'m a perfectionist."'
    },
    {
      question: 'Why do you want this job?',
      answer: 'Show you\'ve researched the company and role. Connect your skills and goals to what the position offers. Be genuine and specific.'
    },
    {
      question: 'Where do you see yourself in 5 years?',
      answer: 'Show ambition but be realistic. Align your goals with potential growth in the company. Avoid saying you want their boss\'s job!'
    }
  ];

  const resources = [
    {
      title: 'CV Templates',
      description: 'Professional CV templates for different industries',
      icon: '📄',
      action: 'Download Templates'
    },
    {
      title: 'Interview Checklist',
      description: 'Everything you need before, during, and after interviews',
      icon: '✅',
      action: 'Get Checklist'
    },
    {
      title: 'Salary Guide 2026',
      description: 'Current salary ranges for healthcare operational roles',
      icon: '💷',
      action: 'View Guide'
    },
    {
      title: 'LinkedIn Optimization',
      description: 'Make your LinkedIn profile stand out to recruiters',
      icon: '🔗',
      action: 'Learn More'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Career <span className="text-[#D4AF37]">Advice</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Expert guidance to help you land your dream job and advance your career
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/careers"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
            >
              Browse Jobs
            </Link>
            <Link 
              href="/consultation"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Get Personal Advice
            </Link>
          </div>
        </div>
      </section>

      {/* Advice Categories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Essential Career <span className="text-[#D4AF37]">Tips</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {adviceCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Interview Questions */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Common Interview <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <div className="space-y-6">
            {commonQuestions.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">
                  Q: {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">A:</strong> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Free Career <span className="text-[#D4AF37]">Resources</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37] transition-all"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-[#D4AF37] mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                <Link
                  href="/consultation"
                  className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-sm"
                >
                  {resource.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAR Method */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Master the <span className="text-[#D4AF37]">STAR Method</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            The best way to answer behavioral interview questions
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                S
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Situation</h3>
              <p className="text-gray-300 text-sm">
                Set the context and background of your example
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                T
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Task</h3>
              <p className="text-gray-300 text-sm">
                Explain the challenge or responsibility you faced
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                A
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Action</h3>
              <p className="text-gray-300 text-sm">
                Describe the specific steps you took to address it
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                R
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Result</h3>
              <p className="text-gray-300 text-sm">
                Share the outcome and what you learned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need <span className="text-[#D4AF37]">Personal Guidance?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation with our career experts
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/careers/submit-cv"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Submit Your CV
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
