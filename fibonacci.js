const fibs = (number) => {
    let fibArray = [];

    for (let i = 0; i < number; i++) {
        if ((fibArray[0] == null) || (fibArray[1] == null)) {
            fibArray.push(i);
        } else {
            let fibNumber = fibArray[fibArray.length -1] + fibArray[fibArray.length -2];
            fibArray.push(fibNumber);
        };
    };
    console.log("Iteration", fibArray);
};

fibs(8);

const fibsRec = (length) => {
    if (length < 1 || isNaN(length)) return "Invalid entry.";

    if (length === 1) return [0];
    if (length === 2) return [0, 1];

    return [...fibsRec(length - 1),
        fibsRec(length - 1) [length - 2] + fibsRec(length - 1)[length - 3]
    ];
}

console.log("Recursion", fibsRec(8));