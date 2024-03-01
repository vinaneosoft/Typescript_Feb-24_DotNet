// to convert primitive to object we neer wrapper

let s="India is my country"  // string literal (primitive)
let sobject=new String(s); // String  object
if(sobject instanceof String)
    console.log("Wrapping done for sobject");
let ss:String;
ss=s;
if(ss instanceof String)
    console.log("Wrapping done ss"); // will not get displayed

let rolnum=345; // number : primitive
let rollObject=new Number(rolnum); // Number object
if(rollObject instanceof Number)
    console.log("Wrapping done for rollObject");
let roll:Number;
roll=rolnum;
if(roll instanceof Number)
    console.log("Wrapping done for roll") // will not get displayed
let marriedStatus=true;  // boolean
let statusObject=new Boolean(marriedStatus); // Boolean type object