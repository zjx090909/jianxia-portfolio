'use client'

import React from 'react'

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* PDF Viewer */}
      <div className="flex-1 w-full max-w-5xl">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="w-full h-[80vh] md:h-[90vh] border-none"
        />
      </div>
    </div>
  )
}
