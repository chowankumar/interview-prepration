function randomNum(arr,num2){
    return arr.filter(num => num!= num2)
}
console.log(randomNum([2,4,8,6,7,8,8],8))