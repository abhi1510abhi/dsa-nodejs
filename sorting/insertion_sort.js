
let a = [3, 4, 2, 16, 7, 8, 5, 9]

for (let i = 0; i < a.length; i++) {
    let j = i;

    while (j > 0 && a[j] < a[j - 1]) {
        let temp = a[j];
         a[j] = a[j - 1];
         a[j - 1] = temp;
        j--;
    }
}

console.log("insertion sort " ,a)