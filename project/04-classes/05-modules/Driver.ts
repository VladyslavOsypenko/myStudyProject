import { Customer } from './Customer';
let myCustomer = new Customer("Vladyslav", "asd");

myCustomer.lastName = "Osypenko";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);