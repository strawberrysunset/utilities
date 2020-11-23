// useDimensions - Get the dimensions of a React element.

import React from 'react'

export const useDimensions = ({
  ref,
}: {
  ref: React.MutableRefObject<HTMLElement>
}) => {
  const [dimensions, setDimensions] = React.useState({
    width: ref.current.offsetWidth,
    height: ref.current.offsetHeight,
  })
  const [isResizing, setIsResizing] = React.useState(true)

  const handleResize = React.useCallback(() => {
    setIsResizing(true)
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }
    setIsResizing(false)
  }, [])

  // Set dimensions initially.
  React.useEffect(handleResize, [])

  // Handle handleResize function change.
  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return { dimensions, isResizing }
}
