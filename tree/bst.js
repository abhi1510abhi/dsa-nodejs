
let { BSTTREE } = require('./Tree')

let root = BSTTREE();

function bst(node,val) {
    
    if (node == null) return false
    
    if (node.data == val) return node;

    if (val < node.data) {
       return bst(node.left,val) 
    } else {
        return bst(node.right,val) 
    }
}

let result = bst(root, 50)
console.log(result);

