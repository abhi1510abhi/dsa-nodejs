
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
    
    //root.left.left = new Node(25);
    root.left.right = new Node(35);
    
    root.right.left = new Node(45);
    root.right.right = new Node(55);
    
   // root.left.left.left = new Node(100);
   root.right.right.right = new Node(69);
    return root
    
}


function BSTTREE() {

    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    
    let root = new Node(50);
    root.left = new Node(40);
    root.right = new Node(60);
    
    root.left.left = new Node(25);
    root.left.right = new Node(45);
    
    root.right.left = new Node(55);
    root.right.right = new Node(65);
    
    root.left.left.left = new Node(10);
    root.left.left.right = new Node(30);
    return root
    
}

module.exports = {
    Tree,
    BSTTREE
}


