export const jsonFetch = async (url: string): Promise<JSON> => {
  const response = await fetch(url)
  const json = await response.json()
  return json
}
