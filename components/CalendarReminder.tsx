
"use client"

import { motion } from "framer-motion"

export default function CalendarReminder() {
  const generateICSFile = () => {
    const startDate = new Date("2025-07-31T00:00:00")
    const endDate = new Date("2025-07-31T23:59:59")
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Birthday Countdown//Birthday Reminder//EN
BEGIN:VEVENT
UID:birthday-reminder-${Date.now()}@birthdayCountdown.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:🎉 Aarushi's Birthday! 🎂
DESCRIPTION:It's Aarushi's special day! Time to celebrate this amazing person! 🎉✨
LOCATION:Celebration Time! 🎈
BEGIN:VALARM
TRIGGER:-PT1H
ACTION:DISPLAY
DESCRIPTION:Aarushi's birthday is in 1 hour! 🎂
END:VALARM
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Aarushi's birthday is tomorrow! Get ready to celebrate! 🎉
END:VALARM
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "aarushi-birthday-reminder.ics"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            📅 Don't Forget!
          </h3>
          <p className="text-rose-200 mb-6">
            Add this special day to your calendar so you never miss celebrating Aarushi! 🎉
          </p>
          
          <motion.button
            onClick={generateICSFile}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📅 Add to Calendar
          </motion.button>
          
          <p className="text-rose-300 text-sm mt-4">
            This will download a calendar file that works with most calendar apps!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
