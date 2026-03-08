'use client'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "T21 Services UK",
    "alternateName": "T21 Services",
    "url": "https://www.t21services.co.uk",
    "logo": "https://www.t21services.co.uk/logo.png",
    "description": "Healthcare operational workforce and service delivery organisation supporting NHS trusts across RTT validation, patient access, waiting list management, clinical coding and healthcare data quality.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "64 Upper Parliament Street",
      "addressLocality": "Liverpool",
      "postalCode": "L8 7LF",
      "addressRegion": "England",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-203-375-2061",
      "email": "admin@t21services.co.uk",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "areaServed": "GB",
    "knowsAbout": [
      "RTT Validation",
      "Patient Access Administration",
      "Waiting List Management",
      "Clinical Coding",
      "Healthcare Data Quality",
      "Elective Recovery",
      "NHS Patient Pathway Management",
      "Healthcare Workforce Development"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "T21 Services UK",
    "image": "https://www.t21services.co.uk/logo.png",
    "url": "https://www.t21services.co.uk",
    "telephone": "+44-203-375-2061",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "64 Upper Parliament Street",
      "addressLocality": "Liverpool",
      "postalCode": "L8 7LF",
      "addressRegion": "England",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "T21 Services UK",
    "url": "https://www.t21services.co.uk"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
