var arr=[34,12,75,35,38,36,75,35];

console.log("Actual Element Array is :");
console.log(arr);
let arr1=arr.reduce(function (accumulator,currentValue){
    if(accumulator.indexOf(currentValue) === -1)
       { accumulator.push(currentValue);}
    return accumulator;
},[]);
console.log("Unique Element Array is :");
console.log(arr1);