// /**
//  * @param {number} n
//  * @return {number}
//  */
//  function printNum(n,idx,ds,ans  , even , prime) {
//      if (idx >= n) {
//         console.log(ds)
//         ans.push([...ds])
//         return
//     }

//    if(idx %2 ==0) {
//        // even
//        for(let i =0 ; i< even.length ; i++) {
//            ds.push(even[i])
//            printNum(n,idx+1,ds,ans,even,prime);
//            ds.pop()
//        }
//    }else {
//        // odd
//        for(let j=0;j<prime.length ; j++) {
//            ds.push(prime[j])
//            printNum(n,idx+1,ds,ans,even,prime)
//            ds.pop()
//        }
//    }
// }
// var countGoodNumbers = function(n) {
//    let ans = []
//    printNum(n,0,[],ans,[0,2,4,6,8],[2,3,5,7])
//    return ans.length % 1000000007
// };

// let r = countGoodNumbers(n = 50);
// console.log("result",r)



/**
 * @param {number} n
 * @return {number}
 */
 function printNum(n,idx,ds,res  , even , prime) {
    if (idx >= n) {
        console.log(ds)
        res.count = res.count+1
        // ans.push([...ds])
       return
   }

  if(idx %2 ==0) {
      // even
      for(let i =0 ; i< even.length ; i++) {
          ds.push(even[i])
          printNum(n,idx+1,ds,res,even,prime);
          ds.pop()
      }
  }else {
      // odd
      for(let j=0;j<prime.length ; j++) {
          ds.push(prime[j])
          printNum(n,idx+1,ds,res,even,prime)
          ds.pop()
      }
  }
}
var countGoodNumbers = function(n) {
    let res = {count :0}
  printNum(n,0,[],res,[0,2,4,6,8],[2,3,5,7])
  return res.count % 1000000007
};

let r = countGoodNumbers(n = 1);
console.log("result", r)
