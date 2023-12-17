//Challenge 1
//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

// const prompt = require('prompt-sync')();
function calculateGrade() {
    var mark = parseInt(prompt("Enter student marks between 0 and 100:")); //creates a dialog box that prompts the user to enter marks between 0 and 100
   
    while (mark < 0 || mark > 100) {
       mark = parseInt(prompt("Invalid input. Please enter student marks between 0 and 100:"));
    } //if the user enters a value less than 0 or more than 100, a dialog box with the text in parentheses is created, prompting the user to enter an acceptable value (0 to 100)
    if (typeof mark !== 'number'){
      alert('Please enter a valid number');
    }
    let grade; 

   //logic for determining the grade to display
    if (mark >= 80) { 
       grade = "A";
    } else if (mark >= 60) {
       grade = "B";
    } else if (mark >= 50) {
       grade = "C";
    } else if (mark >= 40) {
       grade = "D";
    } else {
       grade = "E";
    }
   
    alert(`Grade: ${grade}`); //creates a dialog box with the grade determined by the user's input
   }
   calculateGrade()