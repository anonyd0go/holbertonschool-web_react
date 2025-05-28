/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

let row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

/* Don't know if I need this line but was in task
 * Instructions */
CRUD.deleteRow(125);
