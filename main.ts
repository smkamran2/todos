#! /usr/bin/env node

import inquirer from "inquirer"

let todos = [] ;
let condition = true ;
while(condition) 

{
    let todoQuestions  = await inquirer.prompt([
    {

    name: "firstquestion",
    type: "input",
    message: "What Would you like to add in your todos?",
},
{
    name: 'secondQuestion',
    type: "confirm",
    message: "Would you like to add more in your todos?",
    defult:  "true"

}     
     ]

);

todos.push(todoQuestions.firstquestion);
console.log(todos);
condition = todoQuestions.secondQuestion ;
    }