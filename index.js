/**
 *
 * @param {Array} arr
 * @param {number} n
 */
function findTriplet(arr) {
  let n = arr.length;
  if (n === 0) {
    return 'Empty array';
  }
  // sort the array
  arr = arr.sort((a, b) => {
    return a - b;
  });

  let result = [];
  //TO check if triplet exists
  for (var i = n - 1; i >= 0; i--) {
    var left = 0;
    var right = n - 1;
    while (left < right) {
      if (arr[i] == arr[left] + arr[right]) {
        // pair found
        //console.log('numbers are ' + arr[i] + ' ' + arr[right] + ' ' + arr[left]);
        result.push({total:arr[i],left:arr[right],right:arr[left]});
        //i--;
        break;
      } else if (arr[i] > arr[left] + arr[right]) left += 1;
      else right -= 1;
    }
  }

  if (result.length === 0) {
    return 'No such triplet exists';
  }

  return result;

}

var arr = [4, 6, 3, 10, 9, 16];
let result = findTriplet(arr, arr.length);
//console.log(result);
module.exports = {
  findTriplet: findTriplet
};
