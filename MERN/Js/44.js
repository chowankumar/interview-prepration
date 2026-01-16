


function reverseOdd(str){

function reverseString(str){
    console.log(str)
return str.split('').reverse().join('');
}

const words = str.split(' ');
console.log(words)

for(let i=0;i<words.length;i++){
    if(words[i].length % 2!== 0){
       words[i] = reverseString(words[i]); 
    }
}

return words.join(' ')
}

console.log(reverseOdd("One Two Four"))

// function reverseOdd(str) {
//     const strings = str.split(' ')

//     const revResult = strings.map(item => {
//         if (item.length%2 !== 0) {
//             return item.split('').reverse().join('')
//         }else{
//             return item;
//         }
//     })

//     return revResult.join(' ')

  
// }