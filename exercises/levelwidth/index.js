// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let tempArr = [root, '|'];
  let result = [0];

  while (tempArr.length > 1) {
    let node = tempArr.shift();

    if (node === '|') {
      tempArr.push(node);
      result.push(0);
    } else {
      result[result.length - 1]++;
      tempArr.push(...node.children);
    }
  }

  return result;
}

module.exports = levelWidth;
