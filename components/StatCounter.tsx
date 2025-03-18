"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface StatCounterProps {
  end: number
  label: string
}

const StatCounter: React.FC<StatCounterProps> = ({ end, label }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = end / steps
      const interval = duration / steps

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [end, inView])

  return (
    <div ref={ref}>
      <div className="text-4xl font-bold mb-2">{count}+</div>
      <div className="text-lg">{label}</div>
    </div>
  )
}

export default StatCounter

