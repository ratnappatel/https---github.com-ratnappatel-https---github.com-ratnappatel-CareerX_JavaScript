var x=10;
function first(fArg)
{
    var y=20;
    function child1(cArg)
    {
        var z=30;
        return child2(x+fArg+y+cArg+z);
    }
    function child2(no)
    {
        return no*-1;
    }
    return child1;
}
var maor=first(5);
console.log(maor(15));