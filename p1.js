console.log("hello");
let names =['arshan','sara','rahul']
for(element of names){
    console.log("element is " + names + " in modern js" )
}
let employee={
    name:'arshan',
    age:19,
    id:27875,    
}
//to print structure
for(keys in employee){
    // console.log("value of " + keys + " is " + employee[keys])
    console.log(`value of ${keys} is ${employee[keys]}`)
}