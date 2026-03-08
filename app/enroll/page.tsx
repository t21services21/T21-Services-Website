'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postcode: '',
    
    // Course Selection
    courseType: '',
    courseName: '',
    startDate: '',
    studyMode: '',
    
    // Additional Information
    previousQualifications: '',
    employmentStatus: '',
    fundingType: '',
    specialRequirements: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    
    // Agreements
    termsAccepted: false,
    dataProcessingAccepted: false
  });

  const courseCategories = {
    tquk: [
      { value: 'rtt-hospital-admin', label: 'Understanding RTT and Hospital Administration', level: 'Bespoke Endorsed' },
      { value: 'english-level-1', label: 'Functional Skills English Level 1', level: 'Level 1 (RQF)' },
      { value: 'english-level-2', label: 'Functional Skills English Level 2', level: 'Level 2 (RQF)' },
      { value: 'maths-level-1', label: 'Functional Skills Maths Level 1', level: 'Level 1 (RQF)' },
      { value: 'maths-level-2', label: 'Functional Skills Maths Level 2', level: 'Level 2 (RQF)' },
      { value: 'customer-service', label: 'Certificate in Customer Service', level: 'Level 2 (RQF)' },
      { value: 'it-user-skills', label: 'Certificate in IT User Skills', level: 'Level 2 (RQF)' },
      { value: 'adult-social-care', label: 'Certificate in Preparing to Work in Adult Social Care', level: 'Level 2 (RQF)' },
      { value: 'business-admin', label: 'Certificate in Principles of Business Administration', level: 'Level 2 (RQF)' },
      { value: 'teaching-support', label: 'Certificate in Supporting Teaching and Learning in Schools', level: 'Level 3 (RQF)' },
      { value: 'adult-care-diploma', label: 'Diploma in Adult Care', level: 'Level 3 (RQF)' }
    ],
    professional: [
      // Healthcare & NHS
      { value: 'nhs-rtt', label: 'NHS RTT Coordinator', level: 'Healthcare' },
      { value: 'hospital-admin', label: 'Hospital Administration', level: 'Healthcare' },
      { value: 'healthcare-data', label: 'Healthcare Data Management', level: 'Healthcare' },
      { value: 'clinical-coding', label: 'Clinical Coding', level: 'Healthcare' },
      
      // Cybersecurity
      { value: 'soc-analyst', label: 'SOC Analyst Training', level: 'Cybersecurity' },
      { value: 'cybersecurity-fundamentals', label: 'Cybersecurity Fundamentals', level: 'Cybersecurity' },
      { value: 'information-security', label: 'Information Security', level: 'Cybersecurity' },
      { value: 'incident-response', label: 'Incident Response', level: 'Cybersecurity' },
      { value: 'threat-intelligence', label: 'Threat Intelligence', level: 'Cybersecurity' },
      { value: 'network-security', label: 'Network Security', level: 'Cybersecurity' },
      
      // Data & Analytics
      { value: 'data-science', label: 'Data Science', level: 'Data & Analytics' },
      { value: 'data-analyst', label: 'Data Analyst', level: 'Data & Analytics' },
      { value: 'data-quality', label: 'Data Quality Management', level: 'Data & Analytics' },
      { value: 'business-intelligence', label: 'Business Intelligence', level: 'Data & Analytics' },
      { value: 'big-data', label: 'Big Data Analytics', level: 'Data & Analytics' },
      
      // Business Analysis
      { value: 'business-analyst', label: 'Business Analyst', level: 'Business' },
      { value: 'project-management', label: 'Project Management', level: 'Business' },
      { value: 'process-management', label: 'Business Process Management', level: 'Business' },
      { value: 'change-management', label: 'Change Management', level: 'Business' },
      { value: 'product-management', label: 'Product Management', level: 'Business' },
      
      // Software Development
      { value: 'web-development', label: 'Web Development', level: 'IT & Development' },
      { value: 'software-testing', label: 'Software Testing', level: 'IT & Development' },
      { value: 'test-automation', label: 'Test Automation', level: 'IT & Development' },
      { value: 'devops', label: 'DevOps Engineering', level: 'IT & Development' },
      { value: 'mobile-dev', label: 'Mobile App Development', level: 'IT & Development' },
      
      // Financial
      { value: 'financial-crime', label: 'Financial Crime Analyst', level: 'Finance' },
      { value: 'risk-management', label: 'Risk Management', level: 'Finance' },
      { value: 'compliance', label: 'Compliance & Governance', level: 'Finance' },
      { value: 'financial-analysis', label: 'Financial Analysis', level: 'Finance' },
      
      // Digital & Marketing
      { value: 'digital-marketing', label: 'Digital Marketing', level: 'Marketing' },
      { value: 'digital-transformation', label: 'Digital Transformation', level: 'Marketing' },
      { value: 'ux-ui', label: 'UX/UI Design', level: 'Marketing' },
      { value: 'content-strategy', label: 'Content Strategy', level: 'Marketing' },
      
      // Leadership
      { value: 'leadership', label: 'Leadership Development', level: 'Leadership' },
      { value: 'communication', label: 'Communication Skills', level: 'Leadership' },
      { value: 'customer-excellence', label: 'Customer Service Excellence', level: 'Leadership' },
      { value: 'time-management', label: 'Time Management', level: 'Leadership' },
      { value: 'emotional-intelligence', label: 'Emotional Intelligence', level: 'Leadership' }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted || !formData.dataProcessingAccepted) {
      alert('Please accept the terms and conditions and data processing agreement to continue.');
      return;
    }
    
    console.log('Enrollment Data:', formData);
    alert('🎉 Enrollment Successful!\n\nThank you for enrolling with T21 Services!\n\nYou will receive:\n✓ Confirmation email within 24 hours\n✓ Student portal access details\n✓ Course materials and schedule\n✓ Payment instructions\n\nWelcome to T21 Services!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Course <span className="text-[#D4AF37]">Enrollment</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Start your learning journey with T21 Services
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>TQUK Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Flexible Start Dates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Course Selection */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Course Selection</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Course Type *
                  </label>
                  <select
                    name="courseType"
                    required
                    value={formData.courseType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-white">Select course type</option>
                    <option value="tquk" className="bg-gray-800 text-white">TQUK Qualification</option>
                    <option value="professional" className="bg-gray-800 text-white">Professional Training</option>
                  </select>
                </div>

                {formData.courseType && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Select Course *
                    </label>
                    <select
                      name="courseName"
                      required
                      value={formData.courseName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select a course</option>
                      {(formData.courseType === 'tquk' ? courseCategories.tquk : courseCategories.professional).map((course) => (
                        <option key={course.value} value={course.value} className="bg-gray-800 text-white">
                          {course.label} - {course.level}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Preferred Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Study Mode *
                    </label>
                    <select
                      name="studyMode"
                      required
                      value={formData.studyMode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select study mode</option>
                      <option value="online" className="bg-gray-800 text-white">Online Learning</option>
                      <option value="blended" className="bg-gray-800 text-white">Blended (Online + In-Person)</option>
                      <option value="classroom" className="bg-gray-800 text-white">Classroom Based</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Personal Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="L8 7LF"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Street address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Liverpool"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Additional Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Previous Qualifications
                  </label>
                  <textarea
                    name="previousQualifications"
                    value={formData.previousQualifications}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                    placeholder="List any relevant qualifications or certifications..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Employment Status *
                    </label>
                    <select
                      name="employmentStatus"
                      required
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select status</option>
                      <option value="employed" className="bg-gray-800 text-white">Employed</option>
                      <option value="unemployed" className="bg-gray-800 text-white">Unemployed</option>
                      <option value="self-employed" className="bg-gray-800 text-white">Self-Employed</option>
                      <option value="student" className="bg-gray-800 text-white">Student</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Funding Type *
                    </label>
                    <select
                      name="fundingType"
                      required
                      value={formData.fundingType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select funding</option>
                      <option value="self-funded" className="bg-gray-800 text-white">Self-Funded</option>
                      <option value="employer" className="bg-gray-800 text-white">Employer Funded</option>
                      <option value="government" className="bg-gray-800 text-white">Government Funded</option>
                      <option value="other" className="bg-gray-800 text-white">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Special Requirements or Accessibility Needs
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                    placeholder="Please let us know if you have any special requirements..."
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Emergency Contact</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="emergencyName"
                    required
                    value={formData.emergencyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Relationship *
                  </label>
                  <input
                    type="text"
                    name="emergencyRelation"
                    required
                    value={formData.emergencyRelation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none"
                    placeholder="e.g., Parent, Spouse"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Terms & Conditions</h2>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 bg-gray-800 border-gray-700 rounded focus:ring-[#D4AF37]"
                    required
                  />
                  <span className="text-gray-300 text-sm">
                    I accept the <Link href="/terms" className="text-[#D4AF37] hover:underline">Terms and Conditions</Link> and understand the course requirements, fees, and cancellation policy.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="dataProcessingAccepted"
                    checked={formData.dataProcessingAccepted}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 bg-gray-800 border-gray-700 rounded focus:ring-[#D4AF37]"
                    required
                  />
                  <span className="text-gray-300 text-sm">
                    I consent to T21 Services processing my personal data for enrollment, course delivery, and communication purposes in accordance with GDPR.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#D4AF37] text-black px-12 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg"
              >
                Complete Enrollment
              </button>
              <p className="text-sm text-gray-400 mt-4">
                You will receive confirmation within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Happens <span className="text-[#D4AF37]">Next?</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Confirmation</h3>
              <p className="text-gray-300 text-sm">
                Receive enrollment confirmation email within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Portal Access</h3>
              <p className="text-gray-300 text-sm">
                Get your student portal login credentials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Payment</h3>
              <p className="text-gray-300 text-sm">
                Complete payment and receive course materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Start Learning</h3>
              <p className="text-gray-300 text-sm">
                Begin your course on your chosen start date
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
