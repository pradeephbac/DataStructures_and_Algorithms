
/*
2. Insert Operation on Array 
*/
let number_array = [4, 5, 2, 7, 9, 13]; 

// Lets insert new number to 4th position in the above array

console.log("=========== Initial Array =========")
for (let i = 0; i < number_array.length; i++) {
  const array_element = number_array[i];
  console.log(" Array [", i, "] ", array_element);
} 
console.log("========== Initial Array  ===========")


let m = 4; // insertion for the 4th position 
let new_number = 25; //new number to insert to the initial array
let n = number_array.length;// assign the array length
let j = n// define a variable in the size of array length

n = n + 1; // array length will be increased by one index  

while (j >= m) { 
    number_array[j+1] = number_array[j]; //adjust array values with new positions and indexes
    j = j - 1; 
}
number_array[m] = new_number; // assign the new value to the new array possition

console.log("========= Updated Array ============")
for (let i = 0; i < n; i++) {
    const array_element = number_array[i];
    console.log(" Array [", i, "] ", array_element);
}
console.log("========== Updated Array ===========")
//Initial array before insertion:   [4, 5, 2, 7, 9, 13];
//result array after insertion:     [4, 5, 2, 7, 25, 9, 13];



