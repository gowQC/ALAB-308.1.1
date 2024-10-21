/**************************PART 1: MATH PROBLEMS**************************/
const n1 = 12;
const n2 = 22;
const n3 = 13;
const n4 = 3;

//results in true if all add to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log("Is the sum equal to 50?: " + isSum50);

//results in true if two or more are odd
const isTwoOdd = (n1%2 + n2%2 + n3%2 + n4%2) >= 2;
console.log("Are there at least two odd numbers?: " + isTwoOdd);

//results in true if all numbers are less than or equal to 25
const isOver25 = (n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);
console.log("Are all numbers less than or equal to 25?: " + isOver25);

//results in true if all numbers are unique
const isUnique = (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
console.log("Are all numbers unique?: " + isUnique)

//results in true if all other results are true
const isValid = (isSum50 === true && isTwoOdd === true && isOver25 === true && isUnique === true);
console.log("Are all conditions met?: " + isValid);

//bullet point solutions

//results in true if all nums are divisible by 5
const DIV_BY_FIVE = (n1%5 == 0 && n2%5 == 0 && n3%5 == 0 && n4%5 == 0);
console.log("Is every number divisible by 5?: " + DIV_BY_FIVE);

//results in true if the first number is greater than the last
const FIRST_GREATER_THAN_LAST = (n1 > n4);
console.log("Is the first number greater than the last?: " + FIRST_GREATER_THAN_LAST);

//given our nums, should result in -1
const ARITHMETIC_ANSWER = ((n1 - n2) * n3)%n4;
console.log("Our arithmetic answer is: " + ARITHMETIC_ANSWER);

/**************************PART 2: PRACTICAL MATH**************************/
const DISTANCE = 1500;
const PER_HOUR_55 = 30;
const PER_HOUR_60 = 28;
const PER_HOUR_75 = 23;
const BUDGET = 175;
const AVERAGE_FUEL_COST_PER_GALLON = 3;

//truth data
const PER_HOUR_55_TRUTH = BUDGET > (DISTANCE/PER_HOUR_55)*AVERAGE_FUEL_COST_PER_GALLON;
const PER_HOUR_60_TRUTH = BUDGET > (DISTANCE/PER_HOUR_60)*AVERAGE_FUEL_COST_PER_GALLON;
const PER_HOUR_75_TRUTH = BUDGET > (DISTANCE/PER_HOUR_75)*AVERAGE_FUEL_COST_PER_GALLON;

console.log("===55 MPH===");
console.log("At 55 MPH, you would need about " + DISTANCE/PER_HOUR_55 + " gallons for the entire trip.");
console.log("With an estimated price of $" + (DISTANCE/PER_HOUR_55)*AVERAGE_FUEL_COST_PER_GALLON + " for gas, will you be under budget?: " + PER_HOUR_55_TRUTH);
console.log("The trip will take an estimated " + DISTANCE/55 + " hours.");

console.log("===60 MPH===");
console.log("At 60 MPH, you would need about " + DISTANCE/PER_HOUR_60 + " gallons for the entire trip.");
console.log("With an estimated price of $" + (DISTANCE/PER_HOUR_60)*AVERAGE_FUEL_COST_PER_GALLON + " for gas, will you be under budget?: " + PER_HOUR_60_TRUTH);
console.log("The trip will take an estimated " + DISTANCE/60 + " hours.");

console.log("===75 MPH===");
console.log("At 75 MPH, you would need about " + DISTANCE/PER_HOUR_75 + " gallons for the entire trip.");
console.log("With an estimated price of $" + (DISTANCE/PER_HOUR_75)*AVERAGE_FUEL_COST_PER_GALLON + " for gas, will you be under budget?: " + PER_HOUR_75_TRUTH);
console.log("The trip will take an estimated " + DISTANCE/75 + " hours.");
