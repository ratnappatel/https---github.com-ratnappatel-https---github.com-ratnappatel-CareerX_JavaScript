async function getProducts(){
   var response= fetch('https://jsonplaceholder.typicode.com/posts') // 5-10mins
   if(!response.ok)
    console.log('error occured....');
   
   return (await response).json();
}
const promise=getProducts();
promise.then(data=>console.log(data))
console.log('i am in queue');