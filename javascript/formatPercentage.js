module.exports = (value) => {
  return ((value >= 0) ? '+' : '') + value.toFixed(2) + '%'
}
