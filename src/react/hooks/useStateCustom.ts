// useStateCustom - Enhanced version of React's useState.

import React from 'react'
import { getLocalStorageState } from '../../javascript/misc/getLocalStorageState'
import { useSaveToLocalStorage } from './useSaveToLocalStorage'

interface Props {
  initialState: any
  localStorageKey?: string
}

export const useCustomState = ({
  initialState,
  localStorageKey: key,
}: Props) => {
  // If local storage key is specified, get local state, otherwise use specified initial state.
  const [state, setState] = React.useState(
    getLocalStorageState({ key }) || initialState
  )

  useSaveToLocalStorage({ state, key })

  return [state, setState]
}
