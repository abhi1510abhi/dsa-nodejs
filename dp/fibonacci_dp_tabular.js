
// 0112358 ...

// f(n) = f(n-1) + f(n-2)

function fibonacci(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}


let result = fibonacci(40 );
console.log("result :" , result)