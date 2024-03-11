export default function getListStudentIds(studentArray) {
  const idsArray = [];
  if (!Array.isArray(studentArray)) {
    return idsArray;
  }

  studentArray.map((student) => idsArray.push(student.id));
  return idsArray;
}
