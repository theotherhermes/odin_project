const repeatString = function(perString, perNumber) {
    let answer = ''
    perNumber < 0 ? answer = "ERROR" : answer = '';
    for(let startNumber = 0; startNumber < perNumber; startNumber++){
        answer = answer + perString
    };
    return answer
};

// Do not edit below this line
module.exports = repeatString;
