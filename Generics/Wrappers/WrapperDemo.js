// to convert primitive to object we neer wrapper
var s = "India is my country"; // string literal (primitive)
var sobject = new String(s); // String  object
if (sobject instanceof String)
    console.log("Wrapping done");
var ss;
ss = s;
if (ss instanceof String)
    console.log("Wrapping done");
var rolnum = 345; // number : primitive
var rollObject = new Number(rolnum); // Number object
var marriedStatus = true; // boolean
var statusObject = new Boolean(marriedStatus); // Boolean type object
