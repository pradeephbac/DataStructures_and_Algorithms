#
#3. Search Operation on Array  (search by index and search by value) in an algorithamic way
#

def searchByIndex(array_val, index_val) :
    item_index= index_val; # search the value belongs to the 'index_val'th position of the array
    n = len(array_val);
    search_index = 0; 
    search_value = 'undefined';
    
    while( search_index < n) :
        if( search_index == item_index ) :
           search_value = array_val[search_index]
           break;
        
        search_index = search_index + 1;  
    return search_value; 



def searchByValue(array_val, item) :
    n = len(array_val); 
    search_value = item;  # Let's search the index of value 'item'
    array_index = 0 
    search_index= 'undefined';
    
    while( array_index < n ) :
        if( array_val[array_index] == search_value ):
            search_index =  array_index
            break;  
        array_index = array_index + 1;
    
    return search_index;



print("///////////////searchByIndex in an Array ////////////////")

number_array = [4, 5, 2, 7, 9, 13]; 

print("=========== Original Array =========")

for idex, item in enumerate(number_array):
    print(" Array [", idex , "] ", item)

 

print("Array Item in the position  3 is ", searchByIndex(number_array, 3) ) # search by index

searchByValue(number_array, 9)

print("///////////////searchByValue in an Array ///////////////")

string_array = ["start", "to", "study", "from", "basics"];

print("=========== Original Array =========")

for idex, item in enumerate(string_array):
    print(" Array [", idex , "] ", item)
 
    
print("Array Item  '", item ,"' is in the position ", searchByValue(string_array, "from")) # search by index
