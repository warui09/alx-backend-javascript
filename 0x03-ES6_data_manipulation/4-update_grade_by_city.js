export default function updateStudentGradeByCity(students, city, newGrades) {
  const newGradesId = newGrades.map((grade) => grade.studentId);
  return students
    .filter((student) => student.location === city)
    .map((student) => (newGradesId.includes(student.id) ? { ...student, grade: newGrades.find((grade) => student.id === grade.studentId).grade } : { ...student, grade: 'N/A' }));
}
