/**
 * @module main
 * @description Main module implementing the interfaces for teacher and student management
 */

import { Teacher, Directors, studentConstructor } from "./interfaces";
import { printTeacherFunction } from "./interfaces";
import { studentClass } from "./interfaces";

/**
 * @function printTeacher
 * @description Formats teacher's name as first initial followed by full last name
 * @param {string} firstName - Teacher's first name
 * @param {string} lastName - Teacher's last name
 * @returns {string} Formatted string in the pattern "F. LastName"
 */
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

/**
 * @class StudentClass
 * @implements {studentClass}
 * @description Implementation of the studentClass interface
 */
class StudentClass implements studentClass {
    firstName: string;
    lastName: string;

    /**
     * @constructor
     * @param {string} firstName - Student's first name
     * @param {string} lastName - Student's last name
     */
    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * @method workOnHomework
     * @description Indicates the current work status of the student
     * @returns {string} Status message indicating work in progress
     */
    workOnHomework() {
        return 'Currently working';
    }

    /**
     * @method displayName
     * @description Retrieves the student's first name
     * @returns {string} Student's first name
     */
    displayName() {
        return this.firstName;
    }
}

/**
 * @function createClass
 * @description Factory function to create new student instances
 * @param {studentConstructor} ctor - Constructor for creating student instances
 * @param {string} firstName - Student's first name
 * @param {string} lastName - Student's last name
 * @returns {studentClass} New student instance
 */
function createClass(ctor: studentConstructor, firstName: string, lastName: string) {
    return new ctor(firstName, lastName);
}
