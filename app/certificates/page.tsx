'use client'

import React from 'react'
import Image from 'next/image'

const certificates = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Sep 2025',
    type: 'certificate',
    image: '/certificates/az900.png',
    link: 'https://learn.microsoft.com/en-ca/users/jessica-1558/credentials/894a1fbd600e2d86', 
  },
  {
    title: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    date: 'Jul 2025',
    type: 'badge',
    image: '/certificates/terraform-badge.png',
    link: 'https://www.credly.com/badges/157307e5-3617-45ca-9c9e-ef2ca57c6f0e',
  },
]

export default function Certificates() {
  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 bg-[length:400%_400%]"></div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-600 mb-10 text-center">Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1"
            >
              {/* image zone */}
              <div className="relative flex items-center justify-center bg-gray-50 h-56">
  				<Image
    				src={cert.image}
   					alt={cert.title}
    				width={160}
    				height={160}
    				className="object-contain rounded-full drop-shadow-md"
  				/>
			</div>

              {/* text zone */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{cert.title}</h2>
                <p className="text-gray-500 text-sm mb-1">Issued by: {cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">Date: {cert.date}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    View {cert.type === 'badge' ? 'Badge' : 'Certificate'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
