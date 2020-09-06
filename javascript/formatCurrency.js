import currencySymbolMap from './currencySymbolMap'

export const formatCurrency = (currency, value) => {
  const symbol = currencySymbolMap[currency];
  return (
    (symbol ? symbol : currency) +
    Number(value.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}
