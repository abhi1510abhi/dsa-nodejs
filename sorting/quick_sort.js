let arr = [3, 4, 2, 16, 7, 8, 5, 9]

function quickSort(arr , low , high) {
    if (low < high) {
        let p_index = partition(arr, low, high);
        quickSort(arr, low, p_index);
        quickSort(arr,p_index+1,high)
    }
    return arr
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j=high;

    while (i < j) {
        while (arr[i] <= pivot && i < high) {
            i++
        }
        while (arr[j] >= pivot && j > low) {
            j--
        }

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j
}

let res = quickSort(arr, 0, arr.length - 1);
console.log(res)