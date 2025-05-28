import { RowElement, RowId } from "./interface";

/**
 * Inserts a new row into the table
 * @param {RowElement} row - The row element to insert
 * @returns {RowId} The id of the newly inserted row
 */
export declare function insertRow(row: RowElement): RowId;

/**
 * Deletes a row from the table
 * @param {RowId} rowId - The id of the row to delete
 * @returns {void}
 */
export declare function deleteRow(rowId: RowId): void;

/**
 * Updates an existing row in the table
 * @param {RowId} rowId - The id of the row to update
 * @param {RowElement} row - The new row data
 * @returns {RowId} The id of the updated row
 */
export declare function updateRow(rowId: RowId, row: RowElement): RowId;
