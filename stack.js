var Node = function(data) {
    this.data = data;
    this.next = null;
};

var Stack = function() {
    var head = null;
    var oldHead = null;

    this.isEmpty = function() {
        return head == null;
    };

    this.push = function(data) {
        var tempNode = new Node(data);
        if (head != null) {
            tempNode.next = head;
        }
        head = tempNode;

    };

    this.pop = function() {
        oldHead = head;
        if (head == null) {
            throw "Stack is empty";
        }

        head = oldHead.next;
        return oldHead.data;

    };

};

var myStack = new Stack();
myStack.push('Hello');
myStack.push('Hi');
//myStack.push('Greeting');
var greeting = myStack.pop();
console.log(greeting);
var greeting2 = myStack.pop();
console.log(greeting2);
var greeting3 = myStack.pop();
console.log(greeting3);