// key-value pair collection
// keys : unique, value = duplicate allowded
// non-indexed collection

let myMap=new Map<string, number>();
myMap.set("NEO123",45000);
myMap.set("NEO121",55000);
myMap.set("NEO323",56000);
myMap.set("NEO124",55000);
myMap.set("NEO324",88000);
myMap.set("NEO123",78000);
myMap.set("NEO323",89000);
console.log(myMap);
myMap.forEach(entries=>console.log(entries))
console.log("-------------");
let itr3=myMap.entries()  
while(true){
    let iterator=itr3.next();
    if(iterator.done==true)
        break;
    console.log(iterator.value);
    console.log(iterator.value[0]);
    console.log(iterator.value[1]);
    
}

let itr2=myMap.keys()  
while(true){
    let iterator=itr2.next();
    if(iterator.done==true)
        break;
    console.log(iterator.value);
}


let itr1=myMap.values()  
while(true){
    let iterator=itr1.next();
    if(iterator.done==true)
        break;
    console.log(iterator.value);
}
// store values from map in array
let valueArray=new Array();
itr1=myMap.values()  
while(true){
    let iterator=itr1.next();
    if(iterator.done==true)
        break;
    valueArray.push(iterator.value);
}
console.log(valueArray);

let salaries:Array<number>=[568990,45000,89000,45000,23000]
// remove duplicates from this array

let mySet=new Set<number>(salaries);
console.log(mySet);

let myArray=new Array<number>(...mySet);
console.log(myArray);

let ar1=[34,23,2];

let ar2=[...ar1];