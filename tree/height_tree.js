


function tree_height(node) {

    if (node == null) return 0;
    return Math.max(tree_height(node.left) , tree_height(node.right)) +1
}

function create_tree() {

    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    
    let root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    
    root.left.left = new Node(25);
    root.left.right = new Node(35);
    
    root.right.left = new Node(45);
    root.right.right = new Node(55);
    
    root.left.left.left = new Node(100);
    
    return root
}


let root = create_tree();

let height = tree_height(root)
console.log("height" , height)




