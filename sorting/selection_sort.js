
let a = [3, 4, 2, 16, 7, 8, 5, 9]

for (let i = 0; i < a.length; i++) {
    let min_idx = i;
    for (let j = i+1; j < a.length; j++) {
        if (a[j] < a[min_idx]) {
            min_idx = j
        }
    }
    let temp = a[i];
    a[i] = a[min_idx];
    a[min_idx] = temp;
}


console.log("sorted array is ", a)