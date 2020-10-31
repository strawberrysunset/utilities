const formatPercentage = require('./formatPercentage')

test('Value is to 2 decimal places.', () => {
  expect(formatPercentage(0.5)).toBe('0.50%')
  
})
test('No input throws', () => {
  expect(() => formatPercentage()).toThrow()
})