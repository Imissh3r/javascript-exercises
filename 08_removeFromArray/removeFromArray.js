const removeFromArray = function(arr, ...n) {
    return arr.filter(a => !n.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;
