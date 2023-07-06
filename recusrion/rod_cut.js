/**
 Given a rope of length N meters, and the rope can be cut in only 3 sizes A, B and C. The task is to maximizes the number of cuts in rope. If it is impossible to make cut then print the number else print -1. Examples:

Input: 

N = 17, A = 10, B = 11, C = 3 

Output: 3 

Explanation: The maximum cut can be obtain after making 2 cut of length 3 and one cut of length 11

 */


function rod_cut(r_len, c1, c2, c3, o_p) {

    if (r_len == 0) {
        console.log("\n", o_p , " ")
        return 0
    }
    if (r_len < 0) return -1
    let result = Math.max(
        rod_cut(r_len - c1, c1, c2, c3, o_p + c1),
        rod_cut(r_len - c2, c1, c2, c3, o_p + c2),
        rod_cut(r_len - c3, c1, c2, c3, o_p + c3)
    )
  
    if(result == -1) return -1
    return result +1 // return max number of recurcive
}


let result = rod_cut(23, 3, 9, 12, "");
console.log("result" , result)