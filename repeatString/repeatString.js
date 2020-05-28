const repeatString = function(str, num) {
    let finalStr = "";
    if (num < 0) {
        finalStr = "ERROR";
    } else {
        for (i = 0; i < num; i++) {
            finalStr += str;
        }
    }
    return finalStr;
}   

module.exports = repeatString
