//Employee is a class/ is a type of objects created using this class definition
class Employee
{
   // constructor
    constructor(id,name,salary)
    {
         // properties declaration
        this.id=id;
        this.name=name;
        this.salary=salary;

    }
    // methods declaration
    printEmployeeDetails()
    {
        document.writeln("Employee ID : "+this.id+"<br>Employee Name : "+this.name+"<br>Employee Salary : "+this.salary);
    }
}

var emp1=new Employee(101,"Neel",234444.34);
var emp2=new Employee(102,"Uttam",746474.33);
var emp3=new Employee(103,"Gargesh",849464.98);

emp1.printEmployeeDetails();
document.writeln("<hr height='5px'>");
emp2.printEmployeeDetails();
document.writeln("<hr height='5px'>");
emp3.printEmployeeDetails();

