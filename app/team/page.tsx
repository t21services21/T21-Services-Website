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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Meet Our <span className="text-[#D4AF37]">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The experts behind your success
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Leadership <span className="text-[#D4AF37]">Team</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder & CEO */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👨‍💼
              </div>
              <h3 className="text-2xl font-bold mb-2">Amb. Tosin M. Owonifari</h3>
              <p className="text-[#D4AF37] mb-4">Founder & CEO</p>
              <p className="text-gray-300 mb-6">
                Visionary leader with a passion for education, technology, and social impact
              </p>
              <a 
                href="https://www.linkedin.com/in/tosin-owonifari" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            {/* Director of Training */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👨‍🏫
              </div>
              <h3 className="text-2xl font-bold mb-2">Director of Training</h3>
              <p className="text-[#D4AF37] mb-4">Training Lead</p>
              <p className="text-gray-300 mb-6">
                Expert in curriculum development and TQUK-endorsed training programs
              </p>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            {/* Head of Recruitment */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👩‍💼
              </div>
              <h3 className="text-2xl font-bold mb-2">Head of Recruitment</h3>
              <p className="text-[#D4AF37] mb-4">Recruitment Lead</p>
              <p className="text-gray-300 mb-6">
                Specialist in healthcare and business recruitment with 95% success rate
              </p>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            {/* Head of Software */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mb-2">Head of Software</h3>
              <p className="text-[#D4AF37] mb-4">Technology Lead</p>
              <p className="text-gray-300 mb-6">
                Leading development of RTT platform and healthcare technology solutions
              </p>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            {/* Head of International */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                🌍
              </div>
              <h3 className="text-2xl font-bold mb-2">Head of International</h3>
              <p className="text-[#D4AF37] mb-4">Global Programs</p>
              <p className="text-gray-300 mb-6">
                Managing leadership programs across UK, Europe, USA, and Africa
              </p>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            {/* Head of Business Dev */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37] transition-all text-center">
              <div className="w-32 h-32 bg-[#D4AF37] rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-2">Head of Business Dev</h3>
              <p className="text-[#D4AF37] mb-4">Business Development</p>
              <p className="text-gray-300 mb-6">
                Strategic partnerships and consultancy services for organizational growth
              </p>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our <span className="text-[#D4AF37]">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals to join our growing team
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Growth Opportunities</h3>
              <p className="text-gray-300 text-sm">
                Advance your career with training and development
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Global Impact</h3>
              <p className="text-gray-300 text-sm">
                Work on projects that make a difference worldwide
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Great Culture</h3>
              <p className="text-gray-300 text-sm">
                Join a supportive, innovative, and diverse team
              </p>
            </div>
          </div>

          <Link 
            href="/consultation"
            className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Team <span className="text-[#D4AF37]">Values</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Excellence</h3>
              <p className="text-gray-300 text-sm">
                We strive for the highest standards
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">
                We embrace new ideas and solutions
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Collaboration</h3>
              <p className="text-gray-300 text-sm">
                We work together to achieve more
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Impact</h3>
              <p className="text-gray-300 text-sm">
                We make a real difference
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
