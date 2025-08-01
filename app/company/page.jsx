// import React from 'react'
// import CompanyHeroSection from './components/companyHeroSection'
// import Guided from './components/Guided'
// import CtaSection from '../components/common/CtaSection'
// import TeamSection from './components/TeamSection'

// const page = () => {
//   return (
//     <div className='pt-10'>
//         <CompanyHeroSection/>
//         <Guided/>
//         <TeamSection/>
//         <CtaSection/>
//     </div>
//   )
// }

// export default page



import {

    FaArrowTrendUp,
  } from 'react-icons/fa6'
  import {   FaUserCircle,
    FaChartBar,
    FaRegListAlt,
    FaBullseye,FaRegCheckCircle } from 'react-icons/fa';
  
  export default function Report() {
    return (
      <div className=" mx-auto max-w-7xl bg-white rounded-2xl shadow-xl m-40 p-8 font-sans space-y-10">
        {/* EXECUTIVE SUMMARY */}
        <section className="mb-6">
          <div className="flex items-center justify-between border-b pb-5 mb-4">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-blue-500 text-4xl"/>
              <h1 className="text-3xl font-bold text-blue-900 tracking-tight">
                Executive Summary
              </h1>
            </div>
            <div className="text-slate-400 text-right">
              <span className="block text-md font-semibold">Q3 2025</span>
              <span className="block text-xs">Prepared by HR Analytics Team</span>
            </div>
          </div>
          <div className="text-gray-700 max-w-2xl">
            In Q3 2025, overall employee engagement improved by <span className="font-semibold text-green-700">7%</span>. Major drivers included new communication initiatives, improved recognition, and streamlined workflows. Challenges remain around inter-departmental transparency and development opportunities.
          </div>
          <div className="flex gap-2 mt-4">
            <div className="bg-blue-50 px-4 py-2 rounded-lg text-sm text-blue-900 flex items-center gap-2 border border-blue-100">
              <FaArrowTrendUp/><span>Engagement +7%</span>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg text-sm text-blue-900 flex items-center gap-2 border border-blue-100">
              <FaBullseye/><span>Goal:80% satisfaction</span>
            </div>
          </div>
        </section>
  
        {/* EMPLOYEE INSIGHTS */}
        <section>
          <div className="flex items-center bg-teal-700 px-5 py-2 rounded-t-lg">
            <FaChartBar className="text-white text-2xl mr-2"/>
            <h2 className="text-white text-xl font-bold tracking-wide">Employee Insights</h2>
          </div>
          <div className="bg-teal-50 rounded-b-lg px-5 py-6">
            <div className="mb-2 text-gray-800 font-medium">
              Key Themes This Quarter:
            </div>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base mb-5">
              <li>
                <span className="font-semibold text-teal-800">• 87%</span> feel connected to the company mission
              </li>
              <li>
                <span className="font-semibold text-teal-800">• 65%</span> cite “better career growth” as top priority
              </li>
              <li>
                <span className="font-semibold text-teal-800">• 75%</span> report leadership communication is clear
              </li>
              <li>
                <span className="font-semibold text-teal-800">• 54%</span> want more flexible work options
              </li>
            </ul>
            <div className="grid grid-cols-3 gap-6 items-end mt-6">
              {/* Simple Bars */}
              <div className="text-sm">
                <div className="flex items-end h-16">
                  <div className="bg-teal-400 h-10 w-72 rounded"></div>
                </div>
                <div className="mt-1 text-teal-900 font-bold">Communication</div>
                <div className="text-xs">75%</div>
              </div>
              <div className="text-sm">
                <div className="flex items-end h-16">
                  <div className="bg-teal-600 h-10 w-60 rounded"></div>
                </div>
                <div className="mt-1 text-teal-900 font-bold">Growth</div>
                <div className="text-xs">65%</div>
              </div>
              <div className="text-sm">
                <div className="flex items-end h-16">
                  <div className="bg-teal-800 h-10 w-86 rounded"></div>
                </div>
                <div className="mt-1 text-teal-900 font-bold">Mission Fit</div>
                <div className="text-xs">87%</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* RECOMMENDATIONS */}
        <section>
          <div className="flex items-center bg-orange-500 px-5 py-2 rounded-t-lg">
            <FaRegListAlt className="text-white text-2xl mr-2"/>
            <h2 className="text-white text-xl font-bold tracking-wide">Recommendations</h2>
          </div>
          <div className="bg-orange-50 rounded-b-lg px-5 py-6 grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-orange-400"/>
                Enhance cross-departmental project visibility
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-orange-400"/>
                Launch career growth mentorship program
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-orange-400"/>
                Host quarterly “Ask Me Anything” with leadership
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="text-orange-400"/>
                Develop flexible work policy updates
              </li>
            </ul>
            <div>
              <div className="bg-orange-100 border-l-4 border-orange-400 rounded p-4 text-sm text-orange-900 shadow">
                <div className="font-bold text-orange-700 mb-2">Summary Benefit</div>
                Expected to increase engagement by 8% and satisfaction by 12% in the next two quarters with these initiatives.
              </div>
            </div>
          </div>
        </section>
  
        {/* ENGAGEMENT METRICS */}
        <section>
          <div className="flex items-center bg-green-700 px-5 py-2 rounded-t-lg">
            <FaBullseye className="text-white text-2xl mr-2"/>
            <h2 className="text-white text-xl font-bold tracking-wide">Engagement Metrics</h2>
          </div>
          <div className="bg-green-50 rounded-b-lg px-5 py-6 grid md:grid-cols-3 gap-6 items-center">
            {/* Key Metrics */}
            <div>
              <div className="text-gray-800 font-semibold mb-2">Q3 at a Glance:</div>
              <ul className="text-gray-700 space-y-2 text-base">
                <li>Participation Rate: <span className="font-bold text-green-800">83%</span></li>
                <li>Satisfaction: <span className="font-bold text-green-800">4.4/5</span></li>
                <li>Monthly Voluntary Attrition: <span className="font-bold text-green-800">1.2%</span></li>
                <li>Avg. Survey Completion Time: <span className="font-bold text-green-800">3.1min</span></li>
              </ul>
            </div>
            {/* Mini Chart */}
            <div className="flex flex-col items-center">
              <svg width="90" height="90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="#e5eedb" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="4"
                  strokeDasharray="54 50"
                  strokeDashoffset="0"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="4"
                  strokeDasharray="25 75"
                  strokeDashoffset="54"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="4"
                  strokeDasharray="11 89"
                  strokeDashoffset="79"
                />
              </svg>
              <div className="text-xs text-gray-400 mt-2 text-center">Engaged&nbsp;|&nbsp;Neutral&nbsp;|&nbsp;Disengaged</div>
            </div>
            {/* Commentary */}
            <div>
              <div className="bg-green-100 border-l-4 border-green-500 rounded p-4 text-sm text-green-900 shadow">
                <div className="font-bold text-green-700 mb-1">Interpretation</div>
                Employee engagement remains strong; early indicators show recent initiatives are resonating, but continued focus on growth is key.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  