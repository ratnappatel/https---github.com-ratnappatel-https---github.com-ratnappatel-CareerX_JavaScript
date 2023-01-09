const employee={
    id: 101,
    name:'Ratna',
    salary:6543.23,
    permanent:true,
    display : function(){
        return "ID : "+this.id+", Name : "+this.name+", Salary : "+this.salary;
    }

}

console.log(employee.display());