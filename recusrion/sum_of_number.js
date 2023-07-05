
// f(n) = n+ f(n-1)

function sum(n) {
    
    if (n == 0) return 0
    
    return n + sum(n-1)
}

let result = sum(5)
console.log(result)