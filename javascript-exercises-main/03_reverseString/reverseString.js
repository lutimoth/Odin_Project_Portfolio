const reverseString = function(string) {
    const split = string.split("");
    new_str = ""
    for (let i = split.length - 1; i >= 0; i--){
        new_str += split[i]
    }
    return new_str
};

// Do not edit below this line
module.exports = reverseString;
