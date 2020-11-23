import React from 'react'

export const useScrollPosition = () => {
  const [y, setY] = React.useState(window.pageYOffset)
  React.useEffect(() => {
    setY(window.pageYOffset)
  }, [window.pageYOffset])
  return { y }
}
