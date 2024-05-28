#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.log(chalk.yellowBright("\n\t ~Number Guessing Game~ \t\n"));
console.log(chalk.yellowBright.bold("\n\t ...Try your luck... \t\n"));
while (condition) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const answers = await inquirer.prompt([
        {
            name: 'userGuessedNumber',
            type: 'number',
            message: chalk.yellowBright('\n Please guess a number between 1-10:'),
        },
    ]);
    if (randomNumber === answers.userGuessedNumber) {
        console.log(chalk.green.italic('\n\t Congratulations! You guessed right number '));
    }
    else if (isNaN(answers.userGuessedNumber)) {
        console.log(chalk.red('\n\t Please guess any number...'));
    }
    else {
        console.log(chalk.red('\n\t Oops! You guessed wrong number'));
        console.log(chalk.yellowBright.bold("\n\t Please Try Another Number! \t\n"));
    }
    ;
    //console.log(randomNumber);
    let condition2 = await inquirer.prompt({
        name: 'continue',
        type: 'confirm',
        message: chalk.yellowBright('\n Do you want to continue?'),
        default: 'false',
    });
    condition = condition2.continue;
}
console.log(chalk.yellowBright.italic("\n\t Thanks for playing! \t\n "));
