// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (n <= 0) return;
    if (n === row) return;

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    let midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;

// Solution 1
// function pyramid(n) {
//     if (n <= 0) return;
//     let col = (n - 1) * 2 + 1;

//     for (let i = 1; i <= n; i++) {
//         let numCharA = (i - 1) * 2 + 1;
//         let numCharB = col - numCharA;
//         let level = '';

//         for (let j = 1; j <= numCharA; j++) {
//             level += '#';
//         }

//         for (let j = 1; j <= numCharB; j++) {
//             if (j % 2 === 0) {
//                 level = level + ' ';
//             } else {
//                 level = ' ' + level;
//             }
//         }

//         console.log(level);
//     }
// }

// Solution 2
// function pyramid(n, row = 0, level = '') {
//     if (n <= 0) return;
//     if (n === row) return;

//     if (level.length === 2 * n - 1) {
//         console.log(level);
//         return pyramid(n, row + 1);
//     }

//     let midpoint = Math.floor((2 * n - 1) / 2);
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }
//     pyramid(n, row, level + add);
// }