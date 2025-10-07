'use client'

import React from 'react'

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* PDF Viewer */}
      <div className="flex-1">
        <iframe
          src="/resume.pdf"
          className="w-full h-screen"
          title="Resume PDF"
        />
      </div>
    </div>
  )
}
