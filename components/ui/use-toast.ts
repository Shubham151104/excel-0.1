// Simplified version for this example
import { useState } from "react"

export function useToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [toastData, setToastData] = useState({ title: "", description: "" })

  const toast = ({ title, description }: { title: string; description: string }) => {
    setToastData({ title, description })
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 3000)
  }

  return { toast, isVisible, toastData }
}

