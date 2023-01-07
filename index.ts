#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const name = `Words Calculator`;
const description = `This application tells number of words and characters of a paragraph`;
console.log(chalk.bgCyan.red.underline(name));
console.log(` `);
console.log(chalk.bgCyan.blue(description));
console.log(` `);

async function input() {
    console.log(` `);
    const paragraph = await inquirer
    .prompt([
     {
       type: `input`,
       name: `par`,
       message: `Enter your paragraph here`,
     },
   ])
   .then((ans) => {
     wordsChecker(ans.par);
   });
     
}

async function wordsChecker(p: string) {
  let message1: string;
  let words = p.split(` `);
  if (words.join(``) == ``) {
    words.length = 0;
    message1 = `Paragraph contains ${words.length} words`;
  } else {
    message1 = `Paragraph contains ${words.length} words`;
  }

  await charsChecker(p, message1);
} //this function converts paragraph into an array of words on spacing and then stores array's length which is same as the number of words in the paragraph in the message1
//The above functions also calls the function charsChecker with p(paragraph) and message1 parameters

async function charsChecker(p: string, message1: string) {
  let message2: string;
  const chars = p.split(``);
  const charsWithoutSpace = chars.filter(
    (char) => char !== ` ` && char !== `  ` && char !== `  `
  );
  message2 = `and ${charsWithoutSpace.length} characters`;
  const message = message1 + " " + message2;
  console.log(` `);
  console.log(chalk.bgCyan.red.underline(message));
} //this functions converts paragraph into an array of characters with spaces.Later it removes spaces from that array.
//Then the above function assign characters array without white spacing to message2.Finally it combines message1 from the given parameter with message 2 in the message and displays it.

async function startAgain() {
  do {await input()
    console.log(` `);
    var again = await inquirer.prompt({
      type: "input",
      name: `restart`,
      message: chalk.red.bold(`press y or yes to to again enter a paragraph`),
    });
  } while (again.restart == "y" || again.restart == "yes");
} //this function calls function input everytime on typing y or yes. 

startAgain();
