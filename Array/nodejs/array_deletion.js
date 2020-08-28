/*
3. Delete Operation on Array 
*/

let number_array = [4, 5, 2, 7, 9, 13];
let string_array = ["start", "to", "study", "from", "basics"];


// Lets delete the item in the 3rd position of the original array   [4, 5, 2, 7, 9, 13];

console.log("=========== Initial Array =========")
for (let i = 0; i < number_array.length; i++) {
  const array_element = number_array[i];
  console.log(" Array [", i, "] ", array_element);
} 
console.log("========== Initial Array  ===========")

let m = 4; // delete the item at the 5th position
let n = number_array.length;// assign the array length

let j = m// define a variable in the size index to remove

while( j < n) {  
    number_array[j-1] =  number_array[j]; 
    j = j + 1;
}

n = n - 1; // length will reduce due to the deletion

console.log("========= Updated Array ============")
for (let i = 0; i < n; i++) {
    const array_element = number_array[i];
    console.log(" Array  [", i, "] ", array_element);
}
console.log("========== Updated Array ===========");

