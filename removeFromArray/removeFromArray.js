const removeFromArray = function() {
    let newArray = Array.from(arguments[0]);
    for (i = 1; i <= arguments.length -1; i++) {
        for (j = 0; j <= newArray.length -1; j++) {
            if (arguments[i] === newArray[j]) {
                newArray.splice(j, 1);
            }
        }
    }
    return newArray;

}

module.exports = removeFromArray
