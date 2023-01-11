var d=document.getElementById('data');
fetch('https://jsonplaceholder.typicode.com/todos/22')
.then(response=>response.json())
.then(data=>d.innerHTML=JSON.stringify(data));


console.log('abc');