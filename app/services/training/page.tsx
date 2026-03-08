'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function TrainingPage() {
  // Category-specific images
  const categoryImages: { [key: string]: string } = {
    'Healthcare & NHS': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    'Cybersecurity & IT Security': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    'Data & Analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    'Business Analysis & Management': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    'Software Development & Testing': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    'Financial & Compliance': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    'Digital & Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'Leadership & Professional Skills': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
  };

  const tqukQualifications = [
    {
      icon: '🏥',
      title: 'Understanding RTT and Hospital Administration',
      code: 'PDLC-01-039',
      level: 'Bespoke Endorsed',
      description: 'Comprehensive TQUK-endorsed training in NHS Referral to Treatment pathways and hospital administration'
    },
    {
      icon: '📝',
      title: 'Functional Skills English Level 1',
      code: '610/2626/0',
      level: 'Level 1 (RQF)',
      description: 'Essential English language skills for work and everyday life'
    },
    {
      icon: '📝',
      title: 'Functional Skills English Level 2',
      code: '610/2625/6',
      level: 'Level 2 (RQF)',
      description: 'Advanced English language skills for professional environments'
    },
    {
      icon: '🔢',
      title: 'Functional Skills Maths Level 1',
      code: '610/2623/2',
      level: 'Level 1 (RQF)',
      description: 'Essential mathematics skills for work and everyday life'
    },
    {
      icon: '🔢',
      title: 'Functional Skills Maths Level 2',
      code: '610/2624/4',
      level: 'Level 2 (RQF)',
      description: 'Advanced mathematics skills for professional environments'
    },
    {
      icon: '🤝',
      title: 'Certificate in Customer Service',
      code: '603/3896/7',
      level: 'Level 2 (RQF)',
      description: 'Professional customer service skills and best practices'
    },
    {
      icon: '💻',
      title: 'Certificate in IT User Skills',
      code: '603/3046/8',
      level: 'Level 2 (RQF)',
      description: 'Essential IT skills for modern workplace environments'
    },
    {
      icon: '👴',
      title: 'Certificate in Preparing to Work in Adult Social Care',
      code: '601/4040/9',
      level: 'Level 2 (RQF)',
      description: 'Foundation training for careers in adult social care'
    },
    {
      icon: '📊',
      title: 'Certificate in Principles of Business Administration',
      code: '603/2949/X',
      level: 'Level 2 (RQF)',
      description: 'Core business administration principles and practices'
    },
    {
      icon: '🎓',
      title: 'Certificate in Supporting Teaching and Learning in Schools',
      code: '601/2731/4',
      level: 'Level 3 (RQF)',
      description: 'Advanced qualification for teaching support roles'
    },
    {
      icon: '🏥',
      title: 'Diploma in Adult Care',
      code: '610/1703/6',
      level: 'Level 3 (RQF)',
      description: 'Comprehensive qualification for adult care professionals'
    }
  ];

  const professionalCourses = [
    {
      category: 'Healthcare & NHS',
      courses: [
        { icon: '🏥', title: 'NHS RTT Coordinator', description: 'Specialist training in RTT pathway management and NHS administration' },
        { icon: '🏥', title: 'Hospital Administration', description: 'Comprehensive healthcare administration and management' },
        { icon: '🏥', title: 'Healthcare Data Management', description: 'Patient data systems and healthcare information management' },
        { icon: '🏥', title: 'Clinical Coding', description: 'Medical coding and classification systems' }
      ]
    },
    {
      category: 'Cybersecurity & IT Security',
      courses: [
        { icon: '🔒', title: 'SOC Analyst Training', description: 'Security Operations Center analyst skills and threat detection' },
        { icon: '🔒', title: 'Cybersecurity Fundamentals', description: 'Core cybersecurity principles and best practices' },
        { icon: '🔒', title: 'Information Security', description: 'Information security management and governance' },
        { icon: '🔒', title: 'Incident Response', description: 'Cybersecurity incident handling and response procedures' },
        { icon: '🔒', title: 'Threat Intelligence', description: 'Cyber threat analysis and intelligence gathering' },
        { icon: '🔒', title: 'Network Security', description: 'Network protection and security architecture' }
      ]
    },
    {
      category: 'Data & Analytics',
      courses: [
        { icon: '📊', title: 'Data Science', description: 'Machine learning, statistical modeling, and data analysis' },
        { icon: '📊', title: 'Data Analyst', description: 'Data visualization, SQL, Excel, and business intelligence' },
        { icon: '📊', title: 'Data Quality Management', description: 'Data governance and quality assurance practices' },
        { icon: '📊', title: 'Business Intelligence', description: 'BI tools, reporting, and data-driven decision making' },
        { icon: '📊', title: 'Big Data Analytics', description: 'Large-scale data processing and analysis techniques' }
      ]
    },
    {
      category: 'Business Analysis & Management',
      courses: [
        { icon: '📈', title: 'Business Analyst', description: 'Requirements gathering, process modeling, and business analysis' },
        { icon: '📈', title: 'Project Management', description: 'Professional project management methodologies (Agile, Waterfall, PRINCE2)' },
        { icon: '📈', title: 'Business Process Management', description: 'Process optimization and workflow improvement' },
        { icon: '📈', title: 'Change Management', description: 'Organizational change and transformation management' },
        { icon: '📈', title: 'Product Management', description: 'Product lifecycle and strategic product development' }
      ]
    },
    {
      category: 'Software Development & Testing',
      courses: [
        { icon: '💻', title: 'Web Development', description: 'Full-stack development with modern frameworks (React, Node.js, Python)' },
        { icon: '💻', title: 'Software Testing', description: 'Manual and automated testing, QA processes' },
        { icon: '💻', title: 'Test Automation', description: 'Selenium, Cypress, and automated testing frameworks' },
        { icon: '💻', title: 'DevOps Engineering', description: 'CI/CD, cloud infrastructure, and automation' },
        { icon: '💻', title: 'Mobile App Development', description: 'iOS and Android application development' }
      ]
    },
    {
      category: 'Financial & Compliance',
      courses: [
        { icon: '💰', title: 'Financial Crime Analyst', description: 'AML, fraud detection, and financial compliance' },
        { icon: '💰', title: 'Risk Management', description: 'Enterprise risk assessment and mitigation strategies' },
        { icon: '💰', title: 'Compliance & Governance', description: 'Regulatory compliance and corporate governance' },
        { icon: '💰', title: 'Financial Analysis', description: 'Financial modeling and business valuation' }
      ]
    },
    {
      category: 'Digital & Marketing',
      courses: [
        { icon: '🎯', title: 'Digital Marketing', description: 'SEO, social media, content strategy, and analytics' },
        { icon: '🎯', title: 'Digital Transformation', description: 'Business digitalization and technology adoption' },
        { icon: '🎯', title: 'UX/UI Design', description: 'User experience and interface design principles' },
        { icon: '🎯', title: 'Content Strategy', description: 'Content creation, management, and distribution' }
      ]
    },
    {
      category: 'Leadership & Professional Skills',
      courses: [
        { icon: '👔', title: 'Leadership Development', description: 'Strategic leadership and executive management skills' },
        { icon: '👔', title: 'Communication Skills', description: 'Business communication, presentation, and negotiation' },
        { icon: '👔', title: 'Customer Service Excellence', description: 'Professional customer service and relationship management' },
        { icon: '👔', title: 'Time Management', description: 'Productivity, prioritization, and efficiency techniques' },
        { icon: '👔', title: 'Emotional Intelligence', description: 'Self-awareness and interpersonal effectiveness' }
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
            <div className="text-6xl mb-6">🎓</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Training & <span className="text-[#D4AF37]">Certification</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              TQUK-approved qualifications and comprehensive professional training across Healthcare, Cybersecurity, IT, Business, Data Science, and more
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

      {/* TQUK Badge */}
      <section className="py-12 px-4 bg-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black border-2 border-[#D4AF37] rounded-full px-8 py-4">
            <span className="text-3xl">🏆</span>
            <div className="text-left">
              <p className="text-[#D4AF37] font-bold text-lg">TQUK Approved Centre</p>
              <p className="text-gray-300 text-sm">#36257481088</p>
            </div>
          </div>
        </div>
      </section>

      {/* Already Enrolled */}
      <section className="py-12 px-4 bg-black border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Already <span className="text-[#D4AF37]">Enrolled?</span>
          </h3>
          <p className="text-gray-300 mb-6">
            Access your courses, track your progress, and download your certificates
          </p>
          <a 
            href="https://t21-healthcare-platform.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
          >
            🎓 Access Student Portal
          </a>
        </div>
      </section>

      {/* TQUK Qualifications */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#D4AF37]">TQUK-Approved</span> Qualifications
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Nationally recognized qualifications approved by TQUK - Training Qualifications UK
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tqukQualifications.map((qual, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#D4AF37]/30 rounded-lg overflow-hidden hover:border-[#D4AF37] transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" 
                    alt={qual.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs bg-[#D4AF37] text-black px-3 py-1 rounded-full font-semibold">
                      {qual.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{qual.title}</h3>
                  <p className="text-xs text-gray-400 mb-3">Code: {qual.code}</p>
                  <p className="text-gray-300 text-sm mb-4">{qual.description}</p>
                  <Link 
                    href={`/courses/${qual.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="block w-full bg-[#D4AF37] text-black text-center px-4 py-2 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Training Courses */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Professional <span className="text-[#D4AF37]">Training Courses</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Industry-recognized professional development programs across multiple sectors
          </p>

          {professionalCourses.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="text-[#D4AF37]">{category.category}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg overflow-hidden hover:border-[#D4AF37] transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={categoryImages[category.category] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-[#D4AF37] mb-3">{course.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                      <Link 
                        href={`/courses/${course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="block w-full bg-[#D4AF37] text-black text-center px-4 py-2 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-[#D4AF37]">T21 Training?</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">TQUK Approved</h3>
              <p className="text-gray-300">
                Official TQUK Approved Centre with 11 nationally recognized qualifications
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Expert Instructors</h3>
              <p className="text-gray-300">
                Industry professionals with real-world experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">95% Job Placement</h3>
              <p className="text-gray-300">
                Excellent employment outcomes for our graduates
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Flexible Learning</h3>
              <p className="text-gray-300">
                Online, in-person, and hybrid training options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#D4AF37]">Success</span> Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
              <p className="text-gray-300">Graduates Trained</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">50+</div>
              <p className="text-gray-300">Training Courses</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">4.9/5</div>
              <p className="text-gray-300">Student Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">95%</div>
              <p className="text-gray-300">Job Placement</p>
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

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Choose Your Course</h3>
              <p className="text-gray-300 text-sm">Browse our TQUK and professional courses, select the one that fits your goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Enroll & Pay</h3>
              <p className="text-gray-300 text-sm">Complete enrollment, make payment, receive login credentials via email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Learn & Practice</h3>
              <p className="text-gray-300 text-sm">Access course materials, complete modules, practice with real scenarios</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Get Certified</h3>
              <p className="text-gray-300 text-sm">Pass final exam, receive certificate, start applying for jobs</p>
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
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What qualifications will I receive?</h3>
              <p className="text-gray-300">TQUK courses provide nationally recognized qualifications. Professional courses provide T21 certificates recognized by employers. All certificates are verifiable and include your unique certification number.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">How long do courses take?</h3>
              <p className="text-gray-300">Course duration varies from 4 weeks to 16 weeks depending on the program. You can study at your own pace with flexible online access. Most students complete within the standard timeframe.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you offer payment plans?</h3>
              <p className="text-gray-300">Yes! We offer flexible payment plans to make training accessible. Contact us to discuss installment options that work for your budget.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Can I study while working?</h3>
              <p className="text-gray-300">Absolutely! Our courses are designed for working professionals. Study online at your own pace, access materials 24/7, and balance learning with your job.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">What is your job placement rate?</h3>
              <p className="text-gray-300">We have a 95% job placement rate within 3 months of completion. We provide CV support, interview preparation, and connect you with our employer network.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Do you provide job placement support?</h3>
              <p className="text-gray-300">Yes! We offer comprehensive career support including CV writing, interview coaching, job search assistance, and direct connections to employers in our network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Student <span className="text-[#D4AF37]">Success Stories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The NHS RTT training was exceptional! I secured a position as an RTT Coordinator within 2 weeks of completing the course. The TQUK certification gave me the credibility I needed."
              </p>
              <p className="text-[#D4AF37] font-bold">Sarah Johnson</p>
              <p className="text-gray-400 text-sm">NHS RTT Coordinator, Royal London Hospital</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "The SOC Analyst training transformed my career. The hands-on labs and real-world scenarios prepared me perfectly for my current role. Best investment I've made!"
              </p>
              <p className="text-[#D4AF37] font-bold">Michael Adeyemi</p>
              <p className="text-gray-400 text-sm">SOC Analyst, Cyber Security Firm</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#D4AF37]">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Completed the Data Science program and landed my dream job! The instructors were knowledgeable, and the curriculum was up-to-date with industry standards."
              </p>
              <p className="text-[#D4AF37] font-bold">Amina Okafor</p>
              <p className="text-gray-400 text-sm">Data Scientist, Tech Startup</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start <span className="text-[#D4AF37]">Your Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of professionals who have transformed their careers with T21 Services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/enroll"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Enroll Today
            </Link>
            <a 
              href="https://t21-healthcare-platform.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Student Login
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
