// Create a unique ID.

function* infiniteIntegers() {
  let i = 0;
  while (true) {
    i++;
    yield 'uniqueID' + i
  }
}

const generator = infiniteIntegers();
module.exports = () => generator.next().value;


