
// 0112358 ...

// f(n) = f(n-1) + f(n-2)

function fibonacci(n ,dp) {
    if (n <= 1) {
        return n
    }

    if (dp[n]) {
        console.log(`${n} ->` ,dp[n] )
        return dp[n];
    }

    return dp[n] = fibonacci(n - 1,dp) + fibonacci(n - 2,dp);
}


let result = fibonacci(40 , []);
console.log("result :" , result)