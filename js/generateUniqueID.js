function* infiniteIntegers() {
  let i = 0;
  while (true) {
    i++;
    yield 'uniqueID' + i
  }
}

const generator = infiniteIntegers();
export const generateUniqueID = () => generator.next().value;


