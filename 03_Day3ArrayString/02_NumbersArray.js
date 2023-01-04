var numbers=[23,64,91,15,27,38,41,56];

var names=['Uttam','Neel','Gargesh','Ketan','Mayur'];
console.log(numbers);
console.log(names);

numbers=numbers.sort();
names=names.sort();
console.log("-----------------After Sorting -------------------------");
console.log(numbers);
console.log(names);

numbers.push(10); //adding new element at last of array
names.pop(); // removes last element from array

console.log(numbers.sort());
console.log(names);

var combined=
console.log(numbers.join());

numbers[0]=100;
numbers[numbers.length]=111;
numbers[numbers.length/2]=999;
console.log('======================================')
console.log(numbers);