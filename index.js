#! /usr/bin/env node
import inquirer from "inquirer";
let my_Balance = 50000; // Dollar
let my_Pin_Code = 2244;
let insufficient = 0;
console.log("Welcome To My ATM Machine Project!");
console.log("ATM PIN CODE 2244");
let pin_Answer = await inquirer.prompt([{
        name: "Pin",
        message: "Please Enter your ATM Pin",
        type: "number",
    }]);
if (pin_Answer.Pin === my_Pin_Code) {
    console.log("Your ATM Pin Code Is Correct!");
    let Account = await inquirer.prompt([{
            name: "Account_Type",
            message: "Please Select Account Type",
            type: "list",
            choices: ["Saving Account", "Current Account"]
        }]);
    if (Account.Account_Type === "Saving Account") { }
    if (Account.Account_Type === "Current Account") { }
    let different_options = await inquirer.prompt([{
            name: "ATM_Options",
            message: "Please Select One Option",
            type: "list",
            choices: ["Withdraw", "Balance Inquiry", "Fast Cash"]
        }]);
    if (different_options.ATM_Options === "Withdraw") {
        let amount_withdraw = await inquirer.prompt([{
                name: "Amount",
                message: "Please Enter Your Amount",
                type: "number",
            }]);
        my_Balance -= amount_withdraw.Amount;
        if (my_Balance >= insufficient) {
            console.log(`Your Remaining Account Balance is ${my_Balance} Dollars`);
            console.log("Thank You!");
        }
        if (my_Balance <= insufficient) {
            console.log("Sorry! Insufficient Balance");
        }
    }
    if (different_options.ATM_Options === "Fast Cash") {
        let Fast_amount = await inquirer.prompt([{
                name: "Fast_cash",
                message: "Please Select One Option",
                type: "list",
                choices: [1000, 3000, 5000, 10000, 25000, 100000]
            }]);
        my_Balance -= Fast_amount.Fast_cash;
        if (my_Balance >= insufficient) {
            console.log(`Your Remaining Account Balance is ${my_Balance} Dollars`);
            console.log("Thank You!");
        }
        if (my_Balance <= insufficient) {
            console.log("Sorry! Insufficient Balance");
        }
    }
    else if (different_options.ATM_Options === "Balance Inquiry") {
        console.log(`Your Account Balance is ${my_Balance} Thousand Dollars`);
        console.log("Thank You!");
    }
}
else {
    console.log("Sorry! Please Enter Correct Pin Code");
}
;
