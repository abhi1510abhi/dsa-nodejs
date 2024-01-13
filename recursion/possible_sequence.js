
// strings
function possible_sequence(str, i, current) {
    
    if (i == str.length) {
        console.log(current);
        return;
    }
    possible_sequence(str, i + 1, current) // dont include
    possible_sequence(str, i + 1, current+ str[i]) // include

}

possible_sequence("abc", 0, "");

function array_sequence(arr, i, ds ,size) {
    
    if (i >= size) {
        console.log(ds)
        return;
    };

    ds.push(arr[i]);
    array_sequence(arr, i + 1, ds, size); // include
    ds.pop(); // since call by reference so we have to pop
    
    array_sequence(arr, i + 1, ds, size); // dont include

}

 array_sequence([3,1,2] , 0 , [] , 3)