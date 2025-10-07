'use client'

import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 animate-gradient text-center">
      
      {/* topic */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-10">
        Let's Connect
      </h1>

      {/* content */}
      <div className="max-w-3xl space-y-6">
        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
          Hi there! I love coding 💻, and in my free time I enjoy painting 🎨, playing badminton 🏸, cooking 🍳, and even doing nail art 💅.
        </p>

        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
          If any of these spark your interest or you just want to chat about tech, art, or life in general, I’d love to hear from you!
        </p>

        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
          Feel free to reach out and say hello. 😊
        </p>
      </div>

      {/* email */}
      <a
        href="mailto:jess09zhan@gmail.com"
        className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-purple-300 text-white font-semibold rounded-xl hover:bg-blue-800 transition shadow-lg"
      >
        {/* SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8z"
          />
        </svg>
        Send me an Email
      </a>

    </div>
  )
}
