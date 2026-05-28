const mergesort = (array) => {
    // Base Case scenarios: If length is 0/1, return invalid or back out
    if (array.length === 0) return "Invalid Array Supplied";
    if (array.length === 1) return array;

    // Recursion method
    const split = Math.floor(array.length / 2); // Array length divided by 2
    const left = array.slice(0, split); //  Giving left and right a shallow copy of the array
    const right = array.slice(split, array.length);

    return merge(mergesort(left), mergesort(right));
};

const merge = (left, right) => {
    // Merging both array parameters - Not Recursion
    const result = [];
    let incomingLeft = 0;
    let incomingRight = 0;

    // if incoming left/right is less than their lengths, then push to the result of both
    while (incomingLeft < left.length && incomingRight < right.length) {
        if (left[incomingLeft] < right[incomingRight]) {
            result.push(left[incomingLeft]);
            incomingLeft++;
        } else {
            result.push(right[incomingRight]);
            incomingRight++;
        }
    }

    // Cleanup to ingest all the values
    while (incomingLeft < left.length) {
        result.push(left[incomingLeft]);
        incomingLeft++;
    }

    while (incomingRight < right.length) {
        result.push(right[incomingRight]);
        incomingRight++;
    }

    return result;
};

// Value arrays

console.log("This was printed recursively", mergesort([8, 3, 14, 49, 6, 7, 1, 90]));