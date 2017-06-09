var Node = function(label) {
  this.label = label;
  this.leftNode = null;
  this.rightNode = null;
}

Node.prototype.insert = function(node) {
   if(node.label < this.label) {
       this.leftNode?  this.leftNode.insert(node) : this.leftNode = node;
   } else if(node.label > this.label) {
       this.rightNode?  this.rightNode.insert(node) : this.rightNode = node;
   }
};

Node.prototype.search = function(val) {
    if(val === this.label) {
        return this;
    }

    if(val < this.label) {
       return this.leftNode?  this.leftNode.search(val) : this;
    } else if(val > this.label) {
       return this.rightNode?  this.rightNode.search(val) : this;
    }
};


var rootNode = new Node(8);
rootNode.insert(new Node(3));
rootNode.insert(new Node(10));
rootNode.insert(new Node(1));
rootNode.insert(new Node(6));
rootNode.insert(new Node(14));
rootNode.insert(new Node(4));
rootNode.insert(new Node(7));
rootNode.insert(new Node(13));

console.log(rootNode.sum())

//console.log(rootNode)