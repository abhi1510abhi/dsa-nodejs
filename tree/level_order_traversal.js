let {createQueue} = require('../queue/queue')

function print_level_order(node) {
    let queue = createQueue();
    queue.push(node);

    while (queue.data.length > 0) {
        let pop_node = queue.pop();
        
        if (pop_node == null) return;

        console.log(pop_node.data);
        queue.push(pop_node.left);
        queue.push(pop_node.right);
    }

   
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
print_level_order(root);




