module.exports = (value) => {
  return ((children >= 0) && '+') + value.toFixed(2) + '%'
}
