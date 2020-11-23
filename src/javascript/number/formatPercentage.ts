interface Props {
  number: number
  includePositiveSign?: boolean
  precision?: number
}

export const formatPercentage = ({
  number,
  includePositiveSign = false,
  precision = 2,
}: Props) => {
  const percentage = number.toFixed(precision) + '%'
  return includePositiveSign && number >= 0 ? '+' + percentage : percentage
}
