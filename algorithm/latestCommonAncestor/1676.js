// 输入一棵不含重复值的二叉树，但这次不是给你输入p和q两个节点了，而是给你输入一个包含若干节点的列表nodes（这些节点都存在于二叉树中），让你算这些节点的最近公共祖先。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNodes} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
  if (!root) return;

  if (nodes.find(n => n.val === root.val)) {
    return root
  }

  const left = lowestCommonAncestor(root.left, nodes)
  const right = lowestCommonAncestor(root.right, nodes)

  if (left && right) {
    return root
  }

  return left || right
};
