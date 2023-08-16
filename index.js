const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) { 
 const newEmployee = {...employee}
 newEmployee[key]= value
return newEmployee; 
}
function  destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployeeOne = {...employee}
    delete newEmployeeOne[key];
    return newEmployeeOne;
    }

