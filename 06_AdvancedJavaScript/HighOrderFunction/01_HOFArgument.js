const arrInput=[45,67,89,99,12,87,92,51];

function filterDivisible(arr,callback)
{
    const filteredNos=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%3 == 0)
            callback(arr[i])?filteredNos.push(arr[i]):null;
    }
    return filteredNos;
}

function isEven(n)
{
   return n%2==0;
}

function isOdd(n)
{
    return n%2!=0;
}
console.log("Even nos which are divisible by 3 are : "+filterDivisible(arrInput,isEven));
console.log("Odd nos which are divisible by 3 are : "+filterDivisible(arrInput,isOdd));