import React from 'react'

interface Props {
  context?: React.Context<unknown>
  hook(state?: unknown): unknown
  name: string
}

// Create a context consumer and provider for a hook.
export const createContextAndProvider = ({
  context: Context = React.createContext<unknown>(null),
  hook,
  name,
}: Props) => {
  Context.displayName = name

  const ContextProvider = ({ children }: { children: any }) => {
    const state = hook() // Initialize the hook in the provider.
    return <Context.Provider value={state}>{children}</Context.Provider>
  }

  // Create a custom useContext hook.
  const useContext = () => {
    const context = React.useContext(Context)
    if (context === undefined) {
      throw new Error(`use${name} must be used within a ${name}Provider.`)
    }
    return context
  }

  return [useContext, ContextProvider]
}
