'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="T21 Services Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-bold text-white">T21</h3>
                <p className="text-xs text-gold">SERVICES</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">Healthcare operational workforce and service delivery partner supporting NHS organisations across patient access, RTT validation, elective recovery and workforce development.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Data Protection Compliant</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Professional Standards</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services#elective-recovery" className="hover:text-gold transition-colors">Elective Recovery &amp; RTT</Link></li>
              <li><Link href="/services#patient-access" className="hover:text-gold transition-colors">Patient Access Workforce</Link></li>
              <li><Link href="/services#clinical-coding" className="hover:text-gold transition-colors">Clinical Coding &amp; Data Quality</Link></li>
              <li><Link href="/services#workforce-development" className="hover:text-gold transition-colors">Workforce Development</Link></li>
              <li><Link href="/operational-delivery" className="hover:text-gold transition-colors">Operational Delivery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Organisation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/leadership" className="hover:text-gold transition-colors">Leadership</Link></li>
              <li><Link href="/nhs-trusts" className="hover:text-gold transition-colors">NHS Trusts</Link></li>
              <li><Link href="/case-studies" className="hover:text-gold transition-colors">Case Studies</Link></li>
              <li><Link href="/governance-compliance" className="hover:text-gold transition-colors">Governance &amp; Compliance</Link></li>
              <li><Link href="/insourcing-partners" className="hover:text-gold transition-colors">Insourcing Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#9993;</span>
                <div>
                  <p className="text-gray-300 font-medium">Operational Enquiries</p>
                  <a href="mailto:admin@t21services.co.uk" className="hover:text-gold transition-colors">admin@t21services.co.uk</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#9742;</span>
                <div>
                  <p className="text-gray-300 font-medium">Telephone</p>
                  <a href="tel:+442033752061" className="hover:text-gold transition-colors">+44 (0) 203 375 2061</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#9906;</span>
                <div>
                  <p className="text-gray-300 font-medium">Registered Office</p>
                  <p>64 Upper Parliament Street, Liverpool, L8 7LF</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 T21 Services UK. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
