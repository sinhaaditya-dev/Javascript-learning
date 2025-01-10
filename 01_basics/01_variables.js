const account_id = 12345;
let account_email ="abc@gmail.com";
var account_password="122444";  //use let instead of var//
account_city="Jaipur"; //This is not a good practice to declare a variable without let or var//
let account_state; //Here we are declaring a variable without assigning a value//

// account_id = 2;  we cannot change constant value which we declared account_id;//
// console.log(account_id);
account_email="sinhaaditya.2591@gmail.com";
// console.log(account_email);
account_city="Bengaluru";
console.table([account_id,account_email,account_password,account_city,account_state]);  //here we can print the value of all the variables//
/*
prefer not to use var
 */
