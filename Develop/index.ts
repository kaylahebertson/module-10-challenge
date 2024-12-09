import inquirer from 'inquirer';
import { Db } from './db/index.js';

const db = new Db();

init();

function init() {
    mainPage();
}

function mainPage() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                choices: [
                    'List all employees',
                    'List all departments',
                    'List all roles',
                    'Add employee',
                    'Add department',
                    'Add role',
                    'Update employee role',
                    'Quit'
                ]
            }
        ])
        .then(async answers => {
            switch (answers.action) {
                case 'List all employees':
                    listEmployees();
                    break;
                case 'List all departments':
                    listDepartments();
                    break;
                case 'List all roles':
                    listRoles();
                    break;
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Add department':
                    addDepartment();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'Update employee role':
                    updateEmployeeRole();
                    break;
                case 'Quit':
                    process.exit();
                    break;
            }
        });
}

function listEmployees() {
    db.query('SELECT * FROM employee')
        .then(res => {
            console.table(res.rows);
            mainPage();
        });
}

function listDepartments() {
    db.query('SELECT * FROM department')
        .then(res => {
            console.table(res.rows);
            mainPage();
        });
}

function listRoles() {
    db.query('SELECT * FROM role')
        .then(res => {
            console.table(res.rows);
            mainPage();
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter first name'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter last name'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter role ID'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter manager ID'
            }
        ])
        .then(answers => {
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id])
                .then(() => {
                    console.log('Employee added');
                    mainPage();
                });
        });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter department name'
            }
        ])
        .then(answers => {
            db.query('INSERT INTO department (name) VALUES ($1)', [answers.name])
                .then(() => {
                    console.log('Department added');
                    mainPage();
                });
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter role title'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter role salary'
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter department ID'
            }
        ])
        .then(answers => {
            db.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answers.title, answers.salary, answers.department_id])
                .then(() => {
                    console.log('Role added');
                    mainPage();
                });
        });
}