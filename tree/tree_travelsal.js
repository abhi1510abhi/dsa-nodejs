
let {Tree} =require('./Tree')
let root = Tree();

function tree_travelsal_inorder(node) {

    if (node == null) return;
    tree_travelsal_inorder(node.left); // left
    console.log(node.data); // print
    tree_travelsal_inorder(node.right); // right
}

function tree_travelsal_pre_order(node) {

    if (node == null) return;
    console.log(node.data); // print
    tree_travelsal_pre_order(node.left); // left
    tree_travelsal_pre_order(node.right); // right
}

function tree_travelsal_post_order(node) {

    if (node == null) return;

    tree_travelsal_post_order(node.left); // left
    tree_travelsal_post_order(node.right); // right
    console.log(node.data); // print
}


console.log("inorder travelsal")
tree_travelsal_inorder(root);

console.log("preorder travelsal")
tree_travelsal_pre_order(root);

console.log("postorder travelsal")
tree_travelsal_post_order(root);