import { formatPercentage } from './formatPercentage'

it('returns a string with 2 decimal places and includes positive sign.', () => {
  expect(formatPercentage({ number: 0.5 })).toBe('+0.50%')
})

it('includes positive sign.', () => {
  expect(formatPercentage({ number: 0.5, includePositiveSign: true })).toBe(
    '+0.50%'
  )
})

it('returns number with specified precision.', () => {
  expect(formatPercentage({ number: 1, precision: 5 })).toBe('1.00000')
})
