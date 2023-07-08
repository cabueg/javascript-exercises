const fibonacci = function(x) {
    if (x < 0) return "OOPS"

    if (x == 1 || x == 2) return 1
    else if (x == 3) return 2

    let prev = 1
    let answer = 2
    for (let i = 2; i < x - 1; i++) {
        let placeholder = answer
        answer += prev
        prev = placeholder
    }
    return answer
};

// Do not edit below this line
module.exports = fibonacci;
