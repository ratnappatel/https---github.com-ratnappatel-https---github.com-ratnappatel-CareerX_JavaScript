var sentence="Today is Wednesday mid of weekday";

console.log(sentence);
sentence=sentence.replace('a','@');
console.log(sentence);

sentence=sentence.replaceAll('a','@');
console.log(sentence);

//From 5th index to till 15th index
var subString=sentence.slice(5,15);
console.log(subString);