const generateUniqueID = require('./generateUniqueID')

test('IDs are incremented upon subsequent calls.', () => {
  expect(generateUniqueID()).toBe('uniqueID1')
  expect(generateUniqueID()).toBe('uniqueID2')
})
