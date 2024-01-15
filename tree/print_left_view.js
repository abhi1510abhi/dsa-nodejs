let { Tree } = require('./Tree')

let root = Tree();

function printLeftView(root , index , ans) {
    if (root == null) {
        return;
    }
    if (!ans[index]) {
        console.log(root.data);
        ans.push(root.data)
    }
    printLeftView(root.left, index + 1, ans);
    printLeftView(root.right , index+1 ,ans);
}

let ans = []
printLeftView(root, 0, ans)
console.log(ans)