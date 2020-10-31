module.exports = function capitalize(string) {
    if (typeof string !== 'string') throw new Error('Expected input of type string.')
    return string[0].toUpperCase() + string.slice(1)
}
