// Create a unique ID.

function* infiniteIntegers() {
  let i = 0;
  while (true) {
    i++;
    yield 'uniqueID_' + parseFloat(Math.floor(Math.random() * 1E12))
  }
}

const generator = infiniteIntegers();
module.exports = () => generator.next().value;


