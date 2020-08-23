// Logging and immer wrapper around zustand stores.

import createk from 'zustand'
import produce, {enableMapSet} from 'immer'

enableMapSet(); // Required for using js maps with immer.

// Log every time state is changed
const log = config => (set, get, api) => config(args => {
    console.log("  applying", args)
    set(args)
    console.log("  new state", get())
  }, get, api)
  
// Turn the set method into an immer proxy
const immer = config => (set, get, api) => config(fn => set(produce(fn)), get, api)

export const createStore = (children) => create(log(immer(children)))

