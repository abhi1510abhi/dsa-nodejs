
// strings
function possible_sequence(str, i, current) {
    
    if (i == str.length) {
        console.log(current);
        return;
    }
    possible_sequence(str, i + 1, current) // dont include
    possible_sequence(str, i + 1, current+ str[i]) // include

}

// possible_sequence("abc", 0, "");

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

// array_sequence([3, 1, 2], 0, [], 3)
 

// subseuence with sum k


function subs_with_sum_k(arr, i, ds, size, k) {
    if (i >= size) {
        let sum =0
        for (let j = 0; j < ds.length; j++) {
            sum = sum + ds[j];
        }
        if (sum == k) console.log(ds);

        return;
    }

    ds.push(arr[i]);
    subs_with_sum_k(arr, i + 1, ds, size, k);
    ds.pop();
    subs_with_sum_k(arr, i + 1, ds, size, k);
}

//subs_with_sum_k([3,1,2] , 0 , [] ,3 ,12)


// without for loop in base condition



function subs_with_sum_k_1(arr, i, ds,c_sum, size, k) {
    if (i >= size) {
        
        if (c_sum == k) console.log(ds);

        return;
    }

    ds.push(arr[i]);
    c_sum = c_sum+arr[i]
    subs_with_sum_k_1(arr, i + 1, ds,c_sum, size, k);
    c_sum = c_sum-arr[i]
    ds.pop();
    subs_with_sum_k_1(arr, i + 1, ds,c_sum, size, k);
}

subs_with_sum_k_1([3, 1, 2], 0, [],0, 3, 5)
