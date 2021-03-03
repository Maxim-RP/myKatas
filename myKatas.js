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