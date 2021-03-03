//Sum of all numbers in range.
var summation = function (num) {
    return num * (num + 1) / 2
}

//String reverse
function solution(str){
    return str.split('').reverse().join('')
}

//Reversed words
function reverseWords(str){
    var wlist = []
    wlist = str.split(' ')
    wlist = wlist.reverse()
    return wlist.join(' '); 
}