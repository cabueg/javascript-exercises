const palindromes = function (str) {
    str = str.replace(/\W/g, '').toLowerCase();

    let reversedString = str.split("").reverse().join("");

    return str === reversedString
};

palindromes('hello world!')

// Do not edit below this line
module.exports = palindromes;
