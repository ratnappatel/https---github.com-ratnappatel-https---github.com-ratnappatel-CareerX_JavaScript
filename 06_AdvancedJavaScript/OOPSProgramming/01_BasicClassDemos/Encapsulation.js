var MyApplication = /** @class */ (function () {
    function MyApplication(id, name, slary) {
        this.id = id;
        this.name = name;
        this.salary = slary;
    }
    MyApplication.prototype.getSalary = function () {
        return this.salary;
    };
    MyApplication.prototype.setSalary = function (salary) {
        var otp = Math.random() * 10000;
        console.log(otp);
        var input = prompt('Enter OTP');
        var enteredOTP = Number(input);
        if (otp === enteredOTP)
            this.salary = salary;
        else
            alert('You are not authorized to update salary ...');
    };
    return MyApplication;
}());
var m1 = new MyApplication(11, "Name 1", 846424.73);
console.log(m1);
console.log(m1.getSalary());
var arr = [10, 20, 349, 48];
console.log(arr);
m1.setSalary(1200000);
