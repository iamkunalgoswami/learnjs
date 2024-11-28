const accountID = 12345;
let accountEmail = "poo@gmail.com";
var accountCity = "London";
accountPassword = "poo@1234";
let accountState;

/**
 * Never use var keyword
 * Because of issues with Block Scope and Functional Scope
 */

// accountID = 54321; Not Alllowed -- TypeError: Assignment to constant variable.
console.log(accountID);

accountCity = "Paris";

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
