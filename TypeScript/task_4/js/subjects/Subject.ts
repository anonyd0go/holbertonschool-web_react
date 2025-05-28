/**
 * Namespace containing subject-related interfaces and implementations
 */
namespace Subjects {
    /**
     * Base class representing a generic subject
     * @class Subject
     */
    export class Subject {
        /**
         * The teacher assigned to this subject
         * @type {Teacher}
         */
        teacher!: Teacher;

        /**
         * Sets the teacher for this subject
         * @param {Teacher} teacher - The teacher to assign to this subject
         */
        set setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
