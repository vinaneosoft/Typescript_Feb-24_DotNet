// to convert primitive to object we neer wrapper
var s = "India is my country"; // string literal (primitive)
var sobject = new String(s); // String  object
if (sobject instanceof String)
    console.log("Wrapping done for sobject");
var ss;
ss = s;
if (ss instanceof String)
    console.log("Wrapping done ss"); // will not get displayed
var rolnum = 345; // number : primitive
var rollObject = new Number(rolnum); // Number object
if (rollObject instanceof Number)
    console.log("Wrapping done for rollObject");
var roll;
roll = rolnum;
if (roll instanceof Number)
    console.log("Wrapping done for roll"); // will not get displayed
var marriedStatus = true; // boolean
var statusObject = new Boolean(marriedStatus); // Boolean type object
