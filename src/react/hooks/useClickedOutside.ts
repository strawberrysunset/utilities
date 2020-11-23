import React from 'react'

interface Props {
  callback(): void
  ref: React.MutableRefObject<HTMLElement>
}

export const useClickedOutside = (props: Props): void => {
  const clickCallback = React.useCallback(
    (event) => {
      const clickedOutside = !props.ref.current?.contains(event.target)
      if (clickedOutside) props.callback()
    },
    [props.ref]
  )

  React.useEffect(() => {
    window.addEventListener('click', clickCallback)
    return () => window.removeEventListener('click', clickCallback)
  }, [props.ref])
}
