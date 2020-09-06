import currencySymbolMap from './currencySymbolMap'

export const formatCurrency = (currency, value) => {
  const currencyUppercase = currency.toUpperCase()
  const symbol = currencySymbolMap[currencyUppercase]
  return (
    (symbol ? symbol : currencyUppercase) +
    Number(value.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}
