
// 0112358 ...

// f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
    
    let prev2 = 0;
    let prev1 = 1;

    for (let i = 2; i <= n; i++){
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}


let result = fibonacci(40 );
console.log("result :" , result)