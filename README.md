# week-1-toy-problems
## Challenge 1
This challenge required a function that prompts the user to input student marks. The input should be between 0 and 100 and the output should correspond the correct grade as follows: A > 79, B 60-69, C 59-49, D 40-49, E - less than 40.
First, I created a function that would carry out the computation and return the correct grade. Inside the function, I initialized a variable **mark** which would be assigned to the input the user will enter in response to the prompt. The value of the variable would be converted to an integer using the .parseInt() method.
Then, I added a while loop to repeatedly return a prompt to enter the correct value everytime the user entered an invalid input.
Next came the logic to check where the user's input falls. 
Once a grade has been decided upon, the program issues an alert to the user displaying the grade their input corresponds to.

## Challenge 2
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
First, I created a function that would carry out the computation. The function would take in a variable, speed, as an argument. The user would be prompted to enter a value for speed. Then, the user input would be conerted into an integer in preparation for the next step in the computation. An if statement would validate the user input before computation proceeds.
A variable, demeritPoints, is then declared to store the number of points that would be added to the driver's license in case they are in contravention of the speed limit. A new variable, overSpeedLimit, is declared after that. This new variable will be used to calculate the demerit points.
An if statement is then used to calculate the number of points to be added to the driver's license if they are in contravention of the speed limit. 1 point is added for every 5km/hr that the driver was above the speed limit. The Math.round() method was used to round off the result of the **overSpeedLimit / 5** expression. The result of the expression is logged in a dialog box. If the driver wasn't above the speed limit (ie the expression returns a value less than 0) the program issues an alert that says, 'Ok'.
The program then checks if the driver's licence has passed the suspension threshold (12) by checking the number of demerit points awarded to the driver's licence.

## Challenge 3
The objective of this challenge was to write a prgram that calculated Gross Salary, PAYE, NSSF deductions, NHIF deductions and net salary by first getting user inputs on basic salary and benefits.
All PAYE, NHIF and NSSF rate values were derived from official sites linked in the code file's comments.
The first step was getting user input in both basic salary and benefits variables. The two variables have similar logic to validate the user's input.
Before getting to calculating PAYE, there are three important pieces of information that when captured will alter the amount of PAYE tax you pay.
The first is assigned to the variable lifeInsurance. As the name suggests, it gets user input regarding any life insurance covers they might have taken. If they have one, the next step is to get the monthly premium they pay. This monthly premium will be used to calculate an **insurance relief** which they will bw awarded after the initial PAYE calculations have been done.
The second item is assigned to the variable **mortgage**. If the user has a mortgage, the monthly mortgage payment they make is recorded (and later deducted from their gross salary, effectively reducing the amount of PAYE they would pay). 
The third item is a **Disability Exemption Certificate**. With this certificate comes a blessing of sorts; your PAYE (however much it might have been) is **completely waived**. This certificate also means that whatever deductions are made on a person without this certificate, are added to your gross salary instead. Pretty sweet, if you ask me.
And now to the meat and potatoes of the program; calculating the net salary. 
A function is created to handle that task. The function takes gross salary, basic salary and mortgage amount as arguments and uses them to calculate NHIF, NSSF and requisite PAYE values. Within the function is also another function to calculate taxable income (which is used to calculate PAYE).
The last thing in the function is to calculate net salary (using a function, of course). The function performs the calculation and returns the net salary.