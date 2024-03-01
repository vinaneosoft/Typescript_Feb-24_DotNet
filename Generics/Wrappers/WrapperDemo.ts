// to convert primitive to object we neer wrapper

let s="India is my country"  // string literal (primitive)

let sobject=new String(s); // String  object
if(sobject instanceof String)
    console.log("Wrapping done");
let ss:String;
ss=s;
if(ss instanceof String)
    console.log("Wrapping done");
let rolnum=345; // number : primitive

let rollObject=new Number(rolnum); // Number object
let roll:Number;
roll=rolnum;
let marriedStatus=true;  // boolean
let statusObject=new Boolean(marriedStatus); // Boolean type object