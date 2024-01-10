
// 0112358 ...

// f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
    if (n <= 1) {
        return n
    }


    return fibonacci(n - 1) + fibonacci(n - 2);
}


let result = fibonacci(38);
console.log("result :" , result)