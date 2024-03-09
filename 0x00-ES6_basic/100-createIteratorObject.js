export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return iterateEmployees();
}
