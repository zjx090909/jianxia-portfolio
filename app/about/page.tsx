'use client'

import React from 'react'

const milestones = [
  { date: 'May 2022', event: 'Started studying at Algonquin College' },
  { date: 'Sep 2023 - Dec 2024', event: 'Software Developer at CRA' },
  { date: 'Aug 2024', event: 'Graduated with Honours from Algonquin College (Advanced Diploma in Computer Science)' },
  { date: 'May 2025 - Sep 2025', event: 'Cloud Engineer at PSPC' },
  { date: 'Jul 2025', event: 'Terraform Associate Certificate' },
  { date: 'Sep 2025', event: 'Azure Fundementals Certificate' },
  { date: 'Oct 2025', event: 'To be continued' },
]

export default function About() {
  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 bg-[length:400%_400%]"></div>
      {/* summary */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-600">About Me</h1>
        <p className="text-lg text-gray-800">
          Cloud Engineer / Software Developer  with 3+ years of experience in Azure cloud administration, Infrastructure as Code, and software development. Skilled in Java, React, Angular, REST APIs, automating infrastructure, building secure scalable systems, and collaborating across teams to deliver production-ready cloud solutions. Certified in Azure Fundamentals and Terraform Associate.    
        </p>
      </div>

      {/* milestone */}
      <div className="max-w-4xl mx-auto relative">
        {/* middle line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        <ul className="space-y-12 relative">
          {milestones.map((m, idx) => {
            const isOdd = idx % 2 === 0
            return (
              <li key={idx} className="flex w-full items-center relative">
                {/* Node circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full w-2 h-2 z-10" />

                {isOdd ? (
                  <>
                    {/* left time */}
                    <div className="w-1/2 pr-8 text-right text-blue-400 font-medium">
                      {m.date}
                    </div>
                    {/* right content*/}
                    <div className="w-1/2 pl-8 relative">
                      <div className="bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 shadow-md text-gray-400">
                        {m.event}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* left content */}
                    <div className="w-1/2 pr-8 relative">
                      <div className="bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 shadow-md text-gray-400">
                        {m.event}
                      </div>
                    </div>
                    {/* right time */}
                    <div className="w-1/2 pl-8 text-left text-blue-400 font-medium">
                      {m.date}
                    </div>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}





