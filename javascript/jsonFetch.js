module.exports = async (url) => {
    if (!url) throw new Error('No url specified.')
    const response = await fetch(url)
    const json = await response.json()
    return json
}
