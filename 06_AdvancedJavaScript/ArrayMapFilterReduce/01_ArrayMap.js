var arr=[34,67,85,19,26,71,52,91,37];
console.log(arr);

squares=arr.map(e=>e*e);
console.log(squares);

evenArray=arr.filter(e=>e%2==0);
console.log(evenArray);


const emails=["abc@rediffmail.com","xyz@gmail.com","qwerty@yahoo.com","ratna@gmail.com"];

//1. Display all emails in uppercase 

console.log(emails.map(e=>e.toUpperCase()));

var gmails=emails.filter(e=>e.endsWith('@gmail.com'));
console.log(gmails);