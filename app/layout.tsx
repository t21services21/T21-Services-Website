import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.t21services.co.uk'),
  title: {
    default: 'T21 Services UK - Healthcare Operational Workforce and Service Delivery',
    template: '%s | T21 Services UK'
  },
  description: 'T21 Services provides experienced healthcare operational workforce supporting NHS trusts and healthcare organisations across RTT validation, patient access, waiting list management, clinical coding, healthcare data quality and elective recovery programmes. Over 500,000 pathways validated across 40+ NHS trusts.',
  keywords: [
    'healthcare operational workforce UK',
    'NHS RTT validation services',
    'elective recovery workforce',
    'patient access administration',
    'waiting list management services',
    'RTT pathway validation',
    'healthcare workforce provider',
    'NHS trust operational support',
    'clinical coding workforce',
    'healthcare data quality services',
    'patient pathway management',
    'NHS elective recovery support',
    'healthcare administration workforce',
    'RTT compliance services',
    'patient tracking list management',
    'healthcare insourcing workforce',
    'NHS operational delivery',
    'healthcare workforce solutions UK',
    'medical secretary workforce',
    'pathway coordinator services',
    'T21 Services UK',
    'T21 Healthcare Services',
  ],
  authors: [{ name: 'T21 Services UK', url: 'https://www.t21services.co.uk' }],
  creator: 'T21 Services UK',
  publisher: 'T21 Services UK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.t21services.co.uk',
    siteName: 'T21 Services UK',
    title: 'T21 Services UK - Healthcare Operational Workforce and Service Delivery',
    description: 'Experienced healthcare operational workforce supporting NHS trusts across RTT validation, patient access, elective recovery and healthcare data quality. 500,000+ pathways validated across 40+ NHS trusts.',
    images: [
      {
        url: 'https://www.t21services.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'T21 Services UK - Healthcare Operational Workforce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T21 Services UK - Healthcare Operational Workforce',
    description: 'Experienced healthcare operational workforce supporting NHS trusts across RTT validation, patient access and elective recovery.',
    images: ['https://www.t21services.co.uk/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.t21services.co.uk',
  },
  category: 'healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23000000'/><text x='50' y='70' font-size='60' font-weight='bold' text-anchor='middle' fill='%23D4AF37' font-family='Arial'>T21</text></svg>" />
        <link rel="apple-touch-icon" sizes="180x180" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23000000'/><text x='50' y='70' font-size='60' font-weight='bold' text-anchor='middle' fill='%23D4AF37' font-family='Arial'>T21</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
