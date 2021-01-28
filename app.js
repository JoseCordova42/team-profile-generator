const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questions = [
    {
        type: 'input',
        message: 'Employee name:',
        name: 'name',
    },
    {
        type: 'number',
        message: 'Employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Employee email:',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Employee role:',
        name: 'role',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'officeNumber',
        when: (questions) => {
            if (questions.role === 'Manager') {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'github',
        when: (questions) => {
            if (questions.role === 'Engineer') {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'School attended:',
        name: 'school',
        when: (questions) => {
            if (questions.role === 'Intern') {
                return true;
            }
        }
    },
    {
        type: 'confrim',
        message: 'Would you like to add another employee? (y/n)',
        name: 'another'
    }
];

//------------------------------------------------------Test Code------------------------------------------------------
// async function empQuestions() {
//     return await inquirer
//     .prompt(questions)
//     .then(async answers => {
//         return answers;
//     });
// }

// async function init() {
//     let empArr = [];

//     while (empArr.length === 0 || empArr[empArr.length - 1].another === 'y') {
//         empArr.push(await empQuestions());
//     }

//     console.log(empArr);
// }
//------------------------------------------------------Test Code------------------------------------------------------

let allEmployees = [];

//------------------------------------------------------Test Function------------------------------------------------------
// function addEmployees() {
//     if (answers.role === "Manager") {
//         const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         allEmployees.push(newManager);
//     } else if (answers.role === "Engineer") {
//         const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
//         allEmployees.push(newEngineer);
//     } else if (answers.role === "Intern") {
//         const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
//         allEmployees.push(newIntern);
//     }
// }
//------------------------------------------------------Test Function------------------------------------------------------


function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            if (answers.another === 'y') {
                // allEmployees.push(answers);
                if (answers.role === "Manager") {
                    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    allEmployees.push(newManager);
                } else if (answers.role === "Engineer") {
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    allEmployees.push(newEngineer);
                } else if (answers.role === "Intern") {
                    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    allEmployees.push(newIntern);
                }
                console.log(allEmployees);
                init();
            } else {
                // allEmployees.push(answers);
                if (answers.role === "Manager") {
                    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    allEmployees.push(newManager);
                } else if (answers.role === "Engineer") {
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    allEmployees.push(newEngineer);
                } else if (answers.role === "Intern") {
                    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    allEmployees.push(newIntern);
                }
                console.log(allEmployees);
            }
        });
}

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
