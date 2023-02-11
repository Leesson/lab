// 题目 1644

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let foundP = false;
let foundQ = false;
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return;

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root
  }

  if (root.val === p.val) {
    foundP = true;
    return root
  }

  if (root.val === q.val) {
    foundQ = true;
    return root
  }

  return foundP && foundQ ? left || right : null
};
