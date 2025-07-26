// General tree
// Binary tree
// Binary search tree
// AVL Tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  removeChild(value) {
    this.children = this.children.filter((child) => child.value !== value);
  }
}

const root = new TreeNode("CEO");

const manager1 = new TreeNode("Manager1");
const manager2 = new TreeNode("Manager2");

root.addChild(manager1);
root.addChild(manager2);

manager1.addChild(new TreeNode("Employee 1"));
manager2.addChild(new TreeNode("Employee 1"));

function dfs(node) {
  console.log(node.value);

  for (const child of node.children) {
    dfs(child);
  }
}

dfs(root);
