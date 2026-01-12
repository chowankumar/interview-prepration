function createCounter(){
let count= 0;
return function(){
    return  ++count;
}
}
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//closure : is created when a function remembers the variables from its outer scope even after that outer function has finshed executing.