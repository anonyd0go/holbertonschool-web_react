/**
 * Namespace containing subject-related interfaces and implementations
 */
namespace Subjects {
    /**
     * Extended Teacher interface for C++ specific properties
     * @interface Teacher
     * @property {number} [experienceTeachingC] - Years of experience teaching C++
     */
    export interface Teacher {
        experienceTeachingC?: number;
    }

    /**
     * Class representing the C++ subject
     * @class Cpp
     * @extends Subject
     */
    export class Cpp extends Subject {
        /**
         * Gets the list of requirements for C++
         * @returns {string} The requirements message
         */
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        /**
         * Checks if there's an available teacher for C++
         * @returns {string} Message indicating teacher availability
         */
        getAvailableTeacher(): string {
            if (typeof this.teacher.experienceTeachingC === 'undefined') {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
