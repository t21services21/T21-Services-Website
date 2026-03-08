import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Course data
const courseData: { [key: string]: any } = {
  // TQUK Courses
  'understanding-rtt-and-hospital-administration': {
    title: 'Understanding RTT and Hospital Administration',
    code: 'PDLC-01-039',
    level: 'Bespoke Endorsed',
    category: 'TQUK Qualification',
    icon: '🏥',
    duration: '12 weeks',
    studyMode: 'Online / Blended',
    price: '£1,200',
    overview: 'Comprehensive TQUK-endorsed training in NHS Referral to Treatment pathways and hospital administration. This course provides essential knowledge for working in NHS administrative roles.',
    whatYouLearn: [
      'Understanding NHS RTT pathways and 18-week targets',
      'Patient pathway management and tracking',
      'Hospital administration procedures',
      'Data management and reporting',
      'Compliance and governance in NHS',
      'Communication with clinical teams'
    ],
    modules: [
      { title: 'Introduction to NHS and RTT', duration: '2 weeks' },
      { title: 'RTT Pathway Management', duration: '3 weeks' },
      { title: 'Hospital Administration', duration: '3 weeks' },
      { title: 'Data Management & Reporting', duration: '2 weeks' },
      { title: 'Practical Application & Assessment', duration: '2 weeks' }
    ],
    prerequisites: 'No prior experience required. Basic computer skills recommended.',
    certification: 'TQUK Endorsed Certificate upon successful completion',
    careerOutcomes: [
      'RTT Coordinator',
      'Hospital Administrator',
      'NHS Administrative Officer',
      'Patient Pathway Coordinator'
    ],
    instructor: {
      name: 'NHS Experienced Professionals',
      bio: 'Our instructors have 10+ years of NHS experience in RTT coordination and hospital administration.'
    }
  },
  
  'nhs-rtt-coordinator': {
    title: 'NHS RTT Coordinator',
    category: 'Professional Training',
    icon: '🏥',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£899',
    overview: 'Specialist training in RTT pathway management and NHS administration. Become a qualified RTT Coordinator with hands-on experience.',
    whatYouLearn: [
      'RTT rules and regulations',
      'Clock start and stop scenarios',
      'Pathway management techniques',
      'Validation and data quality',
      'Reporting and analytics',
      'Problem-solving and escalation'
    ],
    modules: [
      { title: 'RTT Fundamentals', duration: '2 weeks' },
      { title: 'Clock Management', duration: '2 weeks' },
      { title: 'Pathway Validation', duration: '2 weeks' },
      { title: 'Reporting & Analytics', duration: '1 week' },
      { title: 'Practical Scenarios', duration: '1 week' }
    ],
    prerequisites: 'Basic understanding of NHS helpful but not required',
    certification: 'T21 Services Professional Certificate',
    careerOutcomes: [
      'RTT Coordinator',
      'Validation Officer',
      'NHS Data Analyst',
      'Patient Access Manager'
    ],
    instructor: {
      name: 'Senior RTT Coordinators',
      bio: 'Learn from active NHS RTT Coordinators with extensive real-world experience.'
    }
  },

  'soc-analyst-training': {
    title: 'SOC Analyst Training',
    category: 'Professional Training',
    icon: '🔒',
    duration: '12 weeks',
    studyMode: 'Online with Labs',
    price: '£1,499',
    overview: 'Comprehensive Security Operations Center analyst training. Learn threat detection, incident response, and security monitoring with hands-on labs.',
    whatYouLearn: [
      'Security monitoring and SIEM tools',
      'Threat detection and analysis',
      'Incident response procedures',
      'Log analysis and correlation',
      'Malware analysis basics',
      'Security tools (Splunk, ELK, etc.)'
    ],
    modules: [
      { title: 'SOC Fundamentals', duration: '2 weeks' },
      { title: 'SIEM Tools & Technologies', duration: '3 weeks' },
      { title: 'Threat Detection', duration: '3 weeks' },
      { title: 'Incident Response', duration: '2 weeks' },
      { title: 'Hands-on Labs & Projects', duration: '2 weeks' }
    ],
    prerequisites: 'Basic IT knowledge. Networking fundamentals recommended.',
    certification: 'T21 Services SOC Analyst Certificate',
    careerOutcomes: [
      'SOC Analyst Level 1/2',
      'Security Analyst',
      'Threat Intelligence Analyst',
      'Incident Response Analyst'
    ],
    instructor: {
      name: 'Cybersecurity Professionals',
      bio: 'Industry experts with 15+ years in cybersecurity and SOC operations.'
    }
  },

  'data-science': {
    title: 'Data Science',
    category: 'Professional Training',
    icon: '📊',
    duration: '16 weeks',
    studyMode: 'Online',
    price: '£1,799',
    overview: 'Complete data science training covering Python, machine learning, statistical modeling, and data analysis. Build real-world projects.',
    whatYouLearn: [
      'Python programming for data science',
      'Statistical analysis and modeling',
      'Machine learning algorithms',
      'Data visualization (Matplotlib, Seaborn)',
      'SQL and database management',
      'Real-world project development'
    ],
    modules: [
      { title: 'Python Fundamentals', duration: '3 weeks' },
      { title: 'Statistics & Probability', duration: '3 weeks' },
      { title: 'Machine Learning', duration: '4 weeks' },
      { title: 'Data Visualization', duration: '2 weeks' },
      { title: 'Capstone Project', duration: '4 weeks' }
    ],
    prerequisites: 'Basic programming knowledge helpful but not required',
    certification: 'T21 Services Data Science Certificate',
    careerOutcomes: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Business Intelligence Analyst'
    ],
    instructor: {
      name: 'Data Science Experts',
      bio: 'Learn from data scientists working at top tech companies and research institutions.'
    }
  },

  'business-analyst': {
    title: 'Business Analyst',
    category: 'Professional Training',
    icon: '📈',
    duration: '10 weeks',
    studyMode: 'Online / Blended',
    price: '£1,299',
    overview: 'Professional business analyst training covering requirements gathering, process modeling, stakeholder management, and business analysis techniques.',
    whatYouLearn: [
      'Requirements elicitation techniques',
      'Process modeling (BPMN, UML)',
      'Stakeholder management',
      'Business case development',
      'Agile and Waterfall methodologies',
      'Documentation and reporting'
    ],
    modules: [
      { title: 'BA Fundamentals', duration: '2 weeks' },
      { title: 'Requirements Engineering', duration: '3 weeks' },
      { title: 'Process Modeling', duration: '2 weeks' },
      { title: 'Agile BA Practices', duration: '2 weeks' },
      { title: 'Real-world Case Studies', duration: '1 week' }
    ],
    prerequisites: 'Business or IT background helpful',
    certification: 'T21 Services Business Analyst Certificate',
    careerOutcomes: [
      'Business Analyst',
      'Systems Analyst',
      'Product Owner',
      'Requirements Analyst'
    ],
    instructor: {
      name: 'Senior Business Analysts',
      bio: 'Experienced BAs from Fortune 500 companies and consulting firms.'
    }
  },

  // BATCH 1: TQUK QUALIFICATIONS
  'functional-skills-english-level-1': {
    title: 'Functional Skills English Level 1',
    code: '610/2626/0',
    level: 'Level 1 (RQF)',
    category: 'TQUK Qualification',
    icon: '📝',
    duration: '8 weeks',
    studyMode: 'Online / Blended',
    price: '£400',
    overview: 'Essential English language skills for work and everyday life. Develop reading, writing, and communication skills to Level 1 standard.',
    whatYouLearn: [
      'Reading and understanding different types of texts',
      'Writing clearly and effectively for different purposes',
      'Speaking and listening in various contexts',
      'Grammar, punctuation, and spelling',
      'Vocabulary development',
      'Practical workplace communication'
    ],
    modules: [
      { title: 'Reading Skills', duration: '2 weeks' },
      { title: 'Writing Skills', duration: '2 weeks' },
      { title: 'Speaking & Listening', duration: '2 weeks' },
      { title: 'Grammar & Punctuation', duration: '1 week' },
      { title: 'Assessment Preparation', duration: '1 week' }
    ],
    prerequisites: 'Basic literacy skills',
    certification: 'TQUK Functional Skills English Level 1',
    careerOutcomes: ['Administrative Assistant', 'Customer Service Representative', 'Retail Assistant', 'Care Worker'],
    instructor: { name: 'Qualified English Teachers', bio: 'Experienced educators with TQUK assessment expertise and adult learning qualifications.' }
  },

  'functional-skills-english-level-2': {
    title: 'Functional Skills English Level 2',
    code: '610/2625/6',
    level: 'Level 2 (RQF)',
    category: 'TQUK Qualification',
    icon: '📝',
    duration: '8 weeks',
    studyMode: 'Online / Blended',
    price: '£450',
    overview: 'Advanced English language skills for professional environments. Equivalent to GCSE Grade 4-9 (C-A*).',
    whatYouLearn: [
      'Advanced reading comprehension and analysis',
      'Professional writing for business contexts',
      'Effective oral communication',
      'Critical analysis of complex texts',
      'Formal and informal writing styles',
      'Advanced grammar and vocabulary'
    ],
    modules: [
      { title: 'Advanced Reading', duration: '2 weeks' },
      { title: 'Professional Writing', duration: '2 weeks' },
      { title: 'Communication Skills', duration: '2 weeks' },
      { title: 'Critical Analysis', duration: '1 week' },
      { title: 'Assessment Preparation', duration: '1 week' }
    ],
    prerequisites: 'Level 1 English or equivalent',
    certification: 'TQUK Functional Skills English Level 2',
    careerOutcomes: ['Office Manager', 'Team Leader', 'Healthcare Administrator', 'Business Administrator'],
    instructor: { name: 'Qualified English Teachers', bio: 'Experienced educators with TQUK assessment expertise and adult learning qualifications.' }
  },

  'functional-skills-maths-level-1': {
    title: 'Functional Skills Maths Level 1',
    code: '610/2623/2',
    level: 'Level 1 (RQF)',
    category: 'TQUK Qualification',
    icon: '🔢',
    duration: '8 weeks',
    studyMode: 'Online / Blended',
    price: '£400',
    overview: 'Essential mathematics skills for work and everyday life. Build confidence with numbers and practical problem-solving.',
    whatYouLearn: [
      'Number operations and calculations',
      'Fractions, decimals, and percentages',
      'Measurements and conversions',
      'Data handling and basic statistics',
      'Problem-solving techniques',
      'Practical maths for workplace situations'
    ],
    modules: [
      { title: 'Number Skills', duration: '2 weeks' },
      { title: 'Fractions & Percentages', duration: '2 weeks' },
      { title: 'Measurements', duration: '2 weeks' },
      { title: 'Data & Statistics', duration: '1 week' },
      { title: 'Assessment Preparation', duration: '1 week' }
    ],
    prerequisites: 'Basic numeracy skills',
    certification: 'TQUK Functional Skills Maths Level 1',
    careerOutcomes: ['Retail Assistant', 'Warehouse Operative', 'Care Worker', 'Administrative Assistant'],
    instructor: { name: 'Qualified Maths Teachers', bio: 'Experienced educators with TQUK assessment expertise and adult learning qualifications.' }
  },

  'functional-skills-maths-level-2': {
    title: 'Functional Skills Maths Level 2',
    code: '610/2624/4',
    level: 'Level 2 (RQF)',
    category: 'TQUK Qualification',
    icon: '🔢',
    duration: '8 weeks',
    studyMode: 'Online / Blended',
    price: '£450',
    overview: 'Advanced mathematics skills for professional environments. Equivalent to GCSE Grade 4-9 (C-A*).',
    whatYouLearn: [
      'Advanced calculations and problem-solving',
      'Ratios, proportions, and rates',
      'Algebra fundamentals',
      'Geometry and measures',
      'Statistical analysis and interpretation',
      'Financial mathematics'
    ],
    modules: [
      { title: 'Advanced Number Work', duration: '2 weeks' },
      { title: 'Algebra Basics', duration: '2 weeks' },
      { title: 'Geometry & Measures', duration: '2 weeks' },
      { title: 'Statistics & Data', duration: '1 week' },
      { title: 'Assessment Preparation', duration: '1 week' }
    ],
    prerequisites: 'Level 1 Maths or equivalent',
    certification: 'TQUK Functional Skills Maths Level 2',
    careerOutcomes: ['Accounts Assistant', 'Data Entry Clerk', 'Healthcare Administrator', 'Team Leader'],
    instructor: { name: 'Qualified Maths Teachers', bio: 'Experienced educators with TQUK assessment expertise and adult learning qualifications.' }
  },

  'certificate-in-customer-service': {
    title: 'Certificate in Customer Service',
    code: '603/3896/7',
    level: 'Level 2 (RQF)',
    category: 'TQUK Qualification',
    icon: '🤝',
    duration: '10 weeks',
    studyMode: 'Online / Blended',
    price: '£600',
    overview: 'Professional customer service skills and best practices. Learn to deliver exceptional customer experiences in any industry.',
    whatYouLearn: [
      'Customer service principles and standards',
      'Effective communication techniques',
      'Handling complaints and difficult situations',
      'Building positive customer relationships',
      'Problem-solving and decision-making',
      'Professional standards and ethics'
    ],
    modules: [
      { title: 'Customer Service Fundamentals', duration: '2 weeks' },
      { title: 'Communication Skills', duration: '2 weeks' },
      { title: 'Complaint Handling', duration: '2 weeks' },
      { title: 'Relationship Building', duration: '2 weeks' },
      { title: 'Assessment & Portfolio', duration: '2 weeks' }
    ],
    prerequisites: 'No prior experience required',
    certification: 'TQUK Certificate in Customer Service Level 2',
    careerOutcomes: ['Customer Service Advisor', 'Call Center Agent', 'Retail Supervisor', 'Reception Manager'],
    instructor: { name: 'Customer Service Professionals', bio: '15+ years experience in customer service management and training.' }
  },

  'certificate-in-it-user-skills': {
    title: 'Certificate in IT User Skills',
    code: '603/3046/8',
    level: 'Level 2 (RQF)',
    category: 'TQUK Qualification',
    icon: '💻',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£600',
    overview: 'Essential IT skills for modern workplace environments. Master Microsoft Office and digital tools for professional success.',
    whatYouLearn: [
      'Microsoft Word proficiency',
      'Excel spreadsheets and formulas',
      'PowerPoint presentations',
      'Email and calendar management',
      'Internet research and online safety',
      'Digital file management and organization'
    ],
    modules: [
      { title: 'Word Processing', duration: '2 weeks' },
      { title: 'Spreadsheets', duration: '3 weeks' },
      { title: 'Presentations', duration: '2 weeks' },
      { title: 'Digital Communication', duration: '2 weeks' },
      { title: 'Assessment', duration: '1 week' }
    ],
    prerequisites: 'Basic computer skills',
    certification: 'TQUK Certificate in IT User Skills Level 2',
    careerOutcomes: ['Administrative Assistant', 'Data Entry Clerk', 'Office Administrator', 'PA/Secretary'],
    instructor: { name: 'IT Training Specialists', bio: 'Microsoft Certified Trainers with 10+ years experience in corporate IT training.' }
  },

  'certificate-in-preparing-to-work-in-adult-social-care': {
    title: 'Certificate in Preparing to Work in Adult Social Care',
    code: '601/4040/9',
    level: 'Level 2 (RQF)',
    category: 'TQUK Qualification',
    icon: '👴',
    duration: '12 weeks',
    studyMode: 'Blended',
    price: '£700',
    overview: 'Foundation training for careers in adult social care. Prepare for a rewarding career caring for vulnerable adults.',
    whatYouLearn: [
      'Understanding adult social care sector',
      'Communication in care settings',
      'Safeguarding vulnerable adults',
      'Health and safety in care',
      'Person-centered care approach',
      'Professional standards and values'
    ],
    modules: [
      { title: 'Introduction to Social Care', duration: '3 weeks' },
      { title: 'Communication Skills', duration: '2 weeks' },
      { title: 'Safeguarding', duration: '2 weeks' },
      { title: 'Health & Safety', duration: '2 weeks' },
      { title: 'Person-Centered Care', duration: '2 weeks' },
      { title: 'Assessment', duration: '1 week' }
    ],
    prerequisites: 'No prior experience required. DBS check required for placement.',
    certification: 'TQUK Certificate in Preparing to Work in Adult Social Care',
    careerOutcomes: ['Care Assistant', 'Support Worker', 'Healthcare Assistant', 'Domiciliary Care Worker'],
    instructor: { name: 'Registered Care Professionals', bio: 'Experienced care managers with NVQ Level 5 qualifications and 20+ years in social care.' }
  },

  'certificate-in-principles-of-business-administration': {
    title: 'Certificate in Principles of Business Administration',
    code: '603/2949/X',
    level: 'Level 2 (RQF)',
    category: 'TQUK Qualification',
    icon: '📊',
    duration: '12 weeks',
    studyMode: 'Online / Blended',
    price: '£700',
    overview: 'Core business administration principles and practices. Build essential office management and administrative skills.',
    whatYouLearn: [
      'Business communication skills',
      'Document production and management',
      'Meeting and event coordination',
      'Data and information handling',
      'Customer service in business context',
      'Professional workplace behavior'
    ],
    modules: [
      { title: 'Business Communication', duration: '3 weeks' },
      { title: 'Document Management', duration: '2 weeks' },
      { title: 'Meeting & Event Coordination', duration: '2 weeks' },
      { title: 'Data & Information Handling', duration: '2 weeks' },
      { title: 'Customer Relations', duration: '2 weeks' },
      { title: 'Assessment', duration: '1 week' }
    ],
    prerequisites: 'Basic IT skills recommended',
    certification: 'TQUK Certificate in Principles of Business Administration',
    careerOutcomes: ['Business Administrator', 'Office Coordinator', 'Administrative Officer', 'Executive Assistant'],
    instructor: { name: 'Business Administration Experts', bio: '20+ years experience in corporate administration and office management.' }
  },

  'certificate-in-supporting-teaching-and-learning-in-schools': {
    title: 'Certificate in Supporting Teaching and Learning in Schools',
    code: '601/2731/4',
    level: 'Level 3 (RQF)',
    category: 'TQUK Qualification',
    icon: '🎓',
    duration: '16 weeks',
    studyMode: 'Blended',
    price: '£900',
    overview: 'Advanced qualification for teaching support roles. Work effectively in educational settings supporting teachers and students.',
    whatYouLearn: [
      'Understanding child and young person development',
      'Supporting teaching and learning activities',
      'Safeguarding and child protection',
      'Behavior management strategies',
      'Supporting special educational needs',
      'Professional relationships in schools'
    ],
    modules: [
      { title: 'Child Development', duration: '3 weeks' },
      { title: 'Teaching Support Strategies', duration: '4 weeks' },
      { title: 'Safeguarding', duration: '2 weeks' },
      { title: 'Behavior Management', duration: '3 weeks' },
      { title: 'SEN Support', duration: '2 weeks' },
      { title: 'Assessment & Portfolio', duration: '2 weeks' }
    ],
    prerequisites: 'Level 2 qualification or equivalent. DBS check required.',
    certification: 'TQUK Certificate in Supporting Teaching and Learning Level 3',
    careerOutcomes: ['Teaching Assistant', 'Learning Support Assistant', 'SEN Support Worker', 'Cover Supervisor'],
    instructor: { name: 'Qualified Teachers', bio: 'Experienced educators with QTS and specialist teaching assistant training expertise.' }
  },

  'diploma-in-adult-care': {
    title: 'Diploma in Adult Care',
    code: '610/1703/6',
    level: 'Level 3 (RQF)',
    category: 'TQUK Qualification',
    icon: '🏥',
    duration: '20 weeks',
    studyMode: 'Blended',
    price: '£1,200',
    overview: 'Comprehensive qualification for adult care professionals. Advance your career in social care with this in-depth diploma.',
    whatYouLearn: [
      'Advanced person-centered care practices',
      'Health and wellbeing promotion',
      'Safeguarding and protection of adults',
      'Communication in complex situations',
      'Professional development in care',
      'Leadership and supervision in care settings'
    ],
    modules: [
      { title: 'Person-Centered Care', duration: '4 weeks' },
      { title: 'Health Promotion', duration: '4 weeks' },
      { title: 'Safeguarding', duration: '3 weeks' },
      { title: 'Professional Communication', duration: '3 weeks' },
      { title: 'Leadership Skills', duration: '3 weeks' },
      { title: 'Assessment & Portfolio', duration: '3 weeks' }
    ],
    prerequisites: 'Level 2 care qualification or 1 year experience in care. DBS check required.',
    certification: 'TQUK Diploma in Adult Care Level 3',
    careerOutcomes: ['Senior Care Worker', 'Deputy Care Manager', 'Care Coordinator', 'Team Leader in Care'],
    instructor: { name: 'Registered Care Managers', bio: 'NVQ Level 5 qualified care professionals with management experience in residential and domiciliary care.' }
  },

  // BATCH 2: HEALTHCARE & CYBERSECURITY
  'hospital-administration': {
    title: 'Hospital Administration',
    category: 'Professional Training',
    icon: '🏥',
    duration: '10 weeks',
    studyMode: 'Online / Blended',
    price: '£799',
    overview: 'Comprehensive healthcare administration and management training. Master hospital operations and patient administration systems.',
    whatYouLearn: [
      'Hospital operations and workflow management',
      'Patient administration systems (PAS)',
      'Medical records management',
      'Healthcare regulations and compliance',
      'Team coordination and communication',
      'Quality assurance and patient safety'
    ],
    modules: [
      { title: 'Hospital Operations', duration: '2 weeks' },
      { title: 'Patient Administration Systems', duration: '2 weeks' },
      { title: 'Medical Records Management', duration: '2 weeks' },
      { title: 'Healthcare Regulations', duration: '2 weeks' },
      { title: 'Quality & Safety Management', duration: '2 weeks' }
    ],
    prerequisites: 'Basic administrative experience helpful but not required',
    certification: 'T21 Services Professional Certificate in Hospital Administration',
    careerOutcomes: ['Hospital Administrator', 'Ward Clerk', 'Medical Secretary', 'Healthcare Coordinator'],
    instructor: { name: 'Healthcare Administrators', bio: '15+ years NHS and private healthcare management experience.' }
  },

  'healthcare-data-management': {
    title: 'Healthcare Data Management',
    category: 'Professional Training',
    icon: '🏥',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£899',
    overview: 'Patient data systems and healthcare information management. Learn to manage healthcare data with accuracy and compliance.',
    whatYouLearn: [
      'Healthcare information systems',
      'Data quality and validation techniques',
      'GDPR and data protection in healthcare',
      'Clinical coding fundamentals',
      'Healthcare reporting and analytics',
      'System integration and interoperability'
    ],
    modules: [
      { title: 'Healthcare IT Systems', duration: '2 weeks' },
      { title: 'Data Quality Management', duration: '2 weeks' },
      { title: 'GDPR & Data Protection', duration: '2 weeks' },
      { title: 'Clinical Coding Basics', duration: '2 weeks' },
      { title: 'Analytics & Reporting', duration: '2 weeks' }
    ],
    prerequisites: 'Basic IT skills and healthcare knowledge',
    certification: 'T21 Services Professional Certificate in Healthcare Data Management',
    careerOutcomes: ['Healthcare Data Analyst', 'Information Officer', 'Data Quality Manager', 'Health Records Officer'],
    instructor: { name: 'Healthcare IT Specialists', bio: 'Experts in NHS data systems and information governance.' }
  },

  'clinical-coding': {
    title: 'Clinical Coding',
    category: 'Professional Training',
    icon: '🏥',
    duration: '12 weeks',
    studyMode: 'Online',
    price: '£999',
    overview: 'Medical coding and classification systems training. Master ICD-10 and OPCS-4 coding for accurate healthcare records.',
    whatYouLearn: [
      'ICD-10 disease classification',
      'OPCS-4 procedure coding',
      'Medical terminology and anatomy',
      'Healthcare record interpretation',
      'Coding accuracy and quality standards',
      'Audit and compliance'
    ],
    modules: [
      { title: 'Medical Terminology & Anatomy', duration: '3 weeks' },
      { title: 'ICD-10 Classification', duration: '3 weeks' },
      { title: 'OPCS-4 Procedures', duration: '3 weeks' },
      { title: 'Coding Practice & Quality', duration: '2 weeks' },
      { title: 'Audit & Compliance', duration: '1 week' }
    ],
    prerequisites: 'Healthcare background recommended',
    certification: 'T21 Services Professional Certificate in Clinical Coding',
    careerOutcomes: ['Clinical Coder', 'Medical Coder', 'Coding Auditor', 'Information Analyst'],
    instructor: { name: 'Certified Clinical Coders', bio: 'ACC certified coders with 10+ years NHS coding experience.' }
  },

  'cybersecurity-fundamentals': {
    title: 'Cybersecurity Fundamentals',
    category: 'Professional Training',
    icon: '🔒',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£799',
    overview: 'Core cybersecurity principles and best practices. Build a strong foundation in information security.',
    whatYouLearn: [
      'Security principles and concepts',
      'Threat landscape and attack vectors',
      'Network security fundamentals',
      'Access control and authentication',
      'Cryptography basics',
      'Security policies and procedures'
    ],
    modules: [
      { title: 'Security Fundamentals', duration: '2 weeks' },
      { title: 'Threats & Vulnerabilities', duration: '2 weeks' },
      { title: 'Network Security', duration: '2 weeks' },
      { title: 'Cryptography & Access Control', duration: '1 week' },
      { title: 'Security Management', duration: '1 week' }
    ],
    prerequisites: 'Basic IT knowledge',
    certification: 'T21 Services Professional Certificate in Cybersecurity Fundamentals',
    careerOutcomes: ['IT Security Assistant', 'Security Administrator', 'Junior Security Analyst', 'IT Support Specialist'],
    instructor: { name: 'Security Professionals', bio: 'Industry certified security experts (CISSP, CEH, Security+).' }
  },

  'information-security': {
    title: 'Information Security',
    category: 'Professional Training',
    icon: '🔒',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£999',
    overview: 'Information security management and governance. Learn ISO 27001 framework and risk management.',
    whatYouLearn: [
      'Information security management systems',
      'Risk assessment and management',
      'ISO 27001 framework and implementation',
      'Security policies and procedures',
      'Compliance and regulatory requirements',
      'Business continuity and disaster recovery'
    ],
    modules: [
      { title: 'InfoSec Management', duration: '2 weeks' },
      { title: 'Risk Management', duration: '2 weeks' },
      { title: 'ISO 27001 Framework', duration: '2 weeks' },
      { title: 'Compliance & Regulations', duration: '2 weeks' },
      { title: 'Business Continuity', duration: '2 weeks' }
    ],
    prerequisites: 'IT or security background helpful',
    certification: 'T21 Services Professional Certificate in Information Security',
    careerOutcomes: ['Information Security Officer', 'Security Manager', 'Compliance Officer', 'Risk Analyst'],
    instructor: { name: 'InfoSec Managers', bio: 'CISM certified professionals with enterprise security experience.' }
  },

  'incident-response': {
    title: 'Incident Response',
    category: 'Professional Training',
    icon: '🔒',
    duration: '8 weeks',
    studyMode: 'Online with Labs',
    price: '£1,199',
    overview: 'Cybersecurity incident handling and response procedures. Learn to detect, respond to, and recover from security incidents.',
    whatYouLearn: [
      'Incident response lifecycle and frameworks',
      'Threat hunting techniques',
      'Digital forensics fundamentals',
      'Malware analysis basics',
      'Incident documentation and reporting',
      'Recovery and lessons learned'
    ],
    modules: [
      { title: 'IR Fundamentals & Frameworks', duration: '2 weeks' },
      { title: 'Threat Hunting', duration: '2 weeks' },
      { title: 'Digital Forensics', duration: '2 weeks' },
      { title: 'Malware Analysis', duration: '1 week' },
      { title: 'Practical Scenarios', duration: '1 week' }
    ],
    prerequisites: 'Cybersecurity fundamentals or equivalent experience',
    certification: 'T21 Services Professional Certificate in Incident Response',
    careerOutcomes: ['Incident Response Analyst', 'Security Investigator', 'Forensics Analyst', 'Threat Hunter'],
    instructor: { name: 'IR Specialists', bio: 'GCIH certified incident responders with real-world breach investigation experience.' }
  },

  'threat-intelligence': {
    title: 'Threat Intelligence',
    category: 'Professional Training',
    icon: '🔒',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£1,099',
    overview: 'Cyber threat analysis and intelligence gathering. Learn to identify, analyze, and report on cyber threats.',
    whatYouLearn: [
      'Threat intelligence lifecycle',
      'OSINT techniques and tools',
      'Threat actor profiling',
      'Indicators of compromise (IOCs)',
      'Intelligence platforms and frameworks',
      'Reporting and dissemination'
    ],
    modules: [
      { title: 'Threat Intel Fundamentals', duration: '2 weeks' },
      { title: 'OSINT & Collection', duration: '2 weeks' },
      { title: 'Analysis Techniques', duration: '2 weeks' },
      { title: 'Intel Platforms & Tools', duration: '1 week' },
      { title: 'Reporting & Communication', duration: '1 week' }
    ],
    prerequisites: 'Cybersecurity knowledge',
    certification: 'T21 Services Professional Certificate in Threat Intelligence',
    careerOutcomes: ['Threat Intelligence Analyst', 'Cyber Intelligence Officer', 'Security Researcher', 'Threat Hunter'],
    instructor: { name: 'Threat Intel Experts', bio: 'Former government and enterprise threat intelligence professionals.' }
  },

  'network-security': {
    title: 'Network Security',
    category: 'Professional Training',
    icon: '🔒',
    duration: '10 weeks',
    studyMode: 'Online with Labs',
    price: '£1,199',
    overview: 'Network protection and security architecture. Master firewalls, VPNs, and network monitoring.',
    whatYouLearn: [
      'Network security fundamentals',
      'Firewalls and intrusion detection/prevention',
      'VPN technologies and encryption',
      'Network monitoring and analysis',
      'Wireless security',
      'Security architecture design'
    ],
    modules: [
      { title: 'Network Security Basics', duration: '2 weeks' },
      { title: 'Firewalls & IDS/IPS', duration: '2 weeks' },
      { title: 'VPN & Encryption', duration: '2 weeks' },
      { title: 'Network Monitoring', duration: '2 weeks' },
      { title: 'Security Architecture', duration: '2 weeks' }
    ],
    prerequisites: 'Networking fundamentals (TCP/IP, routing, switching)',
    certification: 'T21 Services Professional Certificate in Network Security',
    careerOutcomes: ['Network Security Engineer', 'Security Architect', 'Network Administrator', 'Security Consultant'],
    instructor: { name: 'Network Security Engineers', bio: 'CCNP Security certified professionals with enterprise network experience.' }
  },

  // BATCH 3: DATA, BUSINESS & SOFTWARE
  'data-analyst': {
    title: 'Data Analyst',
    category: 'Professional Training',
    icon: '📊',
    duration: '12 weeks',
    studyMode: 'Online',
    price: '£1,299',
    overview: 'Master data analysis with Excel, SQL, and visualization tools. Transform data into actionable business insights.',
    whatYouLearn: [
      'Advanced Excel and data manipulation',
      'SQL for data analysis',
      'Data visualization with Tableau/Power BI',
      'Statistical analysis fundamentals',
      'Business intelligence concepts',
      'Dashboard creation and reporting'
    ],
    modules: [
      { title: 'Excel for Data Analysis', duration: '3 weeks' },
      { title: 'SQL Fundamentals', duration: '3 weeks' },
      { title: 'Data Visualization', duration: '3 weeks' },
      { title: 'Statistical Analysis', duration: '2 weeks' },
      { title: 'Real-world Projects', duration: '1 week' }
    ],
    prerequisites: 'Basic computer skills and numeracy',
    certification: 'T21 Services Professional Certificate in Data Analysis',
    careerOutcomes: ['Data Analyst', 'Business Analyst', 'BI Analyst', 'Reporting Analyst'],
    instructor: { name: 'Data Analytics Experts', bio: 'Professional data analysts from Fortune 500 companies with 10+ years experience.' }
  },

  'data-quality-management': {
    title: 'Data Quality Management',
    category: 'Professional Training',
    icon: '📊',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£899',
    overview: 'Learn data governance and quality assurance practices. Ensure data accuracy and reliability.',
    whatYouLearn: [
      'Data quality dimensions and metrics',
      'Data profiling and assessment',
      'Data cleansing techniques',
      'Data governance frameworks',
      'Quality monitoring and reporting',
      'Master data management'
    ],
    modules: [
      { title: 'Data Quality Fundamentals', duration: '2 weeks' },
      { title: 'Data Profiling & Assessment', duration: '2 weeks' },
      { title: 'Data Cleansing', duration: '2 weeks' },
      { title: 'Governance & Monitoring', duration: '2 weeks' }
    ],
    prerequisites: 'Basic data or database knowledge',
    certification: 'T21 Services Professional Certificate in Data Quality Management',
    careerOutcomes: ['Data Quality Analyst', 'Data Steward', 'Data Governance Specialist', 'MDM Analyst'],
    instructor: { name: 'Data Governance Experts', bio: 'Certified data management professionals with enterprise experience.' }
  },

  'business-intelligence': {
    title: 'Business Intelligence',
    category: 'Professional Training',
    icon: '📊',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,199',
    overview: 'Master BI tools and data-driven decision making. Create powerful dashboards and reports.',
    whatYouLearn: [
      'BI concepts and architecture',
      'Power BI and Tableau mastery',
      'Data warehousing fundamentals',
      'ETL processes',
      'Dashboard design best practices',
      'Business reporting and KPIs'
    ],
    modules: [
      { title: 'BI Fundamentals', duration: '2 weeks' },
      { title: 'Power BI Mastery', duration: '3 weeks' },
      { title: 'Tableau Training', duration: '2 weeks' },
      { title: 'Data Warehousing', duration: '2 weeks' },
      { title: 'Advanced Dashboards', duration: '1 week' }
    ],
    prerequisites: 'Basic SQL and data analysis knowledge',
    certification: 'T21 Services Professional Certificate in Business Intelligence',
    careerOutcomes: ['BI Developer', 'BI Analyst', 'Data Visualization Specialist', 'Analytics Consultant'],
    instructor: { name: 'BI Specialists', bio: 'Microsoft and Tableau certified professionals with enterprise BI experience.' }
  },

  'big-data-analytics': {
    title: 'Big Data Analytics',
    category: 'Professional Training',
    icon: '📊',
    duration: '12 weeks',
    studyMode: 'Online',
    price: '£1,499',
    overview: 'Learn large-scale data processing and analysis. Master Hadoop, Spark, and cloud platforms.',
    whatYouLearn: [
      'Big data concepts and architecture',
      'Hadoop ecosystem',
      'Apache Spark fundamentals',
      'Cloud platforms (AWS, Azure)',
      'NoSQL databases',
      'Real-time data processing'
    ],
    modules: [
      { title: 'Big Data Fundamentals', duration: '2 weeks' },
      { title: 'Hadoop & MapReduce', duration: '3 weeks' },
      { title: 'Apache Spark', duration: '3 weeks' },
      { title: 'Cloud Platforms', duration: '2 weeks' },
      { title: 'Real-time Processing', duration: '2 weeks' }
    ],
    prerequisites: 'Programming knowledge (Python/Java) and SQL',
    certification: 'T21 Services Professional Certificate in Big Data Analytics',
    careerOutcomes: ['Big Data Engineer', 'Data Platform Engineer', 'Hadoop Developer', 'Spark Developer'],
    instructor: { name: 'Big Data Engineers', bio: 'Cloud-certified engineers with experience in large-scale data systems.' }
  },

  'project-management': {
    title: 'Project Management',
    category: 'Professional Training',
    icon: '📈',
    duration: '10 weeks',
    studyMode: 'Online / Blended',
    price: '£1,199',
    overview: 'Professional project management with Agile, Waterfall, and PRINCE2 methodologies.',
    whatYouLearn: [
      'Project management fundamentals',
      'Agile and Scrum frameworks',
      'Waterfall methodology',
      'PRINCE2 principles',
      'Risk and stakeholder management',
      'Project planning and execution'
    ],
    modules: [
      { title: 'PM Fundamentals', duration: '2 weeks' },
      { title: 'Agile & Scrum', duration: '3 weeks' },
      { title: 'Waterfall & PRINCE2', duration: '2 weeks' },
      { title: 'Risk Management', duration: '2 weeks' },
      { title: 'Real-world Projects', duration: '1 week' }
    ],
    prerequisites: 'Business or IT background helpful',
    certification: 'T21 Services Professional Certificate in Project Management',
    careerOutcomes: ['Project Manager', 'Scrum Master', 'Programme Manager', 'PMO Analyst'],
    instructor: { name: 'Certified Project Managers', bio: 'PMP and PRINCE2 certified professionals with 15+ years experience.' }
  },

  'business-process-management': {
    title: 'Business Process Management',
    category: 'Professional Training',
    icon: '📈',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£999',
    overview: 'Process optimization and workflow improvement. Learn to streamline business operations.',
    whatYouLearn: [
      'BPM concepts and lifecycle',
      'Process mapping and modeling',
      'Process analysis and optimization',
      'Workflow automation',
      'Change management',
      'Performance measurement'
    ],
    modules: [
      { title: 'BPM Fundamentals', duration: '2 weeks' },
      { title: 'Process Mapping', duration: '2 weeks' },
      { title: 'Process Optimization', duration: '2 weeks' },
      { title: 'Automation & Tools', duration: '2 weeks' }
    ],
    prerequisites: 'Business experience helpful',
    certification: 'T21 Services Professional Certificate in Business Process Management',
    careerOutcomes: ['Process Analyst', 'BPM Consultant', 'Operations Manager', 'Continuous Improvement Manager'],
    instructor: { name: 'BPM Specialists', bio: 'Lean Six Sigma certified professionals with process improvement expertise.' }
  },

  'change-management': {
    title: 'Change Management',
    category: 'Professional Training',
    icon: '📈',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£999',
    overview: 'Organizational change and transformation management. Lead successful change initiatives.',
    whatYouLearn: [
      'Change management frameworks',
      'Stakeholder engagement',
      'Communication strategies',
      'Resistance management',
      'Change impact assessment',
      'Organizational culture'
    ],
    modules: [
      { title: 'Change Management Fundamentals', duration: '2 weeks' },
      { title: 'Stakeholder Management', duration: '2 weeks' },
      { title: 'Communication & Resistance', duration: '2 weeks' },
      { title: 'Implementation & Sustainability', duration: '2 weeks' }
    ],
    prerequisites: 'Management or business experience',
    certification: 'T21 Services Professional Certificate in Change Management',
    careerOutcomes: ['Change Manager', 'Transformation Lead', 'Organizational Development Consultant', 'Change Analyst'],
    instructor: { name: 'Change Management Experts', bio: 'Prosci certified change practitioners with enterprise transformation experience.' }
  },

  'product-management': {
    title: 'Product Management',
    category: 'Professional Training',
    icon: '📈',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,299',
    overview: 'Product lifecycle and strategic product development. Build products customers love.',
    whatYouLearn: [
      'Product management fundamentals',
      'Market research and analysis',
      'Product roadmap development',
      'Agile product development',
      'User experience and design thinking',
      'Product metrics and analytics'
    ],
    modules: [
      { title: 'Product Management Basics', duration: '2 weeks' },
      { title: 'Market Research', duration: '2 weeks' },
      { title: 'Product Strategy', duration: '2 weeks' },
      { title: 'Agile Product Development', duration: '2 weeks' },
      { title: 'Metrics & Analytics', duration: '2 weeks' }
    ],
    prerequisites: 'Business or technical background',
    certification: 'T21 Services Professional Certificate in Product Management',
    careerOutcomes: ['Product Manager', 'Product Owner', 'Technical Product Manager', 'Product Analyst'],
    instructor: { name: 'Product Management Leaders', bio: 'Senior product managers from leading tech companies.' }
  },

  'web-development': {
    title: 'Web Development',
    category: 'Professional Training',
    icon: '💻',
    duration: '16 weeks',
    studyMode: 'Online',
    price: '£1,799',
    overview: 'Full-stack web development with modern frameworks. Build professional web applications.',
    whatYouLearn: [
      'HTML, CSS, and JavaScript',
      'React and modern frontend frameworks',
      'Node.js and backend development',
      'Database design and SQL',
      'RESTful APIs',
      'Deployment and DevOps basics'
    ],
    modules: [
      { title: 'Frontend Fundamentals', duration: '4 weeks' },
      { title: 'React Development', duration: '4 weeks' },
      { title: 'Backend with Node.js', duration: '4 weeks' },
      { title: 'Databases & APIs', duration: '2 weeks' },
      { title: 'Deployment & Projects', duration: '2 weeks' }
    ],
    prerequisites: 'Basic computer skills',
    certification: 'T21 Services Professional Certificate in Web Development',
    careerOutcomes: ['Web Developer', 'Frontend Developer', 'Full Stack Developer', 'JavaScript Developer'],
    instructor: { name: 'Senior Web Developers', bio: 'Professional developers from leading tech companies with 10+ years experience.' }
  },

  'software-testing': {
    title: 'Software Testing',
    category: 'Professional Training',
    icon: '💻',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,099',
    overview: 'Manual and automated testing with QA processes. Ensure software quality and reliability.',
    whatYouLearn: [
      'Software testing fundamentals',
      'Test planning and design',
      'Manual testing techniques',
      'Bug tracking and reporting',
      'Test automation basics',
      'Agile testing practices'
    ],
    modules: [
      { title: 'Testing Fundamentals', duration: '2 weeks' },
      { title: 'Test Design & Planning', duration: '2 weeks' },
      { title: 'Manual Testing', duration: '2 weeks' },
      { title: 'Test Automation Intro', duration: '2 weeks' },
      { title: 'Agile Testing', duration: '2 weeks' }
    ],
    prerequisites: 'Basic IT knowledge',
    certification: 'T21 Services Professional Certificate in Software Testing',
    careerOutcomes: ['QA Tester', 'Test Analyst', 'QA Engineer', 'Test Coordinator'],
    instructor: { name: 'QA Professionals', bio: 'ISTQB certified testers with enterprise testing experience.' }
  },

  'test-automation': {
    title: 'Test Automation',
    category: 'Professional Training',
    icon: '💻',
    duration: '12 weeks',
    studyMode: 'Online with Labs',
    price: '£1,399',
    overview: 'Automated testing with Selenium, Cypress, and modern frameworks. Build robust test suites.',
    whatYouLearn: [
      'Test automation fundamentals',
      'Selenium WebDriver',
      'Cypress framework',
      'API testing automation',
      'CI/CD integration',
      'Test framework design'
    ],
    modules: [
      { title: 'Automation Fundamentals', duration: '2 weeks' },
      { title: 'Selenium WebDriver', duration: '3 weeks' },
      { title: 'Cypress Testing', duration: '3 weeks' },
      { title: 'API Testing', duration: '2 weeks' },
      { title: 'CI/CD & Best Practices', duration: '2 weeks' }
    ],
    prerequisites: 'Programming basics and testing knowledge',
    certification: 'T21 Services Professional Certificate in Test Automation',
    careerOutcomes: ['Automation Test Engineer', 'SDET', 'QA Automation Engineer', 'Test Architect'],
    instructor: { name: 'Automation Engineers', bio: 'Senior automation engineers with expertise in modern testing frameworks.' }
  },

  'devops-engineering': {
    title: 'DevOps Engineering',
    category: 'Professional Training',
    icon: '💻',
    duration: '12 weeks',
    studyMode: 'Online with Labs',
    price: '£1,599',
    overview: 'CI/CD, cloud infrastructure, and automation. Master modern DevOps practices.',
    whatYouLearn: [
      'DevOps principles and culture',
      'CI/CD pipelines',
      'Docker and containerization',
      'Kubernetes orchestration',
      'Infrastructure as Code',
      'Cloud platforms (AWS/Azure)'
    ],
    modules: [
      { title: 'DevOps Fundamentals', duration: '2 weeks' },
      { title: 'CI/CD Pipelines', duration: '3 weeks' },
      { title: 'Docker & Containers', duration: '3 weeks' },
      { title: 'Kubernetes', duration: '2 weeks' },
      { title: 'Cloud & IaC', duration: '2 weeks' }
    ],
    prerequisites: 'Linux basics and programming knowledge',
    certification: 'T21 Services Professional Certificate in DevOps Engineering',
    careerOutcomes: ['DevOps Engineer', 'Site Reliability Engineer', 'Cloud Engineer', 'Platform Engineer'],
    instructor: { name: 'DevOps Engineers', bio: 'Cloud-certified DevOps professionals from leading tech companies.' }
  },

  'mobile-app-development': {
    title: 'Mobile App Development',
    category: 'Professional Training',
    icon: '💻',
    duration: '14 weeks',
    studyMode: 'Online',
    price: '£1,699',
    overview: 'iOS and Android application development. Build native and cross-platform mobile apps.',
    whatYouLearn: [
      'Mobile development fundamentals',
      'React Native for cross-platform',
      'iOS development with Swift',
      'Android development with Kotlin',
      'Mobile UI/UX design',
      'App deployment and distribution'
    ],
    modules: [
      { title: 'Mobile Dev Fundamentals', duration: '2 weeks' },
      { title: 'React Native', duration: '4 weeks' },
      { title: 'iOS with Swift', duration: '3 weeks' },
      { title: 'Android with Kotlin', duration: '3 weeks' },
      { title: 'Deployment & Publishing', duration: '2 weeks' }
    ],
    prerequisites: 'Programming basics (JavaScript recommended)',
    certification: 'T21 Services Professional Certificate in Mobile App Development',
    careerOutcomes: ['Mobile Developer', 'iOS Developer', 'Android Developer', 'React Native Developer'],
    instructor: { name: 'Mobile Development Experts', bio: 'Professional mobile developers with apps in App Store and Play Store.' }
  },

  // BATCH 4: FINANCE, MARKETING & LEADERSHIP (FINAL BATCH!)
  'financial-crime-analyst': {
    title: 'Financial Crime Analyst',
    category: 'Professional Training',
    icon: '💰',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,299',
    overview: 'AML, fraud detection, and financial compliance training. Protect organizations from financial crime.',
    whatYouLearn: [
      'Anti-Money Laundering (AML) regulations',
      'Fraud detection techniques',
      'Know Your Customer (KYC) procedures',
      'Transaction monitoring',
      'Suspicious activity reporting',
      'Financial crime investigation'
    ],
    modules: [
      { title: 'AML Fundamentals', duration: '2 weeks' },
      { title: 'Fraud Detection', duration: '2 weeks' },
      { title: 'KYC & Due Diligence', duration: '2 weeks' },
      { title: 'Transaction Monitoring', duration: '2 weeks' },
      { title: 'Investigation & Reporting', duration: '2 weeks' }
    ],
    prerequisites: 'Finance or compliance background helpful',
    certification: 'T21 Services Professional Certificate in Financial Crime Analysis',
    careerOutcomes: ['Financial Crime Analyst', 'AML Analyst', 'Fraud Analyst', 'Compliance Analyst'],
    instructor: { name: 'Financial Crime Experts', bio: 'Former bank compliance officers and financial crime investigators.' }
  },

  'risk-management': {
    title: 'Risk Management',
    category: 'Professional Training',
    icon: '💰',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,199',
    overview: 'Enterprise risk assessment and mitigation strategies. Identify and manage organizational risks.',
    whatYouLearn: [
      'Risk management frameworks',
      'Risk identification and assessment',
      'Risk mitigation strategies',
      'Enterprise risk management (ERM)',
      'Risk reporting and monitoring',
      'Business continuity planning'
    ],
    modules: [
      { title: 'Risk Management Fundamentals', duration: '2 weeks' },
      { title: 'Risk Assessment', duration: '2 weeks' },
      { title: 'Risk Mitigation', duration: '2 weeks' },
      { title: 'ERM & Frameworks', duration: '2 weeks' },
      { title: 'Monitoring & Reporting', duration: '2 weeks' }
    ],
    prerequisites: 'Business or finance background',
    certification: 'T21 Services Professional Certificate in Risk Management',
    careerOutcomes: ['Risk Manager', 'Risk Analyst', 'ERM Specialist', 'Risk Consultant'],
    instructor: { name: 'Risk Management Professionals', bio: 'Certified risk managers with enterprise experience.' }
  },

  'compliance-governance': {
    title: 'Compliance & Governance',
    category: 'Professional Training',
    icon: '💰',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,199',
    overview: 'Regulatory compliance and corporate governance. Ensure organizational compliance with regulations.',
    whatYouLearn: [
      'Regulatory compliance frameworks',
      'Corporate governance principles',
      'Compliance program development',
      'Policy and procedure management',
      'Audit and monitoring',
      'Regulatory reporting'
    ],
    modules: [
      { title: 'Compliance Fundamentals', duration: '2 weeks' },
      { title: 'Corporate Governance', duration: '2 weeks' },
      { title: 'Compliance Programs', duration: '2 weeks' },
      { title: 'Audit & Monitoring', duration: '2 weeks' },
      { title: 'Regulatory Reporting', duration: '2 weeks' }
    ],
    prerequisites: 'Legal, finance, or business background',
    certification: 'T21 Services Professional Certificate in Compliance & Governance',
    careerOutcomes: ['Compliance Officer', 'Governance Specialist', 'Regulatory Affairs Manager', 'Compliance Analyst'],
    instructor: { name: 'Compliance Professionals', bio: 'Former regulators and compliance directors from financial institutions.' }
  },

  'financial-analysis': {
    title: 'Financial Analysis',
    category: 'Professional Training',
    icon: '💰',
    duration: '12 weeks',
    studyMode: 'Online',
    price: '£1,299',
    overview: 'Financial modeling and business valuation. Analyze financial data and make informed decisions.',
    whatYouLearn: [
      'Financial statement analysis',
      'Financial modeling in Excel',
      'Valuation techniques',
      'Investment analysis',
      'Budgeting and forecasting',
      'Financial reporting'
    ],
    modules: [
      { title: 'Financial Statements', duration: '3 weeks' },
      { title: 'Financial Modeling', duration: '3 weeks' },
      { title: 'Valuation Methods', duration: '2 weeks' },
      { title: 'Investment Analysis', duration: '2 weeks' },
      { title: 'Forecasting & Reporting', duration: '2 weeks' }
    ],
    prerequisites: 'Basic accounting and Excel knowledge',
    certification: 'T21 Services Professional Certificate in Financial Analysis',
    careerOutcomes: ['Financial Analyst', 'Investment Analyst', 'FP&A Analyst', 'Business Analyst'],
    instructor: { name: 'Financial Analysts', bio: 'CFA charterholders and senior analysts from investment banks.' }
  },

  'digital-marketing': {
    title: 'Digital Marketing',
    category: 'Professional Training',
    icon: '🎯',
    duration: '10 weeks',
    studyMode: 'Online',
    price: '£1,199',
    overview: 'SEO, social media, content strategy, and analytics. Master digital marketing channels.',
    whatYouLearn: [
      'Digital marketing fundamentals',
      'SEO and SEM strategies',
      'Social media marketing',
      'Content marketing',
      'Email marketing campaigns',
      'Analytics and performance tracking'
    ],
    modules: [
      { title: 'Digital Marketing Basics', duration: '2 weeks' },
      { title: 'SEO & SEM', duration: '2 weeks' },
      { title: 'Social Media Marketing', duration: '2 weeks' },
      { title: 'Content & Email Marketing', duration: '2 weeks' },
      { title: 'Analytics & Optimization', duration: '2 weeks' }
    ],
    prerequisites: 'Basic marketing knowledge helpful',
    certification: 'T21 Services Professional Certificate in Digital Marketing',
    careerOutcomes: ['Digital Marketing Manager', 'SEO Specialist', 'Social Media Manager', 'Marketing Analyst'],
    instructor: { name: 'Digital Marketing Experts', bio: 'Google and Facebook certified marketers with agency experience.' }
  },

  'digital-transformation': {
    title: 'Digital Transformation',
    category: 'Professional Training',
    icon: '🎯',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£1,099',
    overview: 'Business digitalization and technology adoption. Lead digital transformation initiatives.',
    whatYouLearn: [
      'Digital transformation frameworks',
      'Technology adoption strategies',
      'Change management for digital',
      'Digital business models',
      'Innovation and disruption',
      'Digital culture building'
    ],
    modules: [
      { title: 'Digital Transformation Fundamentals', duration: '2 weeks' },
      { title: 'Technology Strategy', duration: '2 weeks' },
      { title: 'Change Management', duration: '2 weeks' },
      { title: 'Implementation & Culture', duration: '2 weeks' }
    ],
    prerequisites: 'Business or technology background',
    certification: 'T21 Services Professional Certificate in Digital Transformation',
    careerOutcomes: ['Digital Transformation Manager', 'Innovation Manager', 'Digital Strategy Consultant', 'CTO/CIO'],
    instructor: { name: 'Digital Transformation Leaders', bio: 'Former CTOs and digital transformation consultants.' }
  },

  'ux-ui-design': {
    title: 'UX/UI Design',
    category: 'Professional Training',
    icon: '🎯',
    duration: '12 weeks',
    studyMode: 'Online',
    price: '£1,399',
    overview: 'User experience and interface design principles. Create intuitive and beautiful digital products.',
    whatYouLearn: [
      'UX research and user testing',
      'UI design principles',
      'Wireframing and prototyping',
      'Design tools (Figma, Adobe XD)',
      'Interaction design',
      'Usability testing'
    ],
    modules: [
      { title: 'UX Fundamentals', duration: '3 weeks' },
      { title: 'UI Design Principles', duration: '3 weeks' },
      { title: 'Prototyping & Tools', duration: '3 weeks' },
      { title: 'Testing & Iteration', duration: '2 weeks' },
      { title: 'Portfolio Projects', duration: '1 week' }
    ],
    prerequisites: 'Creative mindset, basic design sense',
    certification: 'T21 Services Professional Certificate in UX/UI Design',
    careerOutcomes: ['UX Designer', 'UI Designer', 'Product Designer', 'Interaction Designer'],
    instructor: { name: 'UX/UI Design Experts', bio: 'Professional designers from leading tech companies and agencies.' }
  },

  'content-strategy': {
    title: 'Content Strategy',
    category: 'Professional Training',
    icon: '🎯',
    duration: '8 weeks',
    studyMode: 'Online',
    price: '£999',
    overview: 'Content creation, management, and distribution. Build effective content strategies.',
    whatYouLearn: [
      'Content strategy frameworks',
      'Content creation and writing',
      'Content management systems',
      'SEO for content',
      'Content distribution channels',
      'Performance measurement'
    ],
    modules: [
      { title: 'Content Strategy Basics', duration: '2 weeks' },
      { title: 'Content Creation', duration: '2 weeks' },
      { title: 'Content Management', duration: '2 weeks' },
      { title: 'Distribution & Analytics', duration: '2 weeks' }
    ],
    prerequisites: 'Writing skills and creativity',
    certification: 'T21 Services Professional Certificate in Content Strategy',
    careerOutcomes: ['Content Strategist', 'Content Manager', 'Content Marketing Manager', 'Editorial Director'],
    instructor: { name: 'Content Strategy Experts', bio: 'Professional content strategists from media and tech companies.' }
  },

  'leadership-development': {
    title: 'Leadership Development',
    category: 'Professional Training',
    icon: '👔',
    duration: '10 weeks',
    studyMode: 'Online / Blended',
    price: '£1,299',
    overview: 'Strategic leadership and executive management skills. Develop your leadership potential.',
    whatYouLearn: [
      'Leadership styles and theories',
      'Strategic thinking and planning',
      'Team building and motivation',
      'Decision-making and problem-solving',
      'Conflict resolution',
      'Executive presence'
    ],
    modules: [
      { title: 'Leadership Fundamentals', duration: '2 weeks' },
      { title: 'Strategic Leadership', duration: '2 weeks' },
      { title: 'Team Management', duration: '2 weeks' },
      { title: 'Decision Making', duration: '2 weeks' },
      { title: 'Executive Skills', duration: '2 weeks' }
    ],
    prerequisites: 'Management experience helpful',
    certification: 'T21 Services Professional Certificate in Leadership Development',
    careerOutcomes: ['Team Leader', 'Manager', 'Senior Manager', 'Director'],
    instructor: { name: 'Leadership Coaches', bio: 'Executive coaches and former C-suite leaders from Fortune 500 companies.' }
  },

  'communication-skills': {
    title: 'Communication Skills',
    category: 'Professional Training',
    icon: '👔',
    duration: '6 weeks',
    studyMode: 'Online',
    price: '£799',
    overview: 'Business communication, presentation, and negotiation. Master professional communication.',
    whatYouLearn: [
      'Effective business communication',
      'Presentation skills',
      'Negotiation techniques',
      'Active listening',
      'Written communication',
      'Cross-cultural communication'
    ],
    modules: [
      { title: 'Communication Fundamentals', duration: '1 week' },
      { title: 'Presentation Skills', duration: '2 weeks' },
      { title: 'Negotiation', duration: '1 week' },
      { title: 'Written Communication', duration: '1 week' },
      { title: 'Advanced Techniques', duration: '1 week' }
    ],
    prerequisites: 'None',
    certification: 'T21 Services Professional Certificate in Communication Skills',
    careerOutcomes: ['Any professional role', 'Manager', 'Sales Professional', 'Consultant'],
    instructor: { name: 'Communication Experts', bio: 'Professional speakers and communication coaches.' }
  },

  'customer-service-excellence': {
    title: 'Customer Service Excellence',
    category: 'Professional Training',
    icon: '👔',
    duration: '6 weeks',
    studyMode: 'Online',
    price: '£799',
    overview: 'Professional customer service and relationship management. Deliver exceptional customer experiences.',
    whatYouLearn: [
      'Customer service excellence principles',
      'Customer relationship management',
      'Handling difficult customers',
      'Service recovery',
      'Customer loyalty building',
      'Service quality measurement'
    ],
    modules: [
      { title: 'Service Excellence Basics', duration: '1 week' },
      { title: 'Customer Relationships', duration: '2 weeks' },
      { title: 'Difficult Situations', duration: '1 week' },
      { title: 'Service Recovery', duration: '1 week' },
      { title: 'Quality & Loyalty', duration: '1 week' }
    ],
    prerequisites: 'Customer-facing experience helpful',
    certification: 'T21 Services Professional Certificate in Customer Service Excellence',
    careerOutcomes: ['Customer Service Manager', 'Client Relations Manager', 'Customer Success Manager', 'Service Manager'],
    instructor: { name: 'Customer Service Professionals', bio: 'Award-winning customer service leaders from hospitality and retail.' }
  },

  'time-management': {
    title: 'Time Management',
    category: 'Professional Training',
    icon: '👔',
    duration: '4 weeks',
    studyMode: 'Online',
    price: '£599',
    overview: 'Productivity, prioritization, and efficiency techniques. Master your time and boost productivity.',
    whatYouLearn: [
      'Time management principles',
      'Prioritization techniques',
      'Goal setting and planning',
      'Productivity tools and apps',
      'Overcoming procrastination',
      'Work-life balance'
    ],
    modules: [
      { title: 'Time Management Fundamentals', duration: '1 week' },
      { title: 'Prioritization & Planning', duration: '1 week' },
      { title: 'Productivity Tools', duration: '1 week' },
      { title: 'Advanced Techniques', duration: '1 week' }
    ],
    prerequisites: 'None',
    certification: 'T21 Services Professional Certificate in Time Management',
    careerOutcomes: ['Any professional role', 'Manager', 'Entrepreneur', 'Professional'],
    instructor: { name: 'Productivity Experts', bio: 'Time management coaches and productivity consultants.' }
  },

  'emotional-intelligence': {
    title: 'Emotional Intelligence',
    category: 'Professional Training',
    icon: '👔',
    duration: '6 weeks',
    studyMode: 'Online',
    price: '£899',
    overview: 'Self-awareness and interpersonal effectiveness. Develop emotional intelligence for professional success.',
    whatYouLearn: [
      'Emotional intelligence fundamentals',
      'Self-awareness and self-regulation',
      'Empathy and social skills',
      'Relationship management',
      'Emotional intelligence in leadership',
      'Stress and emotion management'
    ],
    modules: [
      { title: 'EQ Fundamentals', duration: '1 week' },
      { title: 'Self-Awareness', duration: '2 weeks' },
      { title: 'Social Skills', duration: '1 week' },
      { title: 'Relationship Management', duration: '1 week' },
      { title: 'EQ in Leadership', duration: '1 week' }
    ],
    prerequisites: 'None',
    certification: 'T21 Services Professional Certificate in Emotional Intelligence',
    careerOutcomes: ['Leader', 'Manager', 'HR Professional', 'Coach'],
    instructor: { name: 'EQ Specialists', bio: 'Certified emotional intelligence coaches and psychologists.' }
  }
};

// Generate static params for all courses
export async function generateStaticParams() {
  return Object.keys(courseData).map((courseId) => ({
    courseId: courseId,
  }));
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courseData[courseId];

  if (!course) {
    return (
      <main className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <Link href="/services/training" className="text-[#D4AF37] hover:underline">
            ← Back to Training
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero with Image */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            href="/services/training"
            className="text-[#D4AF37] hover:text-[#FFD700] transition-colors inline-flex items-center gap-2 mb-6"
          >
            ← Back to All Courses
          </Link>
          
          <div className="mb-8">
            <div className="inline-block bg-[#D4AF37] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {course.category}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{course.title}</h1>
            {course.code && (
              <p className="text-gray-400 mb-4">Course Code: {course.code}</p>
            )}
            <p className="text-xl text-gray-300 mb-6">{course.overview}</p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-[#D4AF37]/20">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-[#D4AF37]/20">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 font-medium">{course.studyMode}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-[#D4AF37]/20">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 font-medium">{course.price}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/enroll"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Enroll Now
            </Link>
            <Link
              href="/consultation"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Request Info
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            What You'll <span className="text-[#D4AF37]">Learn</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {course.whatYouLearn.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-4">
                <span className="text-[#D4AF37] text-xl">✓</span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Course <span className="text-[#D4AF37]">Modules</span>
          </h2>
          
          <div className="space-y-4">
            {course.modules.map((module: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37] transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#D4AF37] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#D4AF37]">{module.title}</h3>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{module.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Career <span className="text-[#D4AF37]">Outcomes</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Upon completion, you'll be qualified for these roles:
              </p>
              <div className="space-y-3">
                {course.careerOutcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-[#D4AF37]">🎯</span>
                    <span className="text-gray-300 font-semibold">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Course Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Prerequisites</p>
                  <p className="text-gray-300">{course.prerequisites}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Certification</p>
                  <p className="text-gray-300">{course.certification}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Instructor</p>
                  <p className="text-gray-300 font-semibold">{course.instructor.name}</p>
                  <p className="text-gray-400 text-sm mt-1">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#D4AF37]">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of professionals who have transformed their careers
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/enroll"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
            >
              Enroll Now - {course.price}
            </Link>
            <Link
              href="/consultation"
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all text-lg"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
