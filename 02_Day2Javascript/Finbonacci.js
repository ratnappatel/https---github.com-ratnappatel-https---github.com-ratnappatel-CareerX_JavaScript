var v1="abc"; // file-scoped variable
function fibo(){
    // declartion syntax for variable in Javascript = var, let , const
    // var = function-scoped variable
    // let = block-scoped variable  classObj.field_name
    // datatype are implicitly inferned while assigning any value to variable in JS
    v1=10;
    var v2="Hello World"; // Function Scoped 
    var v3=true;
    var v4=[10, 20, 30];
    const pi=3.14;

    console.log("pi = "+pi);
    pi=20.98;
    console.log("pi = "+pi);

   console.log("v1 : "+typeof(v1));
   console.log("v2 : "+typeof(v2));
   console.log("v3 : "+typeof(v3));
   console.log("v4 : "+typeof(v4));

   {
        var i1=100;
        let i2=200; // Block-scoped variable cannot be accessed outside of this curly brackets
        console.log("i1 = "+i1);
        console.log("i2 = "+i2);
   }
   console.log("i1 = "+i1);
   //console.log("i2 = "+i2);
}
//fibo();
console.log("v1 = "+v1);
//console.log(v2);