'use client'

import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function HomePage() {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-100 via-purple-300 to-green-200 bg-[length:400%_400%]"></div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: { value: 25, density: { enable: true, area: 800 } },
            color: { value: ["#ff9ff3", "#feca57", "#48dbfb", "#1dd1a1"] },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: { enable: true, minimumValue: 0.1 } },
            size: { value: 120, random: { enable: true, minimumValue: 20 } },
            move: { enable: true, speed: 0.5, direction: "none", random: true, outModes: "bounce" },
            blur: { enable: true, value: 80 }, 
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">Welcome to Jessica’s Portfolio</h1>
        <p className="text-2xl text-pink-400">
          Cloud Engineer • Developer • Dream Builder
        </p>
      </div>
    </div>
  )
}
