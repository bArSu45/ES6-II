













////////////////////ES6 II////////


// two things needed for array in constructor func:-
//1-this.length = 0;
//2-this.array = [];

class Stack {
    constructor() {
        this.length = 0;
        this.array = [];

    }
}


//use .prototype in constructor func to implement push,pop,peak etc

//method is equal as function

Stack.prototype.push = function (value) {
    this.array[this.length] = value;
    this.length++
}

Stack.prototype.pop = function () {
    this.array.pop()
    this.length--
}

Stack.prototype.top = function () {
    return this.array[this.length - 1]
}

Stack.prototype.print = function () {
    return this.array;
}

Stack.prototype.reverse_print = function () {
    return this.array.reverse();
}

Stack.prototype.size = function () {
    return this.length;
}
let s1 = new Stack()


s1.push(5)
s1.push(8)
s1.push(4)
s1.push(4)
s1.push(6)
s1.push(50)

s1.pop()
console.log(s1.top())
console.log(s1)

console.log(s1.print())
console.log(s1.reverse_print())
console.log(s1.size())

let arr = [1, 5, 9, 7]
// console.log(arr[n-1])
