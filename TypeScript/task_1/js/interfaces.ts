/**
 * @module interfaces
 * This module contains all interfaces for task_1 exercises
 */

/**
 * @interface Teacher
 * @description Represents a teacher with basic information and dynamic properties
 * @property {string} firstName - The teacher's first name (read-only)
 * @property {string} lastName - The teacher's last name (read-only)
 * @property {boolean} fullTimeEmployee - Indicates if the teacher is full-time
 * @property {number} [yearsOfExperience] - Optional years of teaching experience
 * @property {string} location - The teacher's work location
 * @property {unknown} [propName] - Additional dynamic properties
 */
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: unknown;
}

/**
 * @interface Directors
 * @extends {Teacher}
 * @description Represents a director, extending the Teacher interface
 * @property {number} numberOfReports - The number of reports managed by the director
 */
export interface Directors extends Teacher {
    numberOfReports: number;
}

/**
 * @interface printTeacherFunction
 * @description Function type for printing teacher information
 * @param {string} firstName - The teacher's first name
 * @param {string} lastName - The teacher's last name
 * @returns {string} Formatted string representation of the teacher
 */
export interface printTeacherFunction {
    (firstName:string, lastName: string): string;
}

/**
 * @interface studentConstructor
 * @description Constructor interface for creating student instances
 * @param {string} firstName - The student's first name
 * @param {string} lastName - The student's last name
 * @returns {studentClass} A new student instance
 */
export interface studentConstructor {
    new ( firstName: string, lastName:string ): studentClass;
}

/**
 * @interface studentClass
 * @description Represents a student with basic information and methods
 * @property {string} firstName - The student's first name
 * @property {string} lastName - The student's last name
 * @method workOnHomework - Method to indicate homework completion status
 * @method displayName - Method to get the student's first name
 */
export interface studentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
