export const jsonFetch =  async (url) => {
    if (!url) return new Error('No url specified.')
    const response = await fetch(url)
    const json = await response.json()
    return json
}
