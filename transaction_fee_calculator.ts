//We are calulating the transaction fee for a given transaction amount and fee percentage. The data type being used is a number.
let transactionAmount: number = 5000; //In Rands
let feePercentage: number = 4.5; //In Percentage

//calculating the transaction fee
let Fee: number = (transactionAmount * feePercentage) / 100;
let totalAmount: number = transactionAmount + Fee;

//Output the results
console.log('The transaction amount: R' + transactionAmount);
console.log('The fee for the transaction: R' + Fee);
console.log('The total amount to be charged: R' + totalAmount);
