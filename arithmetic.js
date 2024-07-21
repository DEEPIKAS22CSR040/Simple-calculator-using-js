module.exports = {
    addition: function(x, y) {
        return x + y;
    },
    subtraction: function(x, y) {
        return x - y;
    },
    multiplication: function(x, y) {
        return x * y;
    },
    division: function(x, y) {
        return x / y;
    },
    modulous: function(x, y) {
        return x % y;
    },
    exponent: function(x, y) {
        return x ** y;
    },
    
    factorial: function(x) {
        let f = 1;
        for (let i = 1; i <= x; i++) {
            f = f * i;
        }
        return f;
    }
};
