const repeatString = function(stringValue, number) {
    if (number < 0) return "ERROR";
    let finalRes = "";
    for (let i = 0; i < number; i++) {
        finalRes += stringValue;
    }
    return finalRes
};

// Do not edit below this line
module.exports = repeatString;
