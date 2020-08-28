/*
3. Update Array values
*/

let number_array = [4, 5, 2, 7, 9, 13]; 

let update_index = 4;
let update_value = 88;
let n = number_array.length; 
let arrya_index = 0;

console.log("=========== Initial Array =========")
for (let i = 0; i < number_array.length; i++) {
  const array_element = number_array[i];
  console.log(" number_array [", i, "] ", array_element);
} 
console.log("========== Initial Array  ===========")

while (arrya_index < n) {
    if( arrya_index === update_index){
        number_array[update_index] = update_value;
        break;
    }
    arrya_index = arrya_index + 1;
}

console.log("updated value for the index"+ update_index + " is "+ number_array[update_index]);


console.log("=========== Updated Array =========")
for (let i = 0; i < n; i++) {
  const array_element = number_array[i];
  console.log(" Array  [", i, "] ", array_element);
} 
console.log("========== Updated Array  ===========")