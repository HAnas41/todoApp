import inquirer from "inquirer"

let todos = []
let condition = true;

while(condition)
{
    let todoQuestions = await inquirer.prompt(
    [
    {
        name: "firstQuestion",
        type: "input",
        message: "What would you like to add in your todo app?"
    },
    {
        name: 'secondQuestion',
        type: 'confirm',
        message: 'What would you like to add more in todo app?',
        default: true
    }
]
);
todos.push(todoQuestions.firstQuestion)
console.log(todos)
condition = todoQuestions.firstQuestion
}