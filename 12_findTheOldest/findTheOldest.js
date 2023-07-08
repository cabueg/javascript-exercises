const findTheOldest = function(arr) {
    let ans = arr[0]
    arr.forEach(element => {
        if (getAge(element) > getAge(ans)) {
            ans = element
        }
    });
    return ans
};

const getAge = function(obj) {
    if (obj.hasOwnProperty('yearOfDeath')) {
        return obj['yearOfDeath'] - obj['yearOfBirth']
    }
    else {
        let today = new Date()
        return today.getFullYear() - obj['yearOfBirth']
    }
}


// Do not edit below this line
module.exports = findTheOldest;
