let input = null;

function quickSort(a = null) {
  if (a === null) return null;
  input = a;
  return sort();
}

const sort = (first, last) => {
  if (typeof first === 'undefined') first = 0;
  if (typeof last === 'undefined') last = input.length - 1;
  if (first < last) {
    let swap = null;
    let pivot = first;
    let lowIndex = first;
    let highIndex = last;
    while (lowIndex < highIndex) {
      while (input[lowIndex] <= input[pivot] && lowIndex < last) lowIndex += 1;
      while (input[highIndex] > input[pivot]) highIndex -= 1;
      if (lowIndex < highIndex) {
        swap = input[lowIndex];
        input[lowIndex] = input[highIndex];
        input[highIndex] = swap;
      }
    }
    swap = input[pivot];
    input[pivot] = input[highIndex];
    input[highIndex] = swap;
    sort(first, highIndex - 1);
    sort(highIndex + 1, last);
  }
  return input;
};

module.exports = {
  quickSort: quickSort
};
