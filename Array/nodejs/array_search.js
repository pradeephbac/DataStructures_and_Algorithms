
/*
3. Search Operation on Array  (search by index and search by value) in an algorithamic way
*/


var searchByIndex = function(array_val, index_val){
   
    console.log("=========== Initial Array =========")
    for (let i = 0; i < array_val.length; i++) {
      const array_element = array_val[i];
      console.log(" Array [", i, "] ", array_element);
    } 
    console.log("========== Initial Array  ===========")
    
    let item_index= index_val; // search the value belongs to the 'index_val'th position of the array
    let n = array_val.length;
    let search_index = 0; 
    let search_value = 0;
    
    while( search_index < n){
        if( search_index == item_index ) {
           search_value = array_val[search_index]
           break;
        }else{
            search_value = undefined
        }
        search_index = search_index + 1;
     }
    
    console.log("Array Item in the position "+item_index+" is "+ search_value)
    return search_value;
}




var searchByValue = function(array_val, item){
    console.log("=========== Initial Array =========")
    for (let i = 0; i < array_val.length; i++) {
      const array_element = array_val[i];
      console.log(" Array [", i, "] ", array_element);
    } 
    console.log("========== Initial Array  ===========")
     
    let n = array_val.length; 
    let search_value = item;  // Let's search the index of value 'item'
    let array_index = 0 
    let search_index= 0;
    
    while( array_index < n){
        if( array_val[array_index] === search_value ) {
            search_index =  array_index
            break;
        }else{
            search_index = undefined
        } 
        array_index = array_index + 1;
     }
    
    console.log("Array Item  "+ search_value +" is in the position "+ search_index)
    return search_index;
}


let number_array = [4, 5, 2, 7, 9, 13];
let string_array = ["start", "to", "study", "from", "basics"];

 
console.log(searchByIndex(string_array, 4)) 
console.log(searchByValue(string_array, "study")) 


 