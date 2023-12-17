// Challenge 2
// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
function speedLimitCheck(speed) {
    var speed = parseInt(prompt("Enter speed: ")); //creates a dialog box that prompts the user to enter a value for speed
    
     if (speed < 0 || typeof speed !== 'number') {
        speed = parseInt(prompt("Invalid input. Please enter a number greater than 0: "));
     } //if the user enters a value less than 0, a dialog box with the text in parentheses is created, prompting the user to enter an acceptable value (a positive number)
 
     let demeritPoints = 0; //setting the initial demerit points 
     let overSpeedLimit = speed - 70; //declaring the overSpeedLimit variable that will be used to calculate the demerit points
 
      //calculate demerit points
     if (speed >= 70) {
        demeritPoints = Math.round(overSpeedLimit / 5);
        alert(`Points: ${demeritPoints}`);
     } else {
        alert("Ok");
     }
     //checking for suspension
     if (demeritPoints > 12) {
        alert("License suspended");
     }
    }
    
    speedLimitCheck(); 
