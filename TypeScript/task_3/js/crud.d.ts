import { RowElement, RowID } from "./interface";

/**
 * Inserts a new row into the table
 * @param {RowElement} row - The row element to insert
 * @returns {RowID} The id of the newly inserted row
 */
export declare function insertRow(row: RowElement): RowID;

/**
 * Deletes a row from the table
 * @param {RowID} rowId - The id of the row to delete
 * @returns {void}
 */
export declare function deleteRow(rowId: RowID): void;

/**
 * Updates an existing row in the table
 * @param {RowID} rowId - The id of the row to update
 * @param {RowElement} row - The new row data
 * @returns {RowID} The id of the updated row
 */
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
