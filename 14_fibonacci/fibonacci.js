const fibonacci = function(val) {
    let n = Number.parseInt(val);
    return (n >= 0)? Math.round((Math.pow(1 + Math.sqrt(5), n) - Math.pow(1 - Math.sqrt(5), n)) / (Math.pow(2, n) * Math.sqrt(5))) : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
