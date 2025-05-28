import { DirectorInterface, TeacherInterface } from "./interfaces";
import { EmployeeConstructor, EmployeeInterface } from "./interfaces";
import { Subjects } from "./interfaces";

/**
 * Director class implementing DirectorInterface
 * @class Director
 * @implements {DirectorInterface}
 */
class Director implements DirectorInterface {
    /** Director's salary which can be a number or string */
    salary: number | string;

    /**
     * Creates an instance of Director
     * @param {(number|string)} salary - The director's salary
     */
    constructor(salary: number | string) {
        this.salary = salary;
    }

    /**
     * Determines if director can work from home
     * @returns {string} Message indicating work from home status
     */
    workFromHome() {
        return 'Working from home';
    }

    /**
     * Determines coffee break eligibility
     * @returns {string} Message about coffee break status
     */
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    /**
     * Handles director tasks
     * @returns {string} Message about director tasks
     */
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

/**
 * Teacher class implementing TeacherInterface
 * @class Teacher
 * @implements {TeacherInterface}
 */
class Teacher implements TeacherInterface {
    /** Teacher's salary which can be a number or string */
    salary: number | string;

    /**
     * Creates an instance of Teacher
     * @param {(number|string)} salary - The teacher's salary
     */
    constructor(salary: number | string) {
        this.salary = salary;
    }

    /**
     * Determines if teacher can work from home
     * @returns {string} Message indicating work from home status
     */
    workFromHome() {
        return 'Cannot work from home';
    }

    /**
     * Determines coffee break eligibility
     * @returns {string} Message about coffee break status
     */
    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    /**
     * Handles teacher tasks
     * @returns {string} Message about teacher tasks
     */
    workTeacherTasks() {
        return 'Getting to work';
    }
}

/**
 * Factory function to create either a Teacher or Director based on salary
 * @type {EmployeeConstructor}
 * @param {(number|string)} salary - The employee's salary
 * @returns {(Director|Teacher)} An instance of either Director or Teacher
 */
const createEmployee: EmployeeConstructor = (salary: number | string): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher(salary);
    }
    return new Director(salary);
}

/**
 * Type guard to determine if an employee is a Director
 * @param {EmployeeInterface} employee - The employee to check
 * @returns {boolean} True if employee is a Director, false otherwise
 */
function isDirector(employee: EmployeeInterface): employee is Director {
    return (typeof employee.salary === 'number' && employee.salary >= 500);
}

/**
 * Executes work based on employee type
 * @param {(Director|Teacher)} employee - The employee to execute work for
 * @returns {void}
 */
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
        employee.workTeacherTasks()
    }
}

/**
 * Returns a message based on the subject being taught
 * @param {Subjects} todayClass - The subject to teach
 * @returns {string} Message indicating what subject is being taught
 */
function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math';
        case 'History':
            return 'Teaching History';
    }
}
