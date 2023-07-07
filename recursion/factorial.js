
// f(n) = n * f(n-1)
function factorial(n) {

    if (n == 0) return 1
    
    return n * factorial(n - 1);
}

let result = factorial(4);
console.log(result)