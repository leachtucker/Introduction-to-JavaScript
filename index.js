/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
if (votingAge => 18) {
    // Changed the conditional statement to reflect that the voting age (USA) is 18 *and older*
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let capacity = 'Under capacity';
let occupancy = 10;

if (occupancy > 25) {
    capacity = 'Over capacity';
}

console.log(capacity);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let num1 = Number("1999");
console.log(num1);



//Task d: Write a function to multiply a*b 
function multiplyFunc(a, b) {
    return a * b;
}

console.log(multiplyFunc(2, 5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function convertToDogYears(humanAge) {
    return humanAge / 7;
}

console.log(convertToDogYears(20));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

function dogFeeder(weight, age) {
    let ageMonths = age * 12; // Age is in years, so we will quickly convert that to months to compare more easily and make our code more readible
    let rawFood = null;

    if (ageMonths < 12) {
        // Dog is a puppy
        if (ageMonths < 4 && ageMonths >= 2) {
            rawFood = 0.1 * weight;
        } else if (ageMonths <= 4) {
            rawFood = 0.05 * weight;
        } else if (ageMonths <= 7) {
            rawFood = 0.04 * weight;
        }
    } else {
        // Dog is an adult
        if (weight <= 5) {
            rawFood = 0.05 * weight;
        } else if (weight <= 10) {
            rawFood = 0.04 * weight;
        } else if (weight <= 15) {
            rawFood = 0.03 * weight;
        } else if (weight > 15) {
            rawFood = 0.02 * weight;
        }
    }

    return rawFood;
}


// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
console.log(dogFeeder(15, 1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockPaperScissors(userTool) {

    let userToolLC = userTool.toLowerCase(); // Converts the user's input to lowercase
    let gameMessage = null

    // Verifying user has chosen a valid tool (rock, paper, or scissors)
    if (userToolLC === 'scissors' || userToolLC === 'rock' || userToolLC === 'paper') {
        let opponetTool = null;
        let randomNum = Math.floor(Math.random() * 3); // Generates a random integer 0-2 (inclusive)

        // Picking a tool depending on the random number generated

        if (randomNum === 0) {
            opponetTool = 'scissors';
        } else if (randomNum === 1) {
            opponetTool = 'rock';
        } else if (randomNum === 2) {
            opponetTool = 'paper';
        } else {
            gameMessage = "An error has occured";
        }

        // Game logic
        if (opponetTool === 'scissors') {
            if (userToolLC === 'rock') {
                gameMessage = "You won! Opponent's tool: " + opponetTool;
            } else if (userToolLC === 'scissors') {
                gameMessage = "Tie!"
            } else {
                gameMessage = "You lost. Opponenet's tool: " + opponetTool;
            }
        } else if (opponetTool === 'rock') {
            if (userToolLC === 'paper') {
                gameMessage = "You won! Opponent's tool: " + opponetTool;
            } else if (userToolLC === 'rock') {
                gameMessage = "Tie!"
            } else {
                gameMessage = "You lost. Opponenet's tool: " + opponetTool;
            }
        } else if (opponetTool === 'paper') {
            if (userToolLC === 'scissors') {
                gameMessage = "You won! Opponent's tool: " + opponetTool;
            } else if (userToolLC === 'paper') {
                gameMessage = "Tie!"
            } else {
                gameMessage = "You lost. Opponenet's tool: " + opponetTool;
            }
        } else {
            gameMessage = "An error has occured";
        }

    } else {
        // User did not chose from the valid options (rock, paper, or scissors)
        gameMessage = "Please choose from rock, paper, or scissors.";
    }

    return gameMessage;

}

console.log(rockPaperScissors('rock'));


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kilometersToMiles(kilometers) {
    return kilometers * 0.621371;
}

console.log(kilometersToMiles(293));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCentimeters(feet) {
    return feet * 30.48;
}

console.log(feetToCentimeters(20));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(startingNum) {
    for (i = startingNum; i >= 1; i--) {
        console.log(i + " bottles of soda on the wall. " + i + " bottles of soda. Take one down, pass it around. ");
    }
}

annoyingSong(103);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grade(percent) {
    if (percent >= 90) {
        return 'A';
    } else if (percent >= 80) {
        return 'B';
    } else if (percent >= 70) {
        return 'C';
    } else if (percent >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(grade(94));



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object