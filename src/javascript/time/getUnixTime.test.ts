import { getUnixTime } from './getUnixTime'

const mockDate = new Date(2010, 0, 0)

test('Returns correct UnixTime without offset', () => {
  expect(getUnixTime({ dateObject: mockDate })).toBe(1262217600)
})

test('Adding offset returns correct value.', () => {
  expect(
    getUnixTime({
      dateObject: mockDate,
      offset: { days: +10, months: +2, years: -1 },
    })
  ).toBe(1236643200)
})
