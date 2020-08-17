export const sum = (array) => {
    return array.reduce((val, total) => {
        return total += val
    }, 0)
}
