var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

var BinarySearchTree = function() {
    var root = null;

    this.insert = function(data) {
        var node = new Node(data);

        if(root == null) {
            root = node;
            return root;
        }

        var insertNode = function(parent, node) {
            if(node.data < parent.data) {
                if (!parent.left) {
                    parent.left = node;
                }
                else {
                    insertNode(parent.left, node)
                }
            }
            else {
                if(!parent.right) {
                    parent.right = node;
                }
                else {
                    insertNode(parent.right, node);
                }
            }
        };
    };

    this.inOrder = function() {
        node = root;
        while(node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    };
};

var myTree = new BinarySearchTree();
myTree.insert(1);
myTree.insert(5);
myTree.insert(3);

//myTree.inOrder();