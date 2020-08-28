#
#3. Delete Operation on Array 
#

number_array = [4, 5, 2, 7, 9, 13]; 


# Lets delete the item in the 3rd position of the original array   [4, 5, 2, 7, 9, 13];

print("=========== Initial Array =========")
for idex, item in enumerate(number_array):
    print(" Array [", idex , "] ", item)
print("=========== Initial Array =========")


m = 3;   #delete the item at the 5th position
n = len(number_array);  #assign the array length
j = m  #define a variable in the size index to remove

 
while( j < n) : 
    number_array[j-1] =  number_array[j]; 
    j = j + 1;


n = n - 1; # length will reduce due to the deletion

print("========= Updated Array ============")
for i in range(n):
      print(" Array [", i , "] ", number_array[i])
print("========== Updated Array ===========")

# Initial array before insertion:   [4, 5, 2, 7, 9, 13];
# result array after insertion:     [4, 5, 2, 9, 13];