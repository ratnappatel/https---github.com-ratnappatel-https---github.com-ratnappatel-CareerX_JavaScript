var myMap=new Map();

myMap.set('One','Monday');
myMap.set('Two','Tuesday');
myMap.set('Three','Wednesday');
myMap.set('Four','Thursday');
myMap.set('Five','Friday');
console.log(myMap);

console.log("There are "+myMap.size+" elements in Map");
myMap.delete('Three');
console.log(myMap);


console.log("MyMap contains Four as key "+myMap.has('Four'));

console.log(myMap.get('Four'));