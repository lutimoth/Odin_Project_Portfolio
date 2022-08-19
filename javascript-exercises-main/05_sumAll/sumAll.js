const sumAll = function(num1, num2) {
    if (num1 < 0 | num2 < 0){
        return 'ERROR'
    }

    if (typeof num1 != 'number' | typeof num2 != 'number'){
        return 'ERROR'
    }

    if (num1 < num2){
        smaller = num1;
        bigger = num2;
    } else {
        smaller = num2;
        bigger = num1;
    }
    
    let distance = bigger - smaller
    let i = 1;
    let total = smaller

    while (i <= distance){
        total += smaller + i
        i++
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
