function getSequence(arr, i, ds, target, ans, size) {
    if (i >= size) {
        if (target == 0) {
            ans.push([...ds]);  
        }
        return;
    }

    if (arr[i] <= target) {
        ds.push(arr[i]);
        getSequence(arr, i, ds, target - arr[i], ans, size);
        ds.pop();
    } 
    
    getSequence(arr, i + 1, ds, target, ans, size);
}

var combinationSum = function(candidates, target) {
    let ans = [];
    getSequence(candidates, 0, [], target, ans, candidates.length);
    return ans;
};

let r = combinationSum([3,1,2], 4)
console.log(r)