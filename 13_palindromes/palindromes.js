const palindromes = function (str) {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
