/**
 * JS编码实现一个二叉树的构造函数，包括节点类Node，树类BST，插入节点函数insert，
 * 并且满足
 * 1.左子节点的值 < 父节点的值 <= 右子节点的值
 * 2.可以实现先序，中序，后续遍历
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    preOrder(node) {
        if (!node) {
            node = this;
        }
        console.log(node.value)
        if (node.left) {
            this.preOrder(node.left)
        }
        if (node.right) {
            this.preOrder(node.right)
        }
    }

    inOrder(node) {
        if (!node) {
            node = this;
        }
        if (node.left) {
            this.preOrder(node.left)
        }
        console.log(node.value)
        if (node.right) {
            this.preOrder(node.right)
        }
    }

    postOrder(node) {
        if (!node) {
            node = this;
        }
        if (node.left) {
            this.preOrder(node.left)
        }
        if (node.right) {
            this.preOrder(node.right)
        }
        console.log(node.value)
    }
}

class BigTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        this._insertNode(this.root, node);
    }

    _insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left) {
                this._insertNode(root.left, node);
            } else {
                root.left = node;
            }
        }
        else if (node.value > root.value) {
            if (root.right) {
                this._insertNode(root.right, node);
            } else {
                root.right = node;
            }
        }
    }
}

const tree = new BigTree()
tree.insert(50)
tree.insert(30)
tree.insert(20)
tree.insert(40)
tree.insert(70)
tree.insert(80)
tree.insert(60)
tree.insert(10)

console.log(tree)

tree.root.preOrder()
tree.root.inOrder()
tree.root.postOrder()