'use client'

import { useState, useEffect } from 'react'

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showCookies, setShowCookies] = useState(true)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/44XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform z-50"
      >
        💬
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform z-50"
        >
          ↑
        </button>
      )}

      {/* Cookie Consent */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gold/30 p-4 z-50">
          <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
              <button className="btn-gold-outline text-sm px-4 py-2">Learn More</button>
              <button onClick={() => setShowCookies(false)} className="btn-gold text-sm px-4 py-2">Accept</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
