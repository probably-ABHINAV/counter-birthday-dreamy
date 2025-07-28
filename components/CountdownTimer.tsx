"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Birthday reached!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="text-white text-lg">Loading magical countdown...</div>
      </div>
    )
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  // Calculate total time remaining for detailed display
  const totalDays = timeLeft.days
  const totalHours = timeLeft.hours
  const totalMinutes = timeLeft.minutes

  return (
    <div className="text-center">
      {/* Detailed countdown text */}
      <div className="mb-6 text-rose-200 text-lg sm:text-xl">
        {totalDays > 0 && (
          <span>
            Only <span className="font-bold text-white">{totalDays} days</span>
            {totalHours > 0 && <span>, <span className="font-bold text-white">{totalHours} hours</span></span>}
            {totalMinutes > 0 && <span>, <span className="font-bold text-white">{totalMinutes} minutes</span></span>}
            <span> to go! ⏰</span>
          </span>
        )}
        {totalDays === 0 && totalHours > 0 && (
          <span>Less than a day left! Only <span className="font-bold text-white">{totalHours} hours</span> to go! 🎉</span>
        )}
        {totalDays === 0 && totalHours === 0 && (
          <span>It's almost time! Only <span className="font-bold text-white">{totalMinutes} minutes</span> left! ✨</span>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="text-center relative"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-w-[70px] sm:min-w-[90px] md:min-w-[120px] lg:min-w-[140px] shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 30px rgba(255, 182, 193, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            whileHover={{
              boxShadow: "0 0 40px rgba(255, 182, 193, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2 font-mono"
              key={`${unit.label}-${unit.value}`}
              initial={{ scale: 0.8, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.div>
            <div className="text-xs sm:text-sm md:text-base text-rose-200 uppercase tracking-wider font-medium">
              {unit.label}
            </div>
          </motion.div>

          {/* Floating Hearts around Timer */}
          <motion.div
            className="absolute -top-2 -right-2 text-rose-300 text-sm opacity-70 pointer-events-none"
            animate={{
              y: [-5, -15, -5],
              rotate: [0, 10, -10, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
            aria-hidden="true"
          >
            <span role="img" aria-label="heart">
              💕
            </span>
          </motion.div>
        </motion.div>
      ))}
      </div>
    </div>
  )
}
