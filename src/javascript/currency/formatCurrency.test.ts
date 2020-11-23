import { formatCurrency } from './formatCurrency'

test('Precision is to 2 decimal places.', () => {
  expect(formatCurrency('usd', 1000)).toBe('$1,000.00')
})

test('No value throws error.', () => {
  expect(() => formatCurrency(undefined, 1000)).toThrow()
  expect(() => formatCurrency('usd', undefined)).toThrow()
})

test('Negative sign comes before currency symbol.', () => {
  expect(formatCurrency('usd', -20)).toBe('-$20.00')
})
