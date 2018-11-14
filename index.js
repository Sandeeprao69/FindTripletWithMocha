/**
 *
 * @param {Array} arr
 * @param {number} n
 */
const algo = require('./quickSort');

var rl = require('readline');
var prompts = rl.createInterface(process.stdin, process.stdout);
prompts.question('Please enter array data', function(arr) {
  if (arr) {
    arr = JSON.parse(arr);
    findTriplet(arr);
  }
  process.exit();
});

function findTriplet(arr) {
  if (!arr) {
    return 'undefined array';
  }
  let n = arr.length;
  if (n === 0) {
    return 'Empty array';
  }

  arr = algo.quickSort(arr);

  let result = [];
  //TO check if triplet exists
  for (var i = n - 1; i >= 0; i--) {
    var left = 0;
    var right = n - 1;
    while (left < right) {
      if (arr[i] == arr[left] + arr[right]) {
        // pair found
        result.push({ total: arr[i], left: arr[right], right: arr[left] });
        break;
      } else if (arr[i] > arr[left] + arr[right]) left += 1;
      else right -= 1;
    }
  }

  if (result.length === 0) {
    return 'No such triplet exists';
  }
  console.log(result);
  return result;
}

//var arr = [4, 6, 3, 10, 9, 16,12,15,21,23,44,55];
//let result = findTriplet(arr, arr.length);
//console.log(result);
module.exports = {
  findTriplet: findTriplet
};
