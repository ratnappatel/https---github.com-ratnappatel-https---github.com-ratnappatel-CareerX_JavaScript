var shape={
    radius: 25,
    name: 'circle'
}

function printDetails(shape1){
    console.log(shape1 +' this is the default shape..');
    console.log("Radius : "+this.radius);
    console.log("Shape type : "+this.name);
}


// Apply function 'printDetails' as field/property of shape class.
printDetails.apply(shape,['Cylinder']);
console.log("===========================================================================")
printDetails.call(shape,"Cylinder");


