const fibonacci = function(a) {
    if (a < 1) {return "OOPS"}; 
    let numArray = [1, 1]
    for (i = 1; i < a; i++) {
        numArray.push(numArray[numArray.length - 2] + numArray[numArray.length - 1]);
    }
    return numArray[a - 1];
}

module.exports = fibonacci
