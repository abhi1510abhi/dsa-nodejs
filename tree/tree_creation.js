
/**
 root Node {
  data: 10,
  left: Node { data: 5, left: null, right: null },
  right: Node { data: 5, left: null, right: null }
}
 */
function create_tree() {

    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
       }
    }


    let root = new Node(10);
    let left_child = new Node(5);
    let right_child = new Node(15);
    root.left = left_child;
    root.right = right_child
    console.log("root", root)    
    
    console.log(root.left.data) // 5
    console.log(root.right.data) // 1o
    
}


create_tree()


