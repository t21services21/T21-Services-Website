'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import Link from 'next/link';

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postcode: '',
    courseType: '',
    courseName: '',
    startDate: '',
    studyMode: '',
    previousQualifications: '',
    employmentStatus: '',
    fundingType: '',
    specialRequirements: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    termsAccepted: false,
    dataProcessingAccepted: false
  });

  const courseCategories = {
    healthcare: [
      { value: 'rtt-hospital-admin', label: 'Understanding RTT and Hospital Administration', level: 'Bespoke Endorsed' },
      { value: 'nhs-rtt', label: 'NHS RTT Pathway Coordination', level: 'Professional' },
      { value: 'hospital-admin', label: 'Hospital Administration', level: 'Professional' },
      { value: 'healthcare-data', label: 'Healthcare Data Management', level: 'Professional' },
      { value: 'clinical-coding', label: 'Clinical Coding', level: 'Professional' },
      { value: 'patient-access', label: 'Patient Access Administration', level: 'Professional' },
      { value: 'waiting-list', label: 'Waiting List Management', level: 'Professional' }
    ],
    tquk: [
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
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted || !formData.dataProcessingAccepted) {
      alert('Please accept the terms and conditions and data processing agreement to continue.');
      return;
    }
    alert('Thank you for enrolling. You will receive confirmation within 24 hours with course details and next steps.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Workforce <span className="text-[#D4AF37]">Development</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Enrol in our healthcare operational training programmes
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>TQUK Approved Centre</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>Healthcare Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">&#10003;</span>
              <span>Expert-Led Training</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Programme Selection</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Programme Type *</label>
                  <select name="courseType" required value={formData.courseType} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                    <option value="">Select programme type</option>
                    <option value="healthcare">Healthcare Operational Training</option>
                    <option value="tquk">TQUK Qualification</option>
                  </select>
                </div>

                {formData.courseType && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Select Programme *</label>
                    <select name="courseName" required value={formData.courseName} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                      <option value="">Select a programme</option>
                      {(formData.courseType === 'tquk' ? courseCategories.tquk : courseCategories.healthcare).map((course) => (
                        <option key={course.value} value={course.value}>{course.label} - {course.level}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Start Date *</label>
                    <input type="date" name="startDate" required value={formData.startDate} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Study Mode *</label>
                    <select name="studyMode" required value={formData.studyMode} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                      <option value="">Select study mode</option>
                      <option value="online">Online Learning</option>
                      <option value="blended">Blended (Online + In-Person)</option>
                      <option value="classroom">Classroom Based</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="Last name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="+44 7XXX XXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Date of Birth *</label>
                  <input type="date" name="dateOfBirth" required value={formData.dateOfBirth} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Postcode *</label>
                  <input type="text" name="postcode" required value={formData.postcode} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="L8 7LF" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Address *</label>
                  <input type="text" name="address" required value={formData.address} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="Street address" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">City *</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="Liverpool" />
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Previous Qualifications</label>
                  <textarea name="previousQualifications" value={formData.previousQualifications} onChange={handleChange} rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                    placeholder="List any relevant qualifications or certifications..." />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Employment Status *</label>
                    <select name="employmentStatus" required value={formData.employmentStatus} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                      <option value="">Select status</option>
                      <option value="employed">Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="student">Student</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Funding Type *</label>
                    <select name="fundingType" required value={formData.fundingType} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none [&>option]:bg-gray-800 [&>option]:text-white">
                      <option value="">Select funding</option>
                      <option value="self-funded">Self-Funded</option>
                      <option value="employer">Employer Funded</option>
                      <option value="government">Government Funded</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Special Requirements or Accessibility Needs</label>
                  <textarea name="specialRequirements" value={formData.specialRequirements} onChange={handleChange} rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none resize-none"
                    placeholder="Please let us know if you have any special requirements..." />
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Emergency Contact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Contact Name *</label>
                  <input type="text" name="emergencyName" required value={formData.emergencyName} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Contact Phone *</label>
                  <input type="tel" name="emergencyPhone" required value={formData.emergencyPhone} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="+44 7XXX XXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Relationship *</label>
                  <input type="text" name="emergencyRelation" required value={formData.emergencyRelation} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none" placeholder="e.g., Parent, Spouse" />
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Terms and Conditions</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}
                    className="mt-1 w-5 h-5 bg-gray-800 border-gray-700 rounded focus:ring-[#D4AF37]" required />
                  <span className="text-gray-300 text-sm">
                    I accept the <Link href="/terms" className="text-[#D4AF37] hover:underline">Terms and Conditions</Link> and understand the programme requirements, fees, and cancellation policy.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="dataProcessingAccepted" checked={formData.dataProcessingAccepted} onChange={handleChange}
                    className="mt-1 w-5 h-5 bg-gray-800 border-gray-700 rounded focus:ring-[#D4AF37]" required />
                  <span className="text-gray-300 text-sm">
                    I consent to T21 Services processing my personal data for enrolment, programme delivery, and communication purposes in accordance with GDPR.
                  </span>
                </label>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-[#D4AF37] text-black px-12 py-4 rounded-lg font-semibold hover:bg-[#FFD700] transition-all text-lg">
                Complete Enrolment
              </button>
              <p className="text-sm text-gray-400 mt-4">You will receive confirmation within 24 hours</p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            What Happens <span className="text-[#D4AF37]">Next</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Confirmation</h3>
              <p className="text-gray-300 text-sm">Receive enrolment confirmation within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Onboarding</h3>
              <p className="text-gray-300 text-sm">Receive learning portal access and programme materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Training</h3>
              <p className="text-gray-300 text-sm">Begin your programme with expert-led instruction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-2">Deployment</h3>
              <p className="text-gray-300 text-sm">Complete training and join our operational workforce</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}