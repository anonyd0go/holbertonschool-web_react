/**
 * Namespace containing subject-related interfaces and implementations
 */
namespace Subjects {
    /**
     * Extended Teacher interface for Java specific properties
     * @interface Teacher
     * @property {number} [experienceTeachingJava] - Years of experience teaching Java
     */
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    /**
     * Class representing the Java subject
     * @class Java
     * @extends Subject
     */
    export class Java extends Subject{
        /**
         * Gets the list of requirements for Java
         * @returns {string} The requirements message
         */
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        /**
         * Checks if there's an available teacher for Java
         * @returns {string} Message indicating teacher availability
         */
        getAvailableTeacher(): string {
            if (typeof this.teacher.experienceTeachingJava === 'undefined') {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
