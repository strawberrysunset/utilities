const currencySymbolMap = require('./currencySymbolMap')

module.exports = (currency, value) => {

  if (!value) throw new Error('No value specified.')
  if (!currency) throw new Error('No currency specified.')

  let negative = false;
  if (value < 0) {
    negative = true;
    value *= -1; // Make it positive
  }

  const currencyUppercase = currency.toUpperCase()
  const symbol = currencySymbolMap[currencyUppercase]
  return (
    (negative ? '-' : '') +
    (symbol ? symbol : currencyUppercase) +
    Number(value.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}


