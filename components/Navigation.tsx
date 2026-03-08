'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Operational Delivery', href: '/operational-delivery' },
    { name: 'NHS Trusts', href: '/nhs-trusts' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Governance', href: '/governance-compliance' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="T21 Services Logo" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-playfair font-bold text-white">T21</h1>
              <p className="text-xs text-gold">SERVICES</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/' ? 'text-[#D4AF37]' : ''}`}>
              Home
            </Link>
            <Link href="/services" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/services' ? 'text-[#D4AF37]' : ''}`}>
              Services
            </Link>
            <Link href="/operational-delivery" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/operational-delivery' ? 'text-[#D4AF37]' : ''}`}>
              Operational Delivery
            </Link>
            <Link href="/nhs-trusts" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/nhs-trusts' ? 'text-[#D4AF37]' : ''}`}>
              NHS Trusts
            </Link>
            <Link href="/case-studies" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/case-studies' ? 'text-[#D4AF37]' : ''}`}>
              Case Studies
            </Link>
            <Link href="/leadership" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/leadership' ? 'text-[#D4AF37]' : ''}`}>
              Leadership
            </Link>
            <Link href="/governance-compliance" className={`text-sm text-white hover:text-[#D4AF37] transition-colors ${pathname === '/governance-compliance' ? 'text-[#D4AF37]' : ''}`}>
              Governance
            </Link>
            <Link 
              href="/contact"
              className="bg-[#D4AF37] text-black px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#FFD700] transition-all"
            >
              Discuss Requirements
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-3 text-white hover:text-gold transition-colors duration-300 ${
                  pathname === link.href ? 'text-gold' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold w-full mt-4 block text-center">
              Discuss Requirements
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
