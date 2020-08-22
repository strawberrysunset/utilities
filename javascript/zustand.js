// Logging and immer wrapper around zustand stores.

import createStoreHook from 'zustand'
import createStore from 'zustand/vanilla'
import produce from 'immer'

// Log every time state is changed
const log = config => (set, get, api) => config(args => {
    console.log("  applying", args)
    set(args)
    console.log("  new state", get())
  }, get, api)
  
// Turn the set method into an immer proxy
const immer = config => (set, get, api) => config(fn => set(produce(fn)), get, api)

export const createStore = (children) => createStore(log(immer(children)))
export const createStoreHook
