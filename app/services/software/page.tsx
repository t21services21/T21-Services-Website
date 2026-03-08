'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

const IconMap: Record<string, JSX.Element> = {
  hospital: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  shield: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  lock: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  clipboard: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
  calendar: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  code: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  chart: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  cog: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  robot: <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
};

export default function SoftwarePage() {
  const platforms = [
    {
      icon: 'hospital',
      title: 'RTT Validation Platform',
      description: 'Comprehensive NHS Referral to Treatment pathway validation and monitoring system',
      features: [
        'Automated RTT pathway validation',
        'Real-time breach monitoring',
        'Patient tracking and management',
        'Comprehensive reporting and analytics',
        'Clock pause validation',
        'Data quality checks',
        'Integration with NHS systems'
      ]
    },
    {
      icon: 'shield',
      title: 'SOC Training Portal',
      description: 'Security Operations Center training and cybersecurity education platform',
      features: [
        'Interactive cybersecurity courses',
        'Hands-on lab environments',
        'Threat detection training',
        'Incident response simulations',
        'Progress tracking and certification',
        'Real-world security scenarios',
        'Continuous learning paths'
      ]
    },
    {
      icon: 'lock',
      title: 'Cybersecurity LMS',
      description: 'Learning Management System for information security and compliance training',
      features: [
        'Information Governance training',
        'GDPR compliance modules',
        'Cyber security awareness',
        'Data protection training',
        'Phishing simulation',
        'Compliance tracking',
        'Certificate management'
      ]
    },
    {
      icon: 'clipboard',
      title: 'Partial Booking List System',
      description: 'NHS patient waiting list management with breach risk monitoring',
      features: [
        'Patient waiting list management',
        'Breach risk monitoring',
        'Automated email notifications',
        'Data cleansing tools',
        'Audit trail logging',
        'Specialty-based filtering',
        'NHS compliance reporting'
      ]
    },
    {
      icon: 'calendar',
      title: 'Advanced Booking System',
      description: 'Comprehensive NHS appointment scheduling and clinic management',
      features: [
        'Multi-clinic scheduling',
        'Capacity planning',
        'Appointment management',
        'Patient notifications',
        'Waiting list integration',
        'Resource optimization',
        'Performance analytics'
      ]
    }
  ];

  const services = [
    {
      category: 'Healthcare Solutions',
      icon: 'hospital',
      items: [
        'NHS RTT Pathway Management',
        'Patient Tracking Systems',
        'Healthcare Data Analytics',
        'Clinical Management Systems',
        'Appointment Scheduling',
        'Waiting List Management',
        'Healthcare Compliance Tools'
      ]
    },
    {
      category: 'Cybersecurity Solutions',
      icon: 'lock',
      items: [
        'Security Operations Center (SOC) Tools',
        'Threat Detection Systems',
        'Incident Response Platforms',
        'Security Training Platforms',
        'Vulnerability Management',
        'Security Awareness Training',
        'Compliance Management'
      ]
    },
    {
      category: 'Business Automation',
      icon: 'cog',
      items: [
        'Process Automation',
        'Workflow Management',
        'Document Management Systems',
        'Business Intelligence Tools',
        'Reporting and Analytics',
        'Integration Services',
        'API Development'
      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: 'robot',
      items: [
        'AI Integration Services',
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making',
        'Data Mining and Analysis',
        'Intelligent Automation'
      ]
    },
    {
      category: 'Custom Development',
      icon: 'code',
      items: [
        'Web Application Development',
        'Mobile App Development',
        'Desktop Software',
        'Cloud Solutions',
        'Database Design',
        'System Integration',
        'Legacy System Modernization'
      ]
    },
    {
      category: 'Data Solutions',
      icon: 'chart',
      items: [
        'Data Analytics Platforms',
        'Business Intelligence',
        'Data Warehousing',
        'ETL Development',
        'Data Quality Management',
        'Real-time Analytics',
        'Data Visualization'
      ]
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
            <div className="w-20 h-20 mx-auto mb-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 text-[#D4AF37]">{IconMap['robot']}</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Software & <span className="text-[#D4AF37]">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Custom software development, AI automation, and innovative technology solutions for healthcare, cybersecurity, and business
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

      {/* Our Platforms */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our <span className="text-[#D4AF37]">Platforms</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Proven software solutions built and deployed for real-world applications
          </p>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                      <div className="w-10 h-10 text-[#D4AF37]">{IconMap[platform.icon]}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{platform.title}</h3>
                    <p className="text-gray-300 mb-6">{platform.description}</p>
                    <Link 
                      href="/contact"
                      className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD700] transition-all"
                    >
                      Request Demo
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold text-[#D4AF37] mb-4">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {platform.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] mt-1">✓</span>
                          <span className="text-gray-300">{feature}</span>
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

      {/* Software Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Software <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Comprehensive software development and technology solutions across multiple domains
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all group">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                  <div className="w-10 h-10 text-[#D4AF37]">{IconMap[service.icon]}</div>
                </div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-4">{service.category}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Technology Stack</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Python</h3>
              <p className="text-gray-300 text-sm">Django, Flask, FastAPI, Streamlit</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">JavaScript</h3>
              <p className="text-gray-300 text-sm">React, Next.js, Node.js, TypeScript</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Cloud</h3>
              <p className="text-gray-300 text-sm">AWS, Azure, Google Cloud</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Databases</h3>
              <p className="text-gray-300 text-sm">PostgreSQL, MySQL, MongoDB, SQLite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-[#D4AF37]">T21 Software Solutions?</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Proven Track Record</h3>
              <p className="text-gray-300">
                Successfully deployed platforms serving NHS and enterprise clients
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Security First</h3>
              <p className="text-gray-300">
                Built with security, compliance, and data protection at the core
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Agile Development</h3>
              <p className="text-gray-300">
                Fast delivery with iterative development and continuous improvement
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Full Support</h3>
              <p className="text-gray-300">
                Ongoing maintenance, updates, and technical support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Technology Portal */}
      <section className="py-12 px-4 bg-black border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Access Our <span className="text-[#D4AF37]">Technology Portal</span>
          </h3>
          <p className="text-gray-300 mb-6">
            Explore our platforms, request demos, and access client dashboards
          </p>
          <a 
            href="https://t21-healthcare-platform.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
          >
            🤖 Access Technology Portal
          </a>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Client <span className="text-[#D4AF37]">Testimonials</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The RTT Validation Platform has transformed how we manage patient pathways. It's saved us countless hours and significantly reduced breaches."
              </p>
              <p className="text-[#D4AF37] font-bold">NHS Trust Manager</p>
              <p className="text-gray-400 text-sm">Major NHS Trust</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "T21's custom software solution automated our entire workflow. The ROI was evident within the first month. Exceptional work!"
              </p>
              <p className="text-[#D4AF37] font-bold">Operations Director</p>
              <p className="text-gray-400 text-sm">Healthcare Provider</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The SOC training platform is exactly what we needed. Comprehensive, user-friendly, and effective. Our team's skills have improved dramatically."
              </p>
              <p className="text-[#D4AF37] font-bold">Security Manager</p>
              <p className="text-gray-400 text-sm">Financial Services Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Development <span className="text-[#D4AF37]">Process</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">Understand your needs, goals, and technical requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Design</h3>
              <p className="text-gray-300 text-sm">Create wireframes, mockups, and technical architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Develop</h3>
              <p className="text-gray-300 text-sm">Build your solution with agile methodology and regular updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Test</h3>
              <p className="text-gray-300 text-sm">Rigorous testing for quality, security, and performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Deploy & Support</h3>
              <p className="text-gray-300 text-sm">Launch your solution and provide ongoing maintenance</p>
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
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How long does development take?</h3>
              <p className="text-gray-300">Project timelines vary based on complexity. Simple applications take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during discovery.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What technologies do you use?</h3>
              <p className="text-gray-300">We use modern, proven technologies including Python, React, Next.js, Node.js, and cloud platforms (AWS, Azure). We select the best tech stack for your specific needs.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-300">Yes! We offer comprehensive support packages including bug fixes, updates, security patches, and feature enhancements. Support is available 24/7 for critical systems.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can you integrate with existing systems?</h3>
              <p className="text-gray-300">Absolutely! We specialize in system integration and can connect your new solution with existing databases, APIs, and third-party services seamlessly.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Is my data secure?</h3>
              <p className="text-gray-300">Security is our top priority. We implement industry-standard encryption, secure authentication, regular security audits, and comply with GDPR and other regulations.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can I request changes during development?</h3>
              <p className="text-gray-300">Yes! We use agile methodology which allows for flexibility. We provide regular demos and incorporate feedback throughout the development process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your <span className="text-[#D4AF37]">Solution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your software needs and create a custom solution
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/consultation"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Request Consultation
            </Link>
            <a 
              href="https://t21-healthcare-platform.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Access Portal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
