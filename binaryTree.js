var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

var BinarySearchTree = function() {
    var root = null;

    this.insert = function(data) {
        var node = new Node(data);

        var insertNode = function (parent, node) {
            if (node.data < parent.data) {
                if (!parent.left) {
                    parent.left = node;
                }
                else {
                    insertNode(parent.left, node)
                }
            }
            else {
                if (!parent.right) {
                    parent.right = node;
                }
                else {
                    insertNode(parent.right, node);
                }
            }
        };

        if(root == null) {
            root = node;
            return root;
        }
        else {
            insertNode(root, node);
        }

    };

    this.traverse = function() {

        var inOrder = function(node) {


            if (node) {
                if (node.left){
                    inOrder(node.left);
                }
                console.log(node.data);
                if (node.right) {
                    inOrder(node.right);
                }
            }
        };

        inOrder(root);
    };

    this.find = function(key) {

      var finder = function(currentNode){

          if (currentNode.data == key){
              return currentNode;
          }
          else {
              if (currentNode.data > key) {
                  if (currentNode.left) {
                      return finder(currentNode.left);
                  }
                  else {
                    return null;
                  }
              }

              if (currentNode.data < key) {
                  if (currentNode.right) {
                      return finder(currentNode.right);
                  }
                  else {
                      return null;
                  }
              }
          }
      };
     return finder(root);
    };




    this.remove = function(key) {

    };
};


var myTree = new BinarySearchTree();
myTree.insert(20);
myTree.insert(15);
myTree.insert(30);
myTree.insert(16);
myTree.insert(23);
//myTree.traverse();
//var thirty = myTree.find(15);
//console.log(thirty);




console.log(myTree.remove(30));