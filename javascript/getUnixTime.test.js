const getUnixTime = require('./getUnixTime')

const mockDate = new Date(2010, 0, 0)

test('Returns correct UnixTime without offset', () => {
  expect(getUnixTime(mockDate)).toBe(1262217600)
})

test('Adding offset returns correct value.', () => {
  expect(getUnixTime(mockDate, {days: +10, months: +2, years: -1})).toBe(1236643200)
})

test('Throws if no object date is passed.', () => {
  expect(() => getUnixTime()).toThrow()
})
