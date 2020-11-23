// useReducerCustom - Enhanced version of React's useReducer.
// - Optional middleware.
// - Optional persistence of state to local storage.

import React from 'react'
import { getLocalStorageState } from '../../javascript/misc'
import { useSaveToLocalStorage } from './useSaveToLocalStorage'

interface MiddlewareProps {
  state: React.ReducerState<any>
  dispatch: React.Dispatch<unknown>
  action: React.ReducerAction<any>
}

type Middleware = {
  ({ state, dispatch, action }: MiddlewareProps): Promise<
    React.ReducerState<any>
  >
}

interface Props {
  reducer: React.Reducer<unknown, unknown>
  initialState: unknown
  middleware?: Middleware[]
  localStorageKey?: string
}

interface DispatchProps {
  type: string
  action: unknown
}

type Dispatch = ({ type, action }: DispatchProps) => void
type State = any
type ReturnProps = [State, Dispatch]

export const useReducerCustom = ({
  reducer,
  initialState,
  localStorageKey: key,
  middleware,
}: Props): ReturnProps => {
  const [state, dispatch] = React.useReducer(
    reducer,
    getLocalStorageState({ key }) || initialState
  )

  // If localStorageKey is enabled, save the state.
  useSaveToLocalStorage({ state, key })

  // Call each middleware function. Each middleware function could be asynchronous so assume all are and await each.
  const interceptedDispatch = React.useCallback(
    async ({ action }) => {
      const middlewarePromises = middleware.map(async (fn) => {
        await fn({ state, dispatch, action })
      })
      await Promise.all(middlewarePromises)
    },
    [middleware, state, dispatch]
  )

  return [state, interceptedDispatch]
}
