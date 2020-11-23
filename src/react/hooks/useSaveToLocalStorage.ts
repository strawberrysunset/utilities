import React from 'react'

interface Props {
  state: any
  key: string
}

export const useSaveToLocalStorage = ({ state, key }: Props) => {
  React.useEffect(() => {
    if (key) localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
}
