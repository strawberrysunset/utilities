import { useState, useEffect } from 'react'

interface Dimensions {
  innerWidth: number
  innerHeight: number
}

export const useWindowDimensions = (): Dimensions => {
  const [WindowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return WindowDimensions
}

const getWindowDimensions = (): Dimensions => ({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
})
