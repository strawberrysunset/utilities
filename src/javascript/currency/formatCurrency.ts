import { currencySymbols } from '../../data'

export const formatCurrency = (currency: string, value: number): string => {
  const currencyUppercase: string = currency.toUpperCase()
  const symbol = currencySymbols[currencyUppercase]

  return (
    (symbol || currencyUppercase) +
    Number(value.toFixed(2)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}
