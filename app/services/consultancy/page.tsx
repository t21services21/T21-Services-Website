'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function ConsultancyPage() {
  const services = [
    {
      icon: '💰',
      title: 'Financial Management Consultancy',
      sicCode: '70221',
      description: 'Strategic financial planning and management services',
      offerings: [
        'Financial planning & strategy',
        'Budget management & optimization',
        'Financial restructuring',
        'Cash flow optimization',
        'Investment planning',
        'Financial risk management',
        'Cost reduction strategies'
      ]
    },
    {
      icon: '📊',
      title: 'Management Consultancy',
      sicCode: '70229',
      description: 'Comprehensive business management and strategy consulting',
      offerings: [
        'Strategic business planning',
        'Organizational development',
        'Change management',
        'Performance improvement',
        'Business process optimization',
        'Operational efficiency',
        'Growth strategy development'
      ]
    },
    {
      icon: '💻',
      title: 'IT Consultancy',
      sicCode: '62020',
      description: 'Technology strategy and digital transformation consulting',
      offerings: [
        'Digital transformation strategy',
        'Technology roadmap planning',
        'IT infrastructure consulting',
        'Software selection & implementation',
        'Cybersecurity consulting',
        'Cloud migration strategy',
        'IT governance & compliance'
      ]
    },
    {
      icon: '🤝',
      title: 'Business Support Services',
      sicCode: '82990',
      description: 'Comprehensive business administration and operational support',
      offerings: [
        'Business administration',
        'Operational support services',
        'Process automation consulting',
        'Efficiency improvement',
        'Quality management systems',
        'Business continuity planning',
        'Vendor management'
      ]
    },
    {
      icon: '👥',
      title: 'HR & Employment Consultancy',
      sicCode: '78109',
      description: 'Human resources strategy and workforce planning',
      offerings: [
        'Workforce planning & strategy',
        'Talent acquisition consulting',
        'HR policy development',
        'Employee relations advisory',
        'Performance management systems',
        'Organizational restructuring',
        'Compensation & benefits design'
      ]
    },
    {
      icon: '🎓',
      title: 'Education & Training Consultancy',
      sicCode: '85590',
      description: 'Learning and development strategy consulting',
      offerings: [
        'Training needs analysis',
        'Curriculum development',
        'Learning & development strategy',
        'Skills gap analysis',
        'Training program design',
        'E-learning implementation',
        'Training ROI measurement'
      ]
    },
    {
      icon: '⚙️',
      title: 'IT Service Management',
      sicCode: '62090',
      description: 'Information technology service delivery and management',
      offerings: [
        'IT service delivery',
        'Help desk & support services',
        'System maintenance',
        'IT project management',
        'Service level management',
        'IT asset management',
        'Technology support services'
      ]
    }
  ];

  const industries = [
    {
      icon: '🏥',
      name: 'Healthcare & NHS',
      description: 'Specialized consulting for healthcare organizations and NHS trusts'
    },
    {
      icon: '🏦',
      name: 'Financial Services',
      description: 'Banking, insurance, and financial institutions consulting'
    },
    {
      icon: '🏭',
      name: 'Manufacturing',
      description: 'Process optimization and operational excellence'
    },
    {
      icon: '🛒',
      name: 'Retail & E-commerce',
      description: 'Digital transformation and customer experience'
    },
    {
      icon: '🎓',
      name: 'Education',
      description: 'Educational institutions and training providers'
    },
    {
      icon: '🏛️',
      name: 'Public Sector',
      description: 'Government and public service organizations'
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">📊</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Business <span className="text-[#D4AF37]">Consultancy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Strategic planning, digital transformation, and expert advisory services for organizational growth and excellence
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

      {/* Registered Services */}
      <section className="py-12 px-4 bg-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-2">Registered with Companies House</p>
          <p className="text-[#D4AF37] font-bold">7 Registered Business Activities (SIC Codes)</p>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our <span className="text-[#D4AF37]">Consultancy Services</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Comprehensive business consulting across all major business functions
          </p>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-400 mb-3">SIC Code: {service.sicCode}</p>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <Link 
                      href="/contact"
                      className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
                    >
                      Get Consultation
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold text-[#D4AF37] mb-4">What We Offer:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.offerings.map((offering, oIndex) => (
                        <div key={oIndex} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">✓</span>
                          <span className="text-gray-300">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Industries We <span className="text-[#D4AF37]">Serve</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all text-center">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Approach</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">1. Assess</h3>
              <p className="text-gray-300">
                Comprehensive analysis of your current situation and challenges
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">2. Plan</h3>
              <p className="text-gray-300">
                Develop tailored strategies and actionable roadmaps
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">3. Implement</h3>
              <p className="text-gray-300">
                Execute solutions with hands-on support and guidance
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">4. Optimize</h3>
              <p className="text-gray-300">
                Continuous improvement and performance monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-[#D4AF37]">T21 Consultancy?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Results-Driven</h3>
              <p className="text-gray-300">
                Focused on delivering measurable outcomes and ROI
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Experienced consultants across multiple industries
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Partnership Approach</h3>
              <p className="text-gray-300">
                We work alongside you as trusted partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Client <span className="text-[#D4AF37]">Success Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "T21's strategic planning helped us achieve 40% revenue growth in 12 months. Their insights and guidance were invaluable to our transformation."
              </p>
              <p className="text-[#D4AF37] font-bold">CEO, Healthcare Provider</p>
              <p className="text-gray-400 text-sm">Private Healthcare Company</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The digital transformation strategy they developed saved us £200K annually and improved our operational efficiency by 60%."
              </p>
              <p className="text-[#D4AF37] font-bold">Operations Director</p>
              <p className="text-gray-400 text-sm">Manufacturing Company</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Their HR consultancy transformed our recruitment process. We reduced time-to-hire by 50% and improved retention by 35%."
              </p>
              <p className="text-[#D4AF37] font-bold">HR Director</p>
              <p className="text-gray-400 text-sm">Financial Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What types of businesses do you work with?</h3>
              <p className="text-gray-300">We work with organizations of all sizes from startups to large enterprises across healthcare, finance, manufacturing, retail, education, and public sector.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How long does a typical consultancy project take?</h3>
              <p className="text-gray-300">Project duration varies based on scope. Strategic planning may take 4-8 weeks, while digital transformation can take 3-6 months. We provide detailed timelines during initial consultation.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What are your fees?</h3>
              <p className="text-gray-300">Fees vary based on project scope, complexity, and duration. We offer flexible pricing models including project-based, retainer, and hourly rates. Contact us for a customized quote.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you provide ongoing support after the project?</h3>
              <p className="text-gray-300">Yes! We offer ongoing advisory services, implementation support, and follow-up consultations to ensure long-term success of our recommendations.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What makes T21 different from other consultancies?</h3>
              <p className="text-gray-300">We combine deep industry expertise with practical, actionable solutions. We don't just provide reports - we work alongside you to implement changes and achieve measurable results.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can you help with compliance and regulatory requirements?</h3>
              <p className="text-gray-300">Absolutely! We have extensive experience with regulatory compliance including GDPR, industry-specific regulations, and quality standards. We ensure your business meets all requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform <span className="text-[#D4AF37]">Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your challenges and create a strategy for success
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Book Consultation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
