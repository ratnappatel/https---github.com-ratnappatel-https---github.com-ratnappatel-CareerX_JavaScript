class MyApplication
{
    private id: Number;
    private name:String; // Read-Only Property
    private salary:number; // Read-Write Property

    constructor(id:number, name:string, slary:number)
    {
        this.id=id;
        this.name=name;
        this.salary=slary;
    }

    public getSalary():number{
       return this.salary;
    }
    public setSalary(salary:number,enteredOTP:number)
    {
        this.salary=salary;        
    }
    public getOTP():number``
    {
        var otp=Math.random()*10000;
        console.log(otp);
        return otp;
    }

}

var m1=new MyApplication(11,"Name 1",846424.73);
console.log(m1);
console.log(m1.getSalary());

var arr =[10,20,349,48];
console.log(arr);

