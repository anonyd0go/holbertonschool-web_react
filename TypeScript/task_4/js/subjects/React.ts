/**
 * Namespace containing subject-related interfaces and implementations
 */
namespace Subjects {
    /**
     * Extended Teacher interface for React specific properties
     * @interface Teacher
     * @property {number} [experienceTeachingReact] - Years of experience teaching React
     */
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    /**
     * Class representing the React subject
     * @class React
     * @extends Subject
     */
    export class React extends Subject {
        /**
         * Gets the list of requirements for React
         * @returns {string} The requirements message
         */
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        /**
         * Checks if there's an available teacher for React
         * @returns {string} Message indicating teacher availability
         */
        getAvailableTeacher(): string {
            if (typeof this.teacher.experienceTeachingReact === 'undefined') {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
