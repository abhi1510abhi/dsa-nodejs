let {createQueue} = require('../queue/Queue')

let { Tree } = require('./Tree')
let root = Tree();

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

print_level_order(root);




