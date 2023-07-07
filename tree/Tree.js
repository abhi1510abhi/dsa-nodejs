
/**
 root Node {
  data: 10,
  left: Node { data: 5, left: null, right: null },
  right: Node { data: 5, left: null, right: null }
}
 */
function Tree() {

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


module.exports = {
    Tree
}


