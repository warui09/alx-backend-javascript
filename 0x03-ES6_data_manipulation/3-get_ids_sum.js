export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((acc, student) => acc + student.id, 0);
}
