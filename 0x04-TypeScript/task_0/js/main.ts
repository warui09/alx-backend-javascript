export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Weak',
  age: 22,
  location: 'Wakanda',
};

const student2: Student = {
  firstName: 'Hairy',
  lastName: 'Potter',
  age: 25,
  location: 'Hogwarts',
};

const studentsList: Array<Student> = [student1, student2];

export function renderTable(students: Array<Student>): void {
  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const columns = ['firstName', 'location'];

  columns.forEach(column => {
    const th = document.createElement('th');
    th.textContent = column.charAt(0).toUpperCase() + column.slice(1);
    headerRow.appendChild(th);
  });

  tHead.appendChild(headerRow);
  table.appendChild(tHead);

  const tBody = document.createElement('tbody');
  students.forEach(student => {
    const row = document.createElement('tr');
    columns.forEach(column => {
      const td = document.createElement('td');
      td.textContent = student[column].toString();
      row.appendChild(td);
    });
    tBody.appendChild(row);
  });

  table.appendChild(tBody);
  document.body.appendChild(table);
}

renderTable(studentsList);
