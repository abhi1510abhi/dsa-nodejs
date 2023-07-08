let { Tree } = require('./Tree')
let root = Tree();

let min = root.data;

function print_min(root) {

    
    if (root.left == null || root.right == null) {
        return root.data
    }
    let left_tree = print_min(root.left)
    let right_tree = print_min(root.right)

    let min_value = Math.min(left_tree, right_tree , root.data)
    if (min_value < min) {
        min = min_value
    }
    return min
}

let result = print_min(root);
console.log("result", result)



// second minimum

var findSecondMinimumValue = function(root) {
    let min = root.val
    let min2 = Infinity
   function dfs(node) {
       if(!node) return -1
       if(node.val > min && node.val < min2)
        min2 = node.val
        min = Math.min(min, node.val)
       dfs(node.left)
       dfs(node.right)
   }
   dfs(root)
   return min2 === Infinity ? -1 : min2
};