const sumAll = function(number1, number2) {

    let sum = 0
    if (number1 > 0 && number2 > 0 && typeof(number1) == "number" && typeof(number2) == "number") {
        if (number1 < number2) {
            for (let total = number1; total <= number2; total++){
                sum = sum + total
            }
        } else {
            for (let total = number2; total <= number1; total++){
                sum = sum + total
            }
        }
    } else { 
        return "ERROR"
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
