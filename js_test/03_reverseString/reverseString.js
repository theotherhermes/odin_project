const reverseString = function(word) {
    answer = ''
    for (startNumber = 0; startNumber < word.length; startNumber++){
        answer = answer + word.charAt(word.length-1-startNumber)
    }
    return answer
};

// Do not edit below this line
module.exports = reverseString;
