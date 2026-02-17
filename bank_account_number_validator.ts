//This file validates the number of digits in a bank account number. The data type being used is a string.
let bankAccountNumber: string = "5114789632";

//Check if the bank account number is 10 digits long
if (bankAccountNumber.length === 10) 
    {console.log("The bank account number is valid.");} 
else 
    {console.log("The bank account number is invalid.");}
