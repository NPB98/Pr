// //THIS KEYWORD
// class Student{
//     static count=0;
//     constructor(name,age,phnumber,marks)
//     {
//         count++;
//         this.name=name;
//         this.age=age;
//         this.phnumber=phnumber;
//         this.marks=marks;
//     }
//     eligibility()
//     {
//         if(this.marks>40)
//                 console.log(`${this.name} is eligible for college`);
//         else
//                 console.log(`${this.name} is not eligible for college`);
//     }
// }
// console.log(Student.count);
// const stud1=new Student('Nishi','24','1234567891','345');
// const stud2=new Student('Little','25','1234567891','345');
// const stud3=new Student('Abinash','25','1234567891','345');
// const stud4=new Student('Nrushing','30','1234567891','345');
// const stud5=new Student('Namita','32','1234567891','345');


//FAT ARROW FUNCTION
//"use strict";
//let getA=a => a;
//console.log(getA(1));
//let square=a=>a*a;
//console.log(square(2));
//var a=2;
//let square=()=>{return a*a};
//console.log(square());
// var x=function(){
// 			this.val=1;
// 			setTimeout( ()=>{
// 					this.val++;
// 					console.log(this.val);
// 					},1)
// };
// var xx=new x();
class Student{
    constructor(name,age,phnumber,marks)
    {
        this.name=name;
        this.age=age;
        this.phnumber=phnumber;
        this.marks=marks;
    }
    eligible(board)
    {
        return (age)=>{
                if(this.marks>board && this.age>age)
                    return true;
                else
                    return false;
                }
    }
}
const stud1=new Student('Nishi','24','1234567891','345');
const stud2=new Student('Little','25','1234567891','345');
const stud3=new Student('Abinash','25','1234567891','345');
const stud4=new Student('Nrushing','30','1234567891','345');
const stud5=new Student('Namita','32','1234567891','345');


if(stud1.eligible(300)(21))
	console.log(stud1.name);
if(stud2.eligible(300)(21))
	console.log(stud2.name);
if(stud3.eligible(300)(21))
	console.log(stud3.name);
if(stud4.eligible(300)(21))
	console.log(stud4.name);
if(stud5.eligible(300)(21))
	console.log(stud5.name);



