 
function oddishOrEvenish(num){
const digits = num.toString().split('').map(Number);

const sum = digits.reduce((acc,digit) => acc+ digit,0);

return sum % 2 === 0? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(121));


//create the function.
//change the number to string then array then Number
//store the  sum of this array in sum var
//for sum use reduce
//check and return