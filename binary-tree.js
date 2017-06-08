// create a node (constructor function) with the left and right childs
// check if the tree is empty and create a root in case of true
//  compare the values with the root and define if it is less or greatest to put on the left or right
//  use recursion to check if it is the last value on that side to push it
// to search, compare the value with the label until they match
// to delete, find the lowest value on that side of the nodes and replace with the value to delete, then delete the last value


var tree;

var Node = function(label) {
  this.label = label;
  this.leftNode = [];
  this.rightNode = [];
}

var binaryTree = function(val, node) {
    var newNode = new Node(val);
    if(!tree){
        return tree = newNode;
    }
    node = node || tree;
    var left = node.leftNode;
    var right = node.rightNode;
    
    
    if(left.length > 0 && val < node.label) {   
        return binaryTree(val, node.leftNode[0]);
    } else if(right.length > 0 && val > node.label) {
        return binaryTree(val, node.rightNode[0]);
    } else if(val < node.label) {
        return node.leftNode.push(newNode);
    } else {
        return node.rightNode.push(newNode);
    }
};

var searchOnTree = function(val, node) {
    node = node || tree;
    if(val === node.label) {
        return node;
    }

    if(val < node.label) {
        return searchOnTree(val, node.leftNode[0]);
    } else if(val > node.label) {
        return searchOnTree(val, node.rightNode[0]);
    }
};

var searchTheLowest = function(node) {
    node = node || tree;
    if(node.leftNode.length === 0) {
       return node;
    }

    var left = node.leftNode ;
    if(left.length > 0) {
        return searchTheLowest(node.leftNode[0]);
    }
};

var deleteOnTree = function(val, node) {
    node = node || tree;
    var lowestVal;
    var nodeToDelete = searchOnTree(val);
    if(nodeToDelete.leftNode.length > 0){
        lowestVal = searchTheLowest(searchOnTree(val).leftNode[0]).label;
        searchOnTree(val).leftNode = [];
    } else {  
        lowestVal = searchTheLowest(searchOnTree(val).rightNode[0]).label;
        searchOnTree(val).rightNode = [];
    }
    searchOnTree(val).label = lowestVal;    
}

binaryTree(8);
binaryTree(3);
binaryTree(10);
binaryTree(1);
binaryTree(6);
binaryTree(14);
binaryTree(13);
binaryTree(7);
binaryTree(4);
binaryTree(9);
binaryTree(2);



console.log(searchTheLowest());
console.log(searchOnTree(1));
deleteOnTree(10);

console.log(tree)
