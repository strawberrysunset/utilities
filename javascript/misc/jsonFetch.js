module.exports = async (url, ...rest) => {
    if (!url) throw new Error('No url specified.')
    const response = await fetch(url, ...rest)
    const json = await response.json()
    return json
}
