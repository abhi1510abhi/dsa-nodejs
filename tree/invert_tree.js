
let {Tree} =require('./Tree')
let root = Tree();

 function  invertTree(root) {
    
    if(root == null) return null;

    if(root.left ==null || root.right == null)
    return null;

    invertTree(root.left);
    invertTree(root.right);
    let temp_left_node = root.left;
    root.left = root.right;
    root.right = temp_left_node;

    return root
};



let result = invertTree(root)
console.log("result", result);