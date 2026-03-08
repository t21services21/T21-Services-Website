'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            About <span className="text-[#D4AF37]">T21 Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Healthcare operational workforce and service delivery partner supporting NHS organisations across the United Kingdom.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
            Our <span className="text-[#D4AF37]">Organisation</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              T21 Services is a healthcare operational workforce and service delivery organisation providing experienced staff across patient access administration, RTT validation, waiting list management, clinical coding and healthcare data quality operations.
            </p>
            <p>
              Founded with over 14 years of direct healthcare operational experience, T21 Services was established to provide healthcare organisations with reliable access to experienced operational workforce capacity. Our team understands NHS operational environments because our experience comes from working directly within them.
            </p>
            <p>
              Over the past five years, we have supported more than 40 NHS trusts across England, validating over 500,000 patient pathways and providing experienced workforce across diverse healthcare operational requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
            Our <span className="text-[#D4AF37]">Mission</span>
          </h2>
          <div className="glass-card max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              To support healthcare organisations with experienced operational workforce capacity that understands the requirements of NHS operational environments. We are committed to delivering reliable, quality-focused healthcare operational services that contribute to improved patient pathway management and healthcare administration efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
            Our <span className="text-[#D4AF37]">Vision</span>
          </h2>
          <div className="glass-card max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              To be recognised as a trusted healthcare operational workforce partner, known for the quality and reliability of our service delivery across NHS trusts and healthcare organisations throughout the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">
            Core <span className="text-[#D4AF37]">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Operational Excellence', desc: 'We maintain high standards across all operational services, ensuring our workforce delivers quality outcomes consistently.' },
              { title: 'Reliability', desc: 'Healthcare organisations depend on consistent workforce delivery. We prioritise reliability in all our service commitments.' },
              { title: 'Integrity', desc: 'We operate with transparency, honesty and professional standards in all our relationships with clients and partners.' },
              { title: 'Experience-Led', desc: 'Our service delivery is founded on direct healthcare operational experience, not theoretical knowledge alone.' },
              { title: 'Continuous Development', desc: 'We invest in the ongoing professional development of our workforce to maintain and improve service quality.' },
              { title: 'Partnership', desc: 'We build collaborative relationships with healthcare organisations based on understanding their operational needs.' }
            ].map((value, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">
            Operational <span className="text-[#D4AF37]">Track Record</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">500,000+</div>
              <div className="text-gray-400 text-sm">RTT Pathways Validated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">40+</div>
              <div className="text-gray-400 text-sm">NHS Trusts Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">50+</div>
              <div className="text-gray-400 text-sm">Experienced Workforce</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">5+</div>
              <div className="text-gray-400 text-sm">Years in Healthcare</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-8 text-center">
            Workforce <span className="text-[#D4AF37]">Accreditation</span>
          </h2>
          <div className="glass-card max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-4">
              T21 Services maintains TQUK Approved Centre status (Centre #36257481088) supporting workforce development across healthcare operational services.
            </p>
            <p className="text-gray-400">
              This accreditation supports our professional development programmes and demonstrates our commitment to recognised training standards as a supporting capability within our operational service delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Work With <span className="text-[#D4AF37]">T21 Services</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to discuss how our experienced healthcare operational workforce can support your organisation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg">
              Contact Us
            </Link>
            <Link href="/leadership" className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg">
              Meet Our Leadership
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
