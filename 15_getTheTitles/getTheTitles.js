const getTheTitles = function(books) {
    return books.reduce((arr, value) => {
        arr.push(value.title);
        return arr;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
