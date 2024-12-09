-- Connect to the database
\c employees

-- Insert departments into the department table
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Product'),
    ('Human Resources'),
    ('Marketing');

-- Insert roles into the role table
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 110000, 1),
    ('Salesperson', 85000, 1),
    ('Lead Engineer', 160000, 2),
    ('Software Engineer', 130000, 2),
    ('Product Manager', 145000, 3),
    ('Product Designer', 120000, 3),
    ('HR Manager', 120000, 4),
    ('HR Coordinator', 90000, 4),
    ('Marketing Director', 150000, 5),
    ('Marketing Specialist', 95000, 5);

-- Insert employees into the employee table
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jane', 'Smith', 1, NULL),    -- Sales Lead
    ('Ethan', 'Carter', 2, 1),     -- Salesperson
    ('Lucas', 'Williams', 3, NULL),    -- Lead Engineer
    ('Sophia', 'Johnson', 4, 3),      -- Software Engineer
    ('Olivia', 'Miller', 5, NULL),    -- Product Manager
    ('Ava', 'Davis', 6, 5),      -- Product Designer
    ('Emily', 'Taylor', 7, NULL),     -- HR Manager
    ('Grace', 'Anderson', 8, 7),    -- HR Coordinator
    ('Benjamin', 'Martin', 9, NULL),    -- Marketing Director
    ('Liam', 'Garcia', 10, 9);   -- Marketing Specialist
