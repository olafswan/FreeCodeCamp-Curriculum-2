//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let result = [];

  for (let i = 0, j = 0, k = 0; i < arr.length; i++) {
    // i => 1st level arr
    // j => 1st level result
    // k => 2nd level result
    if (k == 0) {
      result.push([arr[i]]);
      k++;
    } else if (k < size - 1) {
      result[j].push(arr[i]);
      k++;
    } else if (k == size - 1) {
      result[j].push(arr[i]);
      k = 0;
      j++;
    }
  }
  return result;
}

chunkArrayInGroups(["a0", "b0", "c0", "d0", "e0", "f0", "g0", "h0", "i0"], 2);
