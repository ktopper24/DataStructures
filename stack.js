var Node = function(data) {
    this.data = data;
    this.next = null;
};

people = ['Kayla', 'Justin', 'Brady', 'Pam', 'Eric'];

var head = null;
var oldHead = null;


var Stack = function() {

    this.push = function(data) {
        tempNode = new Node(data);
        if (head != null) {
            tempNode.next = head;
        }
        head = tempNode;

    };

    this.pop = function() {
        oldHead = head;

        if (oldHead.next != null) {
            head = oldHead.next;
        }

        return oldHead.data;

    }

};

var myStack = new Stack();
myStack.push('Hello');
myStack.push('Hi');
myStack.push('Greeting');
var greeting = myStack.pop();
var greeting2 = myStack.pop();
var greeting3 = myStack.pop();
console.log(greeting);
console.log(greeting2);