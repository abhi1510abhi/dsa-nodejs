
let a = [3, 4, 2, 16, 7, 8, 5, 9]


for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
            let temp = a[j];
            a[j] = a[j + 1];
            a[j+1] = temp
        }
    }
}

console.log("bubble sort " ,a)

