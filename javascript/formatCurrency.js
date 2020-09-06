export const formatCurrency = (symbol, value) => {
  return (
    symbol +
    Number(value.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}
