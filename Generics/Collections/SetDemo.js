// unique collection
// non-indexed collection
let employeeIds = new Set();
employeeIds.add("NEO123");
employeeIds.add("NEO121");
employeeIds.add("NEO323");
employeeIds.add("NEO124");
employeeIds.add("NEO324");
employeeIds.add("NEO123");
employeeIds.add("NEO323");
console.log(employeeIds);
console.log(employeeIds.has("NEO124"));
let itr1 = employeeIds.values();
while (true) {
    let iterator = itr1.next();
    if (iterator.done == true)
        break;
    console.log(iterator.value);
}
console.log("----------------");
employeeIds.forEach((emp) => console.log(emp));
console.log("----------------");
itr1 = employeeIds.keys(); // set is collection of values so for set values(), and keys() wor same
while (true) {
    let iterator = itr1.next();
    if (iterator.done == true)
        break;
    console.log(iterator.value);
}
console.log("----------------");
let itr2 = employeeIds.entries(); // set is collection of values so for set values(), and keys() wor same
while (true) {
    let iterator = itr2.next();
    if (iterator.done == true)
        break;
    console.log(iterator.value);
}
