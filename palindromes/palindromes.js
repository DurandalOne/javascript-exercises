const palindromes = function(string) {
    string = string.replace(/\W/g, "");
    let stringArray = string.toLowerCase().split("");
    let stringBackwards = [];
    stringArray.forEach(element => stringBackwards.unshift(element));
    let newString = stringBackwards.join("").toLowerCase();
    return newString == string.toLowerCase();
}

module.exports = palindromes
