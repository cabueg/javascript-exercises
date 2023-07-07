const reverseString = function(str) {
    let finalString = ''
    for (let index = str.length - 1; index >= 0; index--) {
        finalString = finalString.concat(str[index])
    }
    return finalString
};

console.log(reverseString('hello there'))

// Do not edit below this line
module.exports = reverseString;
