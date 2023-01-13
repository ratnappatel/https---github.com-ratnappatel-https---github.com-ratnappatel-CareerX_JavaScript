function calculate(operation) {
    var result=document.getElementById('result');
    switch (operation) {
        case "add":
            return function (a, b) {
                var res = a + b;
                 result.innerHTML = " Total of Give Nos. : <b>" + res + "</b>";
                 console.log(res);
            }
        case "sub":
            return function (a, b) {
                var res = (a > b) ? a - b : b - a;
               result.innerHTML = " Difference of Give Nos. : <b>" + res + "</b>";
               console.log(res);
            }
        case "mul":
            return function (a, b) {
                var res = a * b;
                result.innerHTML = " Product of Give Nos. : <b>" + res + "</b>";
                console.log(res);
            }
        case "div":
            return function (a, b) {
                var res = a / b;
               result.innerHTML = " Division Result of Give Nos. : <b>" + res + "</b>";
               console.log(res);
            }
    }
    console.log('switch executed...');
}

function doTask(operation)
{
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    calculate(operation)(a,b);
}
