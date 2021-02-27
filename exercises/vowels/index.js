// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let results = str.match(/[aeiou]/gi);
    return results ? results.length : 0;
}

module.exports = vowels;

// Solution 1
// function vowels(str) {
//     let count = 0;
//     let checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         checker.includes(char) && count++;
//     }

//     return count;
// }

// Solution 2
// function vowels(str) {
//     let results = str.match(/[aeiou]/gi);
//     return results ? results.length : 0;
// }