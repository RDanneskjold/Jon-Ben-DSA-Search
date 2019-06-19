// 
// 587.555
// 
// given an data structure of an array of books with indicies in Dewey
// run a binary search to find the searched book


/* function binarySearch(callstack, searchindex, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? callstack.length : end;

    if (start > end) {
        return -1;
    }
    
    const index = Math.floor((start + end) / 2);
    const item = callstack[index];

    console.log(start, end);
    if (item == searchindex) {
        return index;
    }
    else if (item < value) {
        return binarySearch(callstack, searchindex, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(callstack, searchindex, start, index - 1);
    }
}; */

// in-order   14 15 19 25 27 35 79 89 90 91 
// pre-order  35 25 15 14 19 27 89 79 91 90
// post-order 14 19 15 27 25 79 90 91 89 35
// what is the post-order

/*                 35
        /               \
        25              89
    /       \           / \
    15         27      79  91
 /     \                   /
14      19                 90

*/
// in order

// 5 7 6 9 11 10 8

/*                 8
             /       \ 
            6        10
            / \      /     \
           5   7    9      11 */


dsfPostOrder() {
    if (this.left) {
        this.left.dsfPostOrder();
    }
    if (this.right) {
        this.right.dsfPostOrder();
    }
    console.log(this.key);
}

dsfInOrder(){
    if (this.left) {
        this.left.dsfInOrder();
    }
    console.log(this.key);
    if (this.right) {
        this.right.dsfInOrder();
    }
}

dfs(values=[]) {
    if (this.left) {
        values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
}



dsfPreOrder(){
    // Pre-order
    console.log(this.key);
    if (this.left) {
        this.left.dsfPreOrder();
    }
    if (this.right) {
        this.right.dsfPreOrder();
    }
}


