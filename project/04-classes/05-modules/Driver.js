"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Vladyslav", "asd");
myCustomer.lastName = "Osypenko";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
