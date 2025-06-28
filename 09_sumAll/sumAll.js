const sumAll = function (...arr) {
    if ((typeof arr[0] === 'number' && typeof arr[1] === 'number') && (Number.isInteger(arr[0]) && Number.isInteger(arr[1])) && (arr[0] >= 0 && arr[1] >= 0)) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return (max * (max + 1) / 2) - ((min - 1) * min / 2);
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
