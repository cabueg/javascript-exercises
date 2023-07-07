const sumAll = function(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number" || start < 0 || end < 0) {
        return 'ERROR'
    }
    if (start > end) {
        let placeholder = start
        start = end
        end = placeholder
    }
    let ans = 0
    for (let index = start; index <= end; index++) {
        ans += index
    }
    return ans
};

// Do not edit below this line
module.exports = sumAll;
