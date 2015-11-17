/**
 * Created by Kayla on 11/11/2015.
 */
var fibonacci = function(x) {
    if(x == 1) {
        return 1;
    }
    else if(x == 0){
        return 0;
    }
    else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
};

console.log(fibonacci(10));