// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];
    let sum = n * n;
    let borderRight = n;
    let borderBottom = n;
    let borderLeft = 1;
    let borderTop = 2;
    let coorX = 1;
    let coorY = 1;
    let direction = 'to right';

    for (let i = 1; i <= n; i++) {
        result.push([]);
    }

    for (let i = 1; i <= sum; i++) {
        result[coorY - 1][coorX - 1] = i;
        if (direction === 'to right') {
            coorX++;
            if (coorX === borderRight) {
                direction = 'to bottom';
                borderRight--;
            }
            continue;
        }
        if (direction === 'to bottom') {
            coorY++;
            if (coorY === borderBottom) {
                direction = 'to left';
                borderBottom--;
            }
            continue;
        }
        if (direction === 'to left') {
            coorX--;
            if (coorX === borderLeft) {
                direction = 'to top';
                borderLeft++;
            }
            continue;
        }
        if (direction === 'to top') {
            coorY--;
            if (coorY === borderTop) {
                direction = 'to right';
                borderTop++;
            }
            continue;
        }
    }

    return result;
}

module.exports = matrix;

// Solution 1
// function matrix(n) {
//     let result = [];
//     let sum = n * n;
//     let borderRight = n;
//     let borderBottom = n;
//     let borderLeft = 1;
//     let borderTop = 2;
//     let coorX = 1;
//     let coorY = 1;
//     let direction = 'to right';

//     for (let i = 1; i <= n; i++) {
//         result.push([]);
//     }

//     for (let i = 1; i <= sum; i++) {
//         result[coorY - 1][coorX - 1] = i;

//         if (direction === 'to right') {
//             coorX++;
//             if (coorX === borderRight) {
//                 direction = 'to bottom';
//                 borderRight--;
//             }
//             continue;
//         }

//         if (direction === 'to bottom') {
//             coorY++;
//             if (coorY === borderBottom) {
//                 direction = 'to left';
//                 borderBottom--;
//             }
//             continue;
//         }

//         if (direction === 'to left') {
//             coorX--;
//             if (coorX === borderLeft) {
//                 direction = 'to top';
//                 borderLeft++;
//             }
//             continue;
//         }

//         if (direction === 'to top') {
//             coorY--;
//             if (coorY === borderTop) {
//                 direction = 'to right';
//                 borderTop++;
//             }
//             continue;
//         }
//     }

//     return result;
// }