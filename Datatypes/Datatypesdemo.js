// typescript is superset of javascript : right
// javascript is superset of typescript : wrong
// number, boolean : primitives
// string : literal
// Number, String, Boolean : wrappers
// custome data types
var empId; // : type annotation
empId = 7890;
console.log(empId);
document.write("<b>" + empId + "</b>");
var bNode = document.createElement("b");
bNode.textContent = empId + "";
document.body.append(bNode);
var iNode = document.createElement('i');
iNode.append(document.createTextNode(empId + ""));
document.body.append(iNode);
//empId="Hi";
//empId=true;
// to compile typescript file on machine, we need typescript compiler
// npm install : node package manager
// npm install typescript : this command supports only if u have npm installed on machine
// install node on machine : npm gets automatically installed
