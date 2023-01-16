var x=100;
console.log(x);
 var x=200;
 console.log(200);

 class Person {
    constructor(id,name,email)
    {
        this.id=id;
        this.name=name;
        this.email=email;
    }
    disp(){
        console.log(this);
    }
 }

 var p1=new Person(11,"Ratna","ratna@gmail.com");
 p1.disp();
 var p2=new Person(22,"Pinakin","PINAKIN@gmail.com");
 p2.disp();

 class People {
    constructor(id,name,mobileNo)
    {
        this.id=id;
        this.name=name;
        this.mobileNo=mobileNo;
    }
    print()
    {
        console.log(this);
    }
 }
 var p1=new People(11,"Ratna",98354727);
 p1.name="abc";
 console.log(p1.name);
 p1.print();
 var p2=new People(22,"Pinakin",63846282);
 p2.print();