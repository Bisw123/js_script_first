const accountId = 144553                  //not change const value
let accountEmail = "biswanathb2000@gmail.com"
var accountPassword ="12345"
accountCity = "Bhubaneswar"

//accountId  = 2 // not allowed
accountEmail = "biswanathb2003@gmail.com"
accountPassword = "1234567"
accountCity = "Cuttack"
let accountState;

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])