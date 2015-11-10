var Node = function(data) {
    this.data = data;
    this.next = null;
};

var Queue = function() {
    var head = null;
    var tail = null;
    var tempNode = null;

    this.isEmpty = function() {
        return head == null;
    };

    this.enqueue = function(data) {
        tempNode = new Node(data);

        if (head == null) {
            head = tempNode;
            tail = tempNode;
            head.next = tail;
        }
        else {
            tail.next = tempNode;
            tail = tempNode;

        }

    };

    this.dequeue = function() {
        oldHead = head;
        if (head == null) {
            throw "Queue is empty";
        }

        head = oldHead.next;
        return oldHead.data;

    };

};


var myQueue = new Queue();
myQueue.enqueue('Kayla');
myQueue.enqueue('Justin');
var me = myQueue.dequeue();
console.log(me);
var babe = myQueue.dequeue();
console.log(babe);
console.log(myQueue.isEmpty());
var noOne = myQueue.dequeue();

