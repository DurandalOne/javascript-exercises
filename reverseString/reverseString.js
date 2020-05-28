const reverseString = function(string) {
    let newString = [];
    for (i = string.length -1; i >= 0; i--) {
        newString.push(string[i]);
    }
    return newString.join("");
}

module.exports = reverseString
