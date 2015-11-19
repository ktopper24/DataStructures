var mergeSort = function(array) {
    if (array.length < 2) {
        return array;
    }
    else if (array.length == 2) {
        if (array[0] < array[1]) {
            return array;
        }
        else {
            var temp = array[0];
            array[0] = array[1];
            array[1] = temp;
        }
    }
    else {
        var leftArray = array.slice(0,(array.length/2));
        var rightArray = array.slice((array.length/2), array.length);


        var left = mergeSort(leftArray);
        var right = mergeSort(rightArray);

        var leftPointer = 0;
        var rightPointer = 0;
        var sortedArray = [];


        for (var i = 0 ; i < array.length; i ++) {
            if (left[leftPointer] < right[rightPointer] || !right[rightPointer]) {
                sortedArray.push(left[leftPointer]);
                leftPointer++;
            }
            else {
                sortedArray.push(right[rightPointer]);
                rightPointer++;
            }
        }
        return sortedArray;
    }
};

var numbers = [1,4,2,7,3,8,4,2];
mergeSort(numbers);