const getTheTitles = function(arr) {
    let ans = []
    arr.forEach(element => {
        ans = [...ans, element['title']]
    });

    return ans
};

// Do not edit below this line
module.exports = getTheTitles;
