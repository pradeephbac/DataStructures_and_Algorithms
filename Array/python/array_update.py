#
#3. Update Array values
#

number_array = [4, 5, 2, 7, 9, 13]; 

update_index = 4;
update_value = 88;
n = len(number_array); 
arrya_index = 0;

print("=========== Original Array =========")
for idex, item in enumerate(number_array):
    print(" Array [", idex , "] ", item)


while (arrya_index < n) :
    if( arrya_index == update_index):
        number_array[update_index] = update_value;
        break;
    arrya_index = arrya_index + 1;


print("updated value for the index", update_index , " is ", number_array[update_index]);

print("=========== Updated Array =========")
for idex, item in enumerate(number_array):
    print(" Array [", idex , "] ", item)
