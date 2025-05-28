/**
 * Type alias representing a unique identifier for a row
 * @typedef {number} RowId
 */
export type RowId = number;

/**
 * Interface representing a row element with personal information
 * @interface RowElement
 * @property {string} firstName - The first name of the person
 * @property {string} lastName - The last name of the person
 * @property {number} [age] - The age of the person (optional)
 */
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}
