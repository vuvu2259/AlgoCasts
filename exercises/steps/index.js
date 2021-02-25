// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, str = '') {
    if (n <= 0) return;

    if (n === row) return;

    if (str.length === n) {
        console.log(str);
        return steps(n, row + 1);
    }

    if (str.length <= row) {
        str += '#';
    } else {
        str += ' ';
    }
    steps(n, row, str);
}

module.exports = steps;

// Solution 1
// function steps(n) {
//     if (n <= 0) return;
//     for (let i = 1; i <= n; i++) {
//         let str1 = '';
//         for (let j = 1; j <= i; j++) {
//             str1 += '#';
//         }
//         let str2 = '';
//         for (let j = 1; j <= n - i; j++) {
//             str2 += ' ';
//         }
//         console.log(str1 + str2);
//     }
// }

// Solution 2
// function steps(n) {
//     if (n <= 0) return;
//     for (let row = 1; row <= n; row++) {
//         let str = '';
//         for (let column = 1; column <= n; column++) {
//             if (column <= row) {
//                 str += '#';
//             } else {
//                 str += ' ';
//             }
//         }
//         console.log(str);
//     }
// }

// Solution 3
// function steps(n, row = 0, str = '') {
//     if (n <= 0) return;

//     if (n === row) return;

//     if (str.length === n) {
//         console.log(str);
//         return steps(n, row + 1);
//     }

//     if (str.length <= row) {
//         str += '#';
//     } else {
//         str += ' ';
//     }
//     steps(n, row, str);
// }