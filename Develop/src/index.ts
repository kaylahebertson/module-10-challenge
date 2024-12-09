import { pool } from './connection.js';

export default class Db {
    constructor() {}
    async query(sql: string, args: any[] = []) {
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        } finally {
            client.release();
        }
    }
}

findAllRoles () {
    return this.query('SELECT * FROM role');
}

findAllDepartments () {
    return this.query('SELECT * FROM department');
}

findAllEmployees () {
    return this.query('SELECT * FROM employee');
}

createRole (role: any) {
    return this.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [role.title, role.salary, role.department_id]);
}

createDepartment (department: any) {
    return this.query('INSERT INTO department (name) VALUES ($1)', [department.name]);
}

createEmployee (employee: any) {
    return this.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
}

updateEmployeeRole (employeeId: number, roleId: number) {
    return this.query('UPDATE employee SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
}

