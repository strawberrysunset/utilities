function* infiniteIntegers() {
  let i: number = 0
  while (true) {
    i++
    yield 'uniqueID_' + String(i)
  }
}

const generator = infiniteIntegers()
export const generateUniqueID = () => generator.next().value
