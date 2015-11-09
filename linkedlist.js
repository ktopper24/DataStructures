var Node = function(data) {
    this.data = data;
    this.next = null;
};




var head = null;
var lastNode = null;

for (var i = 0; i < people.length; i++) {
    var tempNode = new Node(people[i]);
    if (head == null) {
        head = tempNode;
    }
    if (lastNode != null) {
        lastNode.next = tempNode;
    }
    lastNode = tempNode;
}

while (head != null) {
    console.log(head.data);
    head = head.next;
}