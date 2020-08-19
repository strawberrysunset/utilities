export const enhancedFetch =  async (url, params = []) => {
    if (!url) return new Error('No url specified.')
    const response = await fetch(url)
    const json = await response.json()
    // const data = params.reduce((accumulator, field, idx) => {
    //     if (idx === 0) return json[field]
    //     return accumulator[field]
    // }, json)
    return json
}
