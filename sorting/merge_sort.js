let arr = [3, 4, 2, 16, 7, 8, 5, 9]

function mergeSort(arr, low , high) {
    if (low == high) return; // if only 1 element

    let mid = parseInt((low+high)/2)
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high)
    merge(arr, low, mid, high);
    return arr
}

function merge(arr, low, mid, high) {
    let temp_arr = [];
    let left = low;
    let right = mid+1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp_arr.push(arr[left]);
            left++;
        }
        if (arr[right] <= arr[left]) {
            temp_arr.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp_arr.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp_arr.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp_arr[i-low]
    }
}

let res = mergeSort(arr, 0, arr.length - 1);
console.log(res)