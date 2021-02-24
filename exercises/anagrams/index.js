// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function convertStr(str) {
    str = str.trim().toLowerCase().replace(/ /g , '');
    let tempArr = [];
    for (let char of str) {
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
            tempArr.push(char);
        }
    }
    str = tempArr.join('');
    return str;
}

function hashStrToObj(str) {
    let obj = {};
    for (let char of str) {
        obj[char] = obj[char] ? ++obj[char] : 1;
    }
    return obj;
}

function anagrams(stringA, stringB) {
    stringA = convertStr(stringA);
    stringB = convertStr(stringB);
    let objA = hashStrToObj(stringA);
    let objB = hashStrToObj(stringB);

    for (const key in objA) {
        if (objA[key] !== objB[key]) return false;
    }
    for (const key in objB) {
        if (objA[key] !== objB[key]) return false;
    }
    return true;
}

module.exports = anagrams;
