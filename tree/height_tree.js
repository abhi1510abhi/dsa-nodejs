let {Tree} =require('./Tree')
let root = Tree();

function tree_height(node) {

    if (node == null) return 0;
    return Math.max(tree_height(node.left) , tree_height(node.right)) +1
}


let height = tree_height(root)
console.log("height" , height)




