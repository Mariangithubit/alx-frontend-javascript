export default function getStudentIdsSum(students) {
  if (!(students instanceof Array)) return [];
  return students
    .map((student) => student.id)
    .reduce((sum, current) => sum + current, 0);
}
