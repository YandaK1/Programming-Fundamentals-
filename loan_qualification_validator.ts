//We are checking if a person is qualified for a loan. The data types used are string, number and boolean.
let applicantName: string = 'Yanda Kiviet';
let applicantAge: number = 23;
let applicantIncome: number = 4100; //In Rands
let creditScore: number = 680;
let hasExistingDebt: boolean = false;

//Loan qualification criteria
let minimumAge: number = 18;
let minimumIncome: number = 3000; //In Rands
let minimumCreditScore: number = 600;



console.log('Loan Qualification Check for: ' + applicantName);
console.log( 'Applicant Age: ' + applicantAge);
console.log( 'Applicant Income: R' + applicantIncome);
console.log( 'Applicant Credit Score: ' + creditScore);
console.log( 'Applicant Has Existing Debt: ' + hasExistingDebt);

if (applicantAge < minimumAge) 
{console.log('Result: Not qualified - Applicant is underage.');}

if (applicantAge >= minimumAge) 
{console.log('Result: Qualified - Applicant meets the age requirement.');}

if (applicantIncome < minimumIncome)
{console.log('Result: Not qualified - Applicant does not meet the income requirement.');}

if (applicantIncome >= minimumIncome)
{console.log('result: Qualified - Applicant meets the income requirement.');}

if (creditScore < minimumCreditScore)
console.log('Result: Not qualified - Allicant does not meet the credit score requirement.');

if (creditScore >= minimumCreditScore)
console.log('Result: Qualified - Applicant meets the credit score requirement.');

if (hasExistingDebt)
{console.log('Result: Not qualified - Applicant has existing debt.');}  

if (!hasExistingDebt)
{console.log('Result: Qualified - Applicant does not have existing debt.');};

