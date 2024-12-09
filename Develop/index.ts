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