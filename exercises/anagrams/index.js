// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

// Solution 1
// function createCharMap(str) {
//     let charMap = {};
//     str = str.replace(/[^\w]/g, '').toLowerCase();
//     for (let char of str) {
//         charMap[char] = ++charMap[char] || 1;
//     }
//     return charMap;
// }

// function anagrams(stringA, stringB) {
//     let aChapMap = createCharMap(stringA);
//     let bChapMap = createCharMap(stringB);

//     if (Object.keys(aChapMap).length !== Object.keys(bChapMap).length) {
//         return false;
//     }

//     for (let key in aChapMap) {
//         if (aChapMap[key] !== bChapMap[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// Solution 2
// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }