//SIMPLE CALCULATER 
const Prompt=require("prompt-sync")({sigint:true});
let n1=50;
let n2=20;


let operater:string=Prompt("Enter the operater.+ , -, * , /,mod,power");
if(operater=='+')
{
    console.log("IST number:"+n1);
    console.log("2ND number:"+n2);

    console.log("SUM:"+(n1+n2));
    
}
else if(operater=='-')
{
    console.log("IST number:"+n1);
    console.log("2ND number:"+n2);

    console.log("SUM:"+(n1-n2));
     
}
else if(operater=='*')
{
    console.log("IST number:"+n1);
    console.log("2ND number:"+n2);

    console.log("SUM:"+(n1*n2));
     
}
else if(operater=='/')
{
    console.log("IST number:"+n1);
    console.log("2ND number:"+n2);

    console.log("SUM:"+(n1/n2));
     
}
else if(operater=='mod')
{
    console.log("IST number:"+n1);
    console.log("2ND number:"+n2);

    console.log("SUM:"+(n1%n2));
     
}
else if(operater=='pow')
{
    console.log("IST number:"+n1);
    console.log("2ND number:"+n2);

    console.log("SUM:"+(n1**n2));
}