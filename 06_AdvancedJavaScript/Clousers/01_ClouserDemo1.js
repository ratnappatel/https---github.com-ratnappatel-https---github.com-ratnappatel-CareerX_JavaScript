var global=100;
function outer()
{
    const data={one:1,two:2};
    function inner()
    {
        console.log(data);
    }
   return inner;
}
const o=outer();


o();