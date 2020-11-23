export const getLocalStorageState = ({ key }: { key: string }): any => {
  const localState = localStorage.getItem(key)
  if (!localState) return undefined
  try {
    return JSON.parse(localState)
  } catch {
    return undefined
  }
}
