var data=new Object(); // OR var data={};

data['Ratna']='AUTPP3269E';
data['Neel']='AHTEYRU68T';
data['Uttam']='PURTEYT78W';
console.log(data);
data['Ratna']='TYUEIO726';

console.log(data);

console.log("PAN number of Uttam : "+data['Uttam']);
var element=document.getElementById('data').innerHTML;
element+='<ul>';
for(var key in data)
{
    var item='<li>'+key+" : "+data[key]+"</li>";
    element+=item;
}


element+='</ul>';
document.getElementById('data').innerHTML=element;
