const removeFromArray = function(arr, ...numsToRemove) {
    numsToRemove.forEach(element => {
        let index = arr.indexOf(element)
        if (index == -1) {
            return
        }
        arr.splice(index, 1);
    });

    return arr
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
