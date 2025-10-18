'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TextAnimateProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  onComplete?: () => void
}

export function TextAnimate({
  text,
  className,
  delay = 0,
  speed = 50,
  onComplete
}: TextAnimateProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return
    
    let currentIndex = 0
    let timer: NodeJS.Timeout
    
    const startAnimation = () => {
      timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
          
          if (currentIndex > text.length) {
            clearInterval(timer)
            setIsComplete(true)
            onComplete?.()
          }
        } else {
          clearInterval(timer)
        }
      }, speed)
    }
    
    // Add initial delay before starting animation
    const delayTimer = setTimeout(() => {
      startAnimation()
    }, delay)
    
    return () => {
      clearTimeout(delayTimer)
      clearInterval(timer)
    }
  }, [text, delay, speed, onComplete])
  
  return (
    <span className={cn(className)}>
      {displayText}
      {!isComplete && (
        <span className="cursor-blink inline-block h-4 w-2 bg-current align-text-bottom ml-0.5" />
      )}
    </span>
  )
}