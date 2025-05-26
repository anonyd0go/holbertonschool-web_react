// Interface of a Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Declare two students
const student1: Student = {
  firstName: 'Marco',
  lastName: 'Bellinni',
  age: 23,
  location: "Uruguay"
};
const student2: Student = {
  firstName: 'Lara',
  lastName: 'Fernandez',
  age: 27,
  location: "Puerto Rico"
};


// Create array of Students
const studentsList: Array<Student> = [
  student1,
  student2,
];

// Create a table element
const table: HTMLTableElement = document.createElement('table');
// Create table headders
table.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
// For every student create a row in table
for (let student of studentsList) {
  const tr: HTMLTableRowElement = document.createElement('tr');
  tr.innerHTML = `
  <td>${student.firstName}</td>
  <td>${student.location}</td>
  `;
  table.appendChild(tr);
}

document.body.appendChild(table);
