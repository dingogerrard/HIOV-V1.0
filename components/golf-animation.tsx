"use client"

import { useEffect, useState } from "react"

export function GolfAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <svg width="400" height="120" viewBox="0 0 400 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Golf Course Ground */}
        <defs>
          <linearGradient id="grassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <radialGradient id="holeGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
        </defs>

        {/* Grass surface */}
        <rect x="0" y="80" width="400" height="40" fill="url(#grassGradient)" />

        {/* Golf hole */}
        <ellipse cx="350" cy="85" rx="18" ry="8" fill="url(#holeGradient)" />
        <ellipse cx="350" cy="83" rx="15" ry="6" fill="#000000" />

        {/* Flag pole */}
        <line x1="350" y1="83" x2="350" y2="45" stroke="#8b5cf6" strokeWidth="2" />

        {/* Flag */}
        <polygon points="350,45 350,60 375,52.5" fill="#ef4444" className={isAnimating ? "animate-pulse" : ""} />

        {/* Golf ball */}
        <g className={isAnimating ? "animate-golf-roll" : ""}>
          <circle cx="50" cy="78" r="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
          {/* Ball dimples */}
          <circle cx="48" cy="76" r="0.5" fill="#d1d5db" />
          <circle cx="52" cy="76" r="0.5" fill="#d1d5db" />
          <circle cx="50" cy="80" r="0.5" fill="#d1d5db" />
          <circle cx="49" cy="78" r="0.5" fill="#d1d5db" />
          <circle cx="51" cy="78" r="0.5" fill="#d1d5db" />
        </g>

        {/* Ball trail effect */}
        <g className={isAnimating ? "animate-trail" : ""} opacity="0">
          <circle cx="80" cy="78" r="3" fill="#ffffff" opacity="0.3" />
          <circle cx="120" cy="78" r="2.5" fill="#ffffff" opacity="0.2" />
          <circle cx="160" cy="78" r="2" fill="#ffffff" opacity="0.1" />
        </g>

        {/* Success ripple effect */}
        <g className={isAnimating ? "animate-ripple" : ""} opacity="0">
          <circle cx="350" cy="83" r="20" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.6" />
          <circle cx="350" cy="83" r="30" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
        </g>
      </svg>
    </div>
  )
}
