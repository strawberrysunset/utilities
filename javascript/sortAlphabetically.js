const sortAlphabetically = (array) => {
  let sorted = []

  for (let i = 0; i <= array.length; i++){

    // go through array from start to finish, keep going until letter is less
    const val = array[i]
    add(val);

    function add (val) {
          // If array is empty simply add.
        if (sorted.length === 0 ){
          return sorted.push(val)
        }
        // Compare val to each sorted value.
        for (let j = 0; j <= sorted.length; j++) {
          // Compare each letter in the word.
          sortedVal = sorted[j]
        
          for (let k = 0; (k <= sortedVal.length || k <= val.length); k++) {
            if (val[k] < sortedVal[k]) {
              sorted.push(val)
            }
            if (val[k] > sortedVal[k]) {
              sorted.unshift(val)
            }
            // They are identical, push anyway.
            if (k === val.length){
              sorted.push(val)
            }
          }

        }
      }
    }
  return sorted
}
