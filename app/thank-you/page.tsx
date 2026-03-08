import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="glass-card p-12">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-playfair font-bold text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your message has been received. We'll get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <p className="text-gray-400">
              📧 A confirmation email has been sent to your inbox.
            </p>
            <p className="text-gray-400">
              💬 Need immediate assistance? WhatsApp us or call our team.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/" className="btn-gold inline-block">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
