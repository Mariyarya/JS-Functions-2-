// Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
const getUserChoise = (userInput) => {
    userInput = userInput.toLowerCase(); // toLowerCase() function to make the userInput all lowercase.

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { //if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'.
        return userInput; // If it does, then return the userInput.
    } else {
        console.log('Error!') // If not, use console.log to print an error message to the console.
    }
};

console.log(getUserChoise('blabla')); //Test the function by calling it with valid and invalid input, and printing the results to the console. 

//-------------------------------------------------------------------------------------------------------

const getComputerChoice = () => { //Create a new function named getComputerChoice with no parameters
    const randomNumber = Math.floor(Math.random() * 3); //am creat var noua cu numele randomNumber care o sa calculeze randomNumber de la 0 la 3 si o integram in Math.floor() returnează cel mai mare întreg mai mic sau egal cu un număr dat.

    switch (randomNumber) { //switch o sa accepte randomNumber creat de functia randomNumber
        case 0: // in caz ca randomNumber e 0 asta inseamna rock
            return 'rock'
            break;
        case 1:
            return 'paper'; // in caz ca randomNumber e 1 asta inseamna paper
            break;
        case 2:
            return 'cissors'; // in caz ca randomNumber e 2 asta inseamna cissors
            break;
        default:
            return 'error';

    }
};
//test
console.log(getComputerChoice()); //in consola chemam functia getComputerChoice/ de fiecare data cand apas ctrl + S in consola arata rezultat diferit

//-----------------------------------------------------------------------------------------------------------------------

const determineWinner = (userChoise, computerChoice) =>  //Create a function named determineWinner that takes two parameters named userChoice and computerChoice. 
{
    if (userChoise === computerChoice) //creem if ca sa le comparam
    {
        return 'game is tied (equality)';
    }

    if (userChoise === 'rock') // Begin by writing an if statement that checks if the userChoice is 'rock'. 
    {
        // The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won.
        if (computerChoice === 'paper')  //si daca este rock atunci o sa verificam daca computerChoice e paper
        {
            return 'computer won!' //daca da o sa returnam calc a castigat!
        } else {
            console.log('the user won!') // If not, return a message that the user won.
        }

    }


    // Next, write another if statement for if the userChoice is 'paper'. Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.
    if (userChoise === 'paper') // Begin by writing an if statement that checks if the userChoice is 'paper'. 
    {
        // The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won.
        if (computerChoice === 'scissors')  //si daca este paper atunci o sa verificam daca computerChoice e scissors
        {
            return 'computer won!' //daca da o sa returnam calc a castigat!
        } else {
            console.log('the user won!') // If not, return a message that the user won.
        }

    }

    // Next, write yet another if statement for if the userChoice is 'scissors'. Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.
    if (userChoise === 'scissors') // Begin by writing an if statement that checks if the userChoice is 'scissors'. 
    {
        // The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won.
        if (computerChoice === 'rock')  //si daca este rock atunci o sa verificam daca computerChoice e rock
        {
            return 'computer won!' //daca da o sa returnam calc a castigat!
        } else {
            console.log('the user won!') // If not, return a message that the user won.
        }

    }
};

//test
console.log(determineWinner('paper', 'scissors')); //in consola chemam functia si ii dam anume parametrii diferiti
console.log(determineWinner('scissors', 'scissors'));

//-----------------------------------------------------------------------------------------
// Now you need to start the game and log the results. 
//Create a function named playGame. Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument. Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice(). Under both of these variables, use console.log to print them to the console.

const playGame = () => { ///Create a function named playGame
    const userChoice = getUserChoise('rock'); //Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument. 
    const computerChoice = getComputerChoice(); //Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice()

    console.log(`your choice is: ${userChoice}`);
    console.log(`computer choicce is:  ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice)); //inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters.

};

playGame(); // Then, to start the game, call the playGame() function on the last line of your program, de fiecare data rsp se schimba 
//----------------------------
// Inside the playGame() function, call the determineWinner() function.
// Pass in the userChoice and computerChoice variables as its parameters.
//  Make sure to put this function call inside of a console.log() statement so you can see the result. Then, to start the game, call the playGame() function on the last line of your program.
//line 101



