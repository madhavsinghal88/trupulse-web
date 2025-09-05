import Image from "next/image";

export default function SupportHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F3FFE6] via-[#FFEFE6] to-[#F3FFE6] pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-theme/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-theme/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-theme/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="text-center mb-16">
          {/* Main heading with gradient */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-text mb-4">
              Support
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-theme to-[#FF9000] mx-auto rounded-full"></div>
          </div>
          
          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-text mb-8">
            We're Here To Help
          </h2>
          
          {/* Description */}
          <p className="leading-relaxed text-lg md:text-xl text-secondary-text max-w-4xl mx-auto mb-12">
            Got a question? Start with our website chatbot—it's the fastest way to get answers. Prefer to browse? Check the FAQs, short video tutorials, and step-by-step guides below. Need a human? Email <span className="text-theme font-semibold">support@trupulse.ai</span> or use the form below and we'll jump in.
          </p>
        </div>

        {/* Support options cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Chatbot option */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-theme to-[#FF9000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-3">Chatbot Support</h3>
              <p className="text-secondary-text text-sm">Get instant answers 24/7 with our AI-powered chatbot</p>
            </div>
          </div>

          {/* FAQ option */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-theme to-[#FF9000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-3">Browse FAQs</h3>
              <p className="text-secondary-text text-sm">Find answers to common questions and tutorials</p>
            </div>
          </div>

          {/* Human support option */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-theme to-[#FF9000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-3">Human Support</h3>
              <p className="text-secondary-text text-sm">Get personalized help from our support team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
