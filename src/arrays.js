/**
 * Checks if two arrays have the same first value
 * @param  {Array} a
 * @param  {Array} b
 * @return {Boolean}
 */
function sameFirst(a, b) {
  if (a[0] ===  b[0]) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks if two arrays have the same values
 * @param  {Array} a
 * @param  {Array} b
 * @return {Boolean}
 */
function deepEquals(a, b) {
  for (i = 0; i < a.length; i++) {
    if (a.length != b.length) {
      return false;
    }
    if (a[i] === b[i]) {
    }
    else {
      return false;
    }
  }
  return true;
}

function arraySum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}
