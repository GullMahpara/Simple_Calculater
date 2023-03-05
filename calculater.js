var Prompt = require("prompt-sync")({ sigint: true });
var n1 = 10;
var n2 = 20;
var operater = Prompt("Enter the operater.+ , -, * , /,mod,power");
if (operater == '+') {
    console.log("IST number:" + n1);
    console.log("2ND number:" + n2);
    console.log("SUM:" + (n1 + n2));
}
else if (operater == '-') {
    console.log("IST number:" + n1);
    console.log("2ND number:" + n2);
    console.log("SUM:" + (n1 - n2));
}
else if (operater == '*') {
    console.log("IST number:" + n1);
    console.log("2ND number:" + n2);
    console.log("SUM:" + (n1 * n2));
}
else if (operater == '/') {
    console.log("IST number:" + n1);
    console.log("2ND number:" + n2);
    console.log("SUM:" + (n1 / n2));
}
else if (operater == 'mod') {
    console.log("IST number:" + n1);
    console.log("2ND number:" + n2);
    console.log("SUM:" + (n1 % n2));
}
else if (operater == 'pow') {
    console.log("IST number:" + n1);
    console.log("2ND number:" + n2);
    console.log("SUM:" + (Math.pow(n1, n2)));
}
