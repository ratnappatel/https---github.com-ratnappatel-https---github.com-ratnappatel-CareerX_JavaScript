var title="CareerX PVT LTD.";

//length is property of String object type
console.log("Company name is of "+title.length+" character length");
//charAt is pre-defined method of String object in JavaScript
var last=title.length-1;
console.log("Last Character of Title is : "+title.charAt(last));

console.log("Title Ends With LTD. ? "+title.endsWith('LTD.'));

var email="abcgmail.com";

var atSymbol=email.includes('@');
var comSymbol=email.endsWith('.com');

if(atSymbol && comSymbol)
    console.log(email+" is valid email id");
else
console.log(email+" is not  a valid  email id");
