const removeFromArray = function(array, ...args) {

    function removeElement(item){
        array.indexOf(item) > -1 ? array.splice(array.indexOf(item), 1) : 0
    }

    args.forEach(removeElement)

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
