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

      <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* 图片 */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src="/profile-portrait.png"
            alt="Jessica Zhang portrait"
            className="rounded-full shadow-lg border-4 border-white/60 w-64 h-64 object-cover"
          />
        </div>

        {/* 文字介绍 */}
        <div className="text-gray-800 space-y-4 max-w-prose">
          <p></p>
          <p>Jessica is a Cloud Engineer / Software Developer with 3+ years of experience in cloud administration, Infrastructure as Code, and software development. </p>
          <p>Skilled in Terraform, Java, JavaScript, TypeScript, React, Angular, C#, REST APIs, automating infrastructure, building secure scalable systems, and collaborating across teams to deliver production-ready cloud solutions. Certified in Azure Fundamentals, Terraform Associate and Microsoft Applied Skills.</p>
          <p>Outside of work, she loves playing badminton, painting arts and developing new food receipts to share with friends.</p>
        </div>
      </div>

      {/* milestone */}
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-8 text-gray-600 text-center">Experiences</h2>
        {/* middle line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-500"></div>
        <ul className="space-y-12 relative">
          {milestones.map((m, idx) => {
            const isOdd = idx % 2 === 0
            return (
              <li key={idx} className="flex w-full items-center relative">
                {/* Node circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-pink-400 rounded-full w-2 h-2 z-10" />

                {isOdd ? (
                  <>
                    {/* left time */}
                    <div className="w-1/2 pr-8 text-right text-pink-400 font-medium">
                      {m.date}
                    </div>
                    {/* right content*/}
                    <div className="w-1/2 pl-8 relative">
                      <div className="bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 shadow-md text-gray-500">
                        {m.event}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* left content */}
                    <div className="w-1/2 pr-8 relative">
                      <div className="bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 shadow-md text-gray-500">
                        {m.event}
                      </div>
                    </div>
                    {/* right time */}
                    <div className="w-1/2 pl-8 text-left text-pink-400 font-medium">
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





