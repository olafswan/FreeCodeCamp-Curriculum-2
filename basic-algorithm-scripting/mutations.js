//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/


function mutation(arr) {
  // décomposé les strings arr[0] et arr[1] en array avec les lettes
  // let arrOne = arr[0].toLowerCase().match(/\w/gi);
  let arrTwo = arr[1].toLowerCase().match(/\w/gi);
  arr[0] = arr[0].toLowerCase();
  let result;
  // console.log(arrOne);
  // console.log(arrTwo);

  // verifier avec indexOf que tous les element dans arr[1] existe dans arr[0]
  for (let i = 0; i < arrTwo.length; i++) {
    result = arr[0].indexOf(arrTwo[i]);
    if (result == -1) {
      result = false;
      break;
    }
    //console.log("character " + (i + 1) + " is at index number :" + result);
  }

  if (result == false) {
    result = false;
  } else {
    result = true;
  }
  console.log(
    "*** each character in " +
      arr[0] +
      " are present in " +
      arr[1] +
      ": " +
      result
  );
  console.log(typeof result);
  return result;
  //return arr[0].toLowerCase() == arr[1].toLowerCase() ? "True" : "False";
  //return arr;
}

// TEST $$$$$$$$$$$$$$$$$

console.log(mutation(["hello", "hey"]));
console.log("========>   should return false");
console.log(mutation(["hello", "Hello"]));
console.log("========>   should return true.");
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log("========>   should return true.");
console.log(mutation(["Mary", "Army"]));
console.log("========>   should return true.");
console.log(mutation(["Mary", "Aarmy"]));
console.log("========>   should return true.");
console.log(mutation(["Alien", "line"]));
console.log("========>   should return true.");
console.log(mutation(["floor", "for"]));
console.log("========>   should return true.");
console.log(mutation(["hello", "neo"]));
console.log("========>   should return false");
console.log(mutation(["voodoo", "no"]));
console.log("========>   should return false");
console.log(mutation(["ate", "date"]));
console.log("========>   should return false");
console.log(mutation(["Tiger", "Zebra"]));
console.log("========>   should return false");
console.log(mutation(["Noel", "Ole"]));
console.log("========>   should return true.");
