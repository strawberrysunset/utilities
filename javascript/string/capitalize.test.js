const capitalize = require('./capitalize')

test('Capitalizes word', () => {
    expect(capitalize('hello')).toBe('Hello')
})
