/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

// Create new RowElement Interface object
let row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
// Get row id for new row element
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row element
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};

// Update existing row
CRUD.updateRow(newRowID, updatedRow);

/* Don't know if I need this line but was in task
 * Instructions */
CRUD.deleteRow(125);
