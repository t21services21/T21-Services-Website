import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.t21services.co.uk'
  
  // All course slugs
  const courses = [
    'understanding-rtt-and-hospital-administration',
    'nhs-rtt-coordinator',
    'soc-analyst-training',
    'nhs-admin-level-2',
    'nhs-admin-level-3',
    'business-admin-level-2',
    'business-admin-level-3',
    'customer-service-level-2',
    'it-user-skills-level-2',
    'functional-skills-english-level-1',
    'functional-skills-english-level-2',
    'functional-skills-maths-level-1',
    'functional-skills-maths-level-2',
    'adult-care-level-2',
    'adult-care-level-3',
    'leadership-management-level-3',
    'leadership-management-level-5',
    'team-leading-level-2',
    'healthcare-support-level-2',
    'healthcare-support-level-3',
    'information-governance',
    'data-protection-gdpr',
    'cyber-security-awareness',
    'phishing-awareness',
    'social-engineering-awareness',
    'incident-response',
    'threat-intelligence',
    'network-security',
    'cloud-security',
    'application-security',
    'security-operations',
    'digital-forensics',
    'penetration-testing',
    'vulnerability-assessment',
    'security-compliance',
    'risk-management',
    'business-continuity',
    'disaster-recovery',
    'project-management',
    'agile-scrum',
    'change-management',
    'quality-management',
    'process-improvement',
    'six-sigma',
    'lean-management',
    'strategic-planning',
    'financial-management',
    'hr-management',
    'marketing-fundamentals',
    'sales-techniques',
    'negotiation-skills',
    'communication-skills',
    'presentation-skills',
    'time-management'
  ]

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/training',
    '/services/recruitment',
    '/services/software',
    '/services/international',
    '/services/consultancy',
    '/services/community',
    '/contact',
    '/team',
    '/careers',
    '/careers/submit-cv',
    '/careers/advice',
    '/enroll',
    '/consultation',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  // Course pages
  const coursePages = courses.map(slug => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static pages
  const pages = staticPages.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route.includes('/services/') ? 0.9 : 0.7,
  }))

  return [...pages, ...coursePages]
}
