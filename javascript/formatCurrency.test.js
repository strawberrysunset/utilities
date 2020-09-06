import {formatCurrency} from './formatCurrency'

test('Precision is to 2 decimal places.', () => {
  expect(formatCurrency(1000, 'usd')).toBe('$1000.00');
});

test('No value throws error.', () => {
  expect(formatCurrency(undefined, 'usd')).toThrow();
});



test('Negative sign comes before currency symbol.', () => {
  expect(formatCurrency(-50, 'usd')).toBe('-$50.00');
});
