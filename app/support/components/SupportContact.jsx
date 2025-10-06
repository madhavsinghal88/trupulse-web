'use client';

import { useState } from 'react';

export default function SupportContact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [query, setQuery] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ firstName, lastName, email, phone, jobTitle, company, query, isAgreed })
    fetch('https://hooks.zapier.com/hooks/catch/14238222/bj1e0wg/', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        jobTitle,
        company,
        query,
        moreInfo: isAgreed,
      }),
    }).then((res) => {
      if (res.status === 200) {
       
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setJobTitle('')
        setCompany('')
        setQuery('')
        setIsAgreed(false)

        setAlert('Thanks for reaching out! We will be in touch soon.')
      } else {
        setAlert('Something went wrong! Please try again')
      }
    })
  }

  return (
    <section className="bg-[#FFEFE6] py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-secondary-text mb-2">
            Get in Touch with the TruPulse Team!
          </p>
          <p className="text-base text-secondary-text">
            Have questions about TruPulse or need support? We're here to help.
          </p>
        </div>
        
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-primary-text mb-2">
                  First Name <span className="text-theme">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-primary-text mb-2">
                  Last Name <span className="text-theme">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-text mb-2">
                  Email Address <span className="text-theme">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary-text mb-2">
                  Phone Number <span className="text-gray-500 text-sm">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-semibold text-primary-text mb-2">
                  Job Title <span className="text-gray-500 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors"
                  placeholder="Enter your job title"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-primary-text mb-2">
                  Company Name <span className="text-theme">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors"
                  placeholder="Enter your company name"
                />
              </div>
            </div>


            {/* Query */}
            <div>
              <label htmlFor="query" className="block text-sm font-semibold text-primary-text mb-2">
                Message <span className="text-theme">*</span>
              </label>
              <textarea
                id="query"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-theme transition-colors resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 text-theme bg-gray-100 border-gray-300 rounded focus:ring-theme focus:ring-2"
              />
              <label 
                htmlFor="agreement" 
                className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              >
                I agree to receive promotional text messages from TruPulse about product updates, webinars, events, and insights.
              </label>
            </div>

            {/* Alert Message */}
            {alert && (
              <div className={`px-4 py-3 rounded-lg ${
                alert.includes('Thanks') 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                <div className="flex items-center gap-2">
                  {alert.includes('Thanks') ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className="font-medium">{alert}</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF9000] to-[#FF5900] hover:shadow-lg text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
      </div>
    </div>
    </section>
  );
}
