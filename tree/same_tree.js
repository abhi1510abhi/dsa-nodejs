
let { Tree } = require('./Tree')

let p = Tree();
let q = Tree();

var isSameTree = function(p, q) {
    
    if(p == null && q == null ) 
        return true
    else if (p == null || q == null || p.val!=q.val) 
        return false
  
     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    
};

let result = isSameTree(p, q)
console.log(result);