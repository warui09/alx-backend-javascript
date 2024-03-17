"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
var student1 = {
    firstName: 'John',
    lastName: 'Weak',
    age: 22,
    location: 'Wakanda',
};
var student2 = {
    firstName: 'Hairy',
    lastName: 'Potter',
    age: 25,
    location: 'Hogwarts',
};
var studentsList = [student1, student2];
function renderTable(students) {
    var table = document.createElement('table');
    var tHead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var columns = ['firstName', 'location'];
    columns.forEach(function (column) {
        var th = document.createElement('th');
        th.textContent = column.charAt(0).toUpperCase() + column.slice(1);
        headerRow.appendChild(th);
    });
    tHead.appendChild(headerRow);
    table.appendChild(tHead);
    var tBody = document.createElement('tbody');
    students.forEach(function (student) {
        var row = document.createElement('tr');
        columns.forEach(function (column) {
            var td = document.createElement('td');
            td.textContent = student[column].toString();
            row.appendChild(td);
        });
        tBody.appendChild(row);
    });
    table.appendChild(tBody);
    document.body.appendChild(table);
}
exports.renderTable = renderTable;
renderTable(studentsList);
