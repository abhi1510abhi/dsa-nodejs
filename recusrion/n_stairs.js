/**
 * There are n stairs, a person standing at the bottom wants to reach the top. 
 * The person can climb either 1 stair or 2 stairs at a time. 
 * Count the number of ways, the person can reach the top.
 n =5 , s1 = 1 , s2 =2
 */


function n_stair(n, s1, s2 , o_p) {
    if (n == 0) {
        console.log("\n", o_p)
        return 1
    }
    if (n < 0) return 0

    return n_stair(n - s1, s1, s2 , o_p+s1) + n_stair(n - s2, s1, s2 , o_p+s2);
}

let result = n_stair(5, 3, 2,"");
console.log("\n total ways" , result)