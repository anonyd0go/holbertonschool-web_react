/**
 * Interface defining the basic employee properties and methods
 * @interface EmployeeInterface
 */
interface EmployeeInterface {
    /** Employee's salary which can be a number or string */
    salary: number | string;
    /** Method to determine if employee can work from home
     * @returns {string} Message indicating work from home status
     */
    workFromHome(): string;
    /** Method to determine coffee break eligibility
     * @returns {string} Message about coffee break status
     */
    getCoffeeBreak(): string;
}

/**
 * Constructor interface for creating Employee instances
 * @interface EmployeeConstructor
 */
export interface EmployeeConstructor {
    /**
     * @param {(number|string)} salary - The employee's salary
     * @returns {EmployeeInterface} An instance implementing EmployeeInterface
     */
    (salary: number | string): EmployeeInterface;
}

/**
 * Interface extending EmployeeInterface with director specific tasks
 * @interface DirectorInterface
 * @extends {EmployeeInterface}
 */
export interface DirectorInterface extends EmployeeInterface{
    /** Method to handle director tasks
     * @returns {string} Message about director tasks
     */
    workDirectorTasks(): string;
}

/**
 * Interface extending EmployeeInterface with teacher specific tasks
 * @interface TeacherInterface
 * @extends {EmployeeInterface}
 */
export interface TeacherInterface extends EmployeeInterface {
    /** Method to handle teacher tasks
     * @returns {string} Message about teacher tasks
     */
    workTeacherTasks(): string;
}
