

let {Tree} =require('./Tree')
let root = Tree();

function print_node(node , n,k) {

    if (node == null) return 0;
    
    if (n == k) {
        console.log(node.data)
    }

    print_node(node.left,n+1, k)
    print_node(node.right,n+1,k)
}

 print_node(root ,0,2)





