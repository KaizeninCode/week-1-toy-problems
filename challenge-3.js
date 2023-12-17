
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// NB: Use KRA, NHIF, and NSSF values provided in the link below.

// - https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

// Links to an external site.-  Links to an external site.Links to an external site.

// - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

// Getting inputs from user
var basicSalary = parseInt(prompt('Enter your basic salary: '));
if (typeof basicSalary !== 'number' || basicSalary < 0) { //checks if the input is a number or if the input is a negative value. If any of the conditions returns true, the prompt will be triggered
    prompt('Invalid value. Please enter a valid number: ');
    
}
var benefits = parseInt(prompt('Enter your total benefits: '));
if (typeof benefits !== 'number' || benefits < 0) {  //checks if the input is a number or if the input is a negative value. If any of these conditions return true, the prompt will be triggered
    prompt('Invalid value. Please enter a valid number: ')    
} 

//the following three items (life insurance, mortgage and disability exemption certificate) affect the amount of PAYE paid, so it is imperative to get their inputs first to determine the correct amount of PAYE

var lifeInsurance = prompt('Do you have a life insurance policy? (Yes/No): ');
  if (lifeInsurance !== 'Yes' && lifeInsurance !== 'No') { //checks if the input is either Yes or No
    prompt('You must answer Yes or No: ') //triggered if the answer is neither Yes nor No        
} else if (lifeInsurance === 'Yes') { //checks if the input is Yes so that the next block of code can be executed
    var lifeInsAmt = parseInt(prompt("How much is your monthly life insurance premium? "))//gets the user's monthly insurance premium
    if (typeof lifeInsAmt !== 'number' || lifeInsAmt < 0){
        var lifeInsAmt = parseInt(prompt('Invalid value. Enter a valid number: '))
            
    }
    var insRelief = lifeInsAmt * 0.15 //when doing PAYE calculations, those with a life insurance are usually given an Insurance Relief amounting to 15% of the value of their monthly insurance premium and it is deducted from the initial PAYE amount arrived at.        
} else { 
    lifeInsAmt = 0 //executed if the answer is No    
}

//when doing PAYE calculations, those with a mortgage are usually charged differently. Their monthly mortgage remittance is added to their contribution benefit (which is always deducted from your gross salary to get your taxable income), which in turn reduces their taxable income (taxable income is what is used to calculate PAYE)

var mortgage = prompt('Do you have a mortgage? (Yes/No): '); //capture user input
while (mortgage !== 'Yes' && mortgage !== 'No') { //check the validity if user input. The while loop will ensure that the user keeps getting the prompt until they enter an acceptable value
    mortgage = prompt('You must answer Yes or No: ');
}

var mortgageAmt = 0; //initializing the variable
if (mortgage === 'Yes') { //check if the user responded Yes
    var userInput = prompt("How much is your monthly mortgage payment? ");//capture user's monthly mortgage payment
    while (isNaN(userInput) || parseFloat(userInput) < 0) { //a while loop triggered when the user enters an incorrect value that will keep appearing until the user enters an acceptable value
        userInput = prompt('Please enter a valid number: ');
    }
    mortgageAmt = parseFloat(userInput); //converts user input into a floating point decimal
}

//if you happen to have a Disability Exemption Certificate, your PAYE is waived. That would mean that your PAYE amount will be 0 and any of the aforementioned items will be added to your gross salary, making the net salaries for people with this certificate more than their gross salaries (lucky bastards).

//prompts the user to enter whether or not they have the certificate
var disabilityExemptionCert = prompt('Do you have a Disability Exemption Certificate? (Yes/No): '); 
if (disabilityExemptionCert !== 'Yes' && disabilityExemptionCert !== 'No') { //checks if the answer is valid
    prompt ('You must answer Yes or No: '); //triggered in case the answer isn't valid
} else if (disabilityExemptionCert === 'Yes') {
    var PAYE = 0 //sets PAYE to 0 if the answer was Yes
}
function calculateNetSalary(grossSalary, basicSalary, mortgageAmt) {
    function nhifDeduction() {
        let deduction;
        'use strict';
        switch (basicSalary) {
            case basicSalary < 6000:
                deduction = 150
                break
            case basicSalary >= 6000 && basicSalary < 8000:
                deduction = 300
                break
            case basicSalary >= 8000 && basicSalary < 12000:
                deduction = 400
                break
            case basicSalary >= 12000 && basicSalary < 15000:
                deduction = 500
                break
            case basicSalary >= 15000 && basicSalary < 20000:
                deduction = 600
                break
            case basicSalary >= 20000 && basicSalary < 25000:
                deduction = 750
                break
            case basicSalary >= 25000 && basicSalary < 30000:
                deduction = 850
                break
            case basicSalary >= 30000 && basicSalary < 35000:
                deduction = 900
                break
            case basicSalary >= 35000 && basicSalary < 40000:
                deduction = 950
                break
            case basicSalary >= 40000 && basicSalary < 45000:
                deduction = 1000
                break
            case basicSalary >= 45000 && basicSalary < 50000:
                deduction = 1100
                break
            case basicSalary >= 50000 && basicSalary < 60000:
                deduction = 1200
                break
            case basicSalary >= 60000 && basicSalary < 70000:
                deduction = 1300
                break
            case basicSalary >= 70000 && basicSalary < 80000:
                deduction = 1400
                break
            case basicSalary >= 80000 && basicSalary < 90000:
                deduction = 1500
                break
            case basicSalary >= 90000 && basicSalary < 100000:
                deduction = 1600
                break
            default:
                deduction = 1700
        } return nhifDeduction()
    }

    function nssfDeduction() {
        let nssf;
        if (basicSalary < 18000) {
            nssf = 0.06 * basicSalary;
        } else {
            nssf = 1080;
        }
        return nssf;
    }

    function getTaxableIncome() {
        const contributionBenefit = nssfDeduction();
        const totalDeductions = mortgageAmt + contributionBenefit;
        const taxableIncome = grossSalary - totalDeductions;
        return taxableIncome;
    }

    function calcPAYE() {
        const taxableIncome = getTaxableIncome();
        let PAYE;
        if (taxableIncome <= 24000) {
            PAYE = 24000 * 0.1;
        } else if (taxableIncome > 24000 && taxableIncome < 32333) {
            PAYE = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
        } else if (taxableIncome > 24000 && taxableIncome < 500000) {
            PAYE = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.3); 
        } else if (taxableIncome > 24000 && taxableIncome < 800000) {
            PAYE = (24000 * 0.1) + (8333 * 0.25) + ((500000 - 32333) * 0.3) + ((taxableIncome - 500000) * 0.325);
        } else if (taxableIncome > 800000) {
            PAYE = (24000 * 0.1) + (8333 * 0.25) + ((500000 - 32333) * 0.3) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
        }
        return PAYE;
    }

    function calculateNetSalary() {
        const netSalary = grossSalary - (calcPAYE() + nhifDeduction());
        return netSalary;
    }
    
    return calculateNetSalary();
}


