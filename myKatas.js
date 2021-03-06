//Sum of all numbers in range.
var summation = function (num) {
    return num * (num + 1) / 2
}

//String reverse
function solution(str) {
    return str.split('').reverse().join('')
}

//Reversed words
function reverseWords(str) {
    var wlist = []
    wlist = str.split(' ')
    wlist = wlist.reverse()
    return wlist.join(' ');
}

function getSum(a, b) {
    const arr = []
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
    } else {
        for (let i = a; i >= b; i--) {
            arr.push(i)
        }
    }
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(sum)
}

//Formating phone number
// input [1,2,3,4,5,6,7,8,9,0]

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}


// Unique In Order
var uniqueInOrder = function(iterable) {
    let result = []
    for (let i=0; i<iterable.length; i++){
        if (iterable[i] != iterable[i+1]){
            result.push(iterable[i])
        }
    }
    return result
}