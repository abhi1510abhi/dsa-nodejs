
function reverse_array(arr, l, r) {
    
    if (l >=r) {
        console.log("result " ,arr)
        return ;
    }
    let t = arr[l];
    arr[l] = arr[r];
    arr[r] = t;
    
    reverse_array(arr, ++l, --r);
}

 reverse_array([3, 1, 2], 0, 2)
