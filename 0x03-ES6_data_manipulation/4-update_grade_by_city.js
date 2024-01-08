export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array)) return [];
  const cityStuds = students.filter((student) => student.location === city)
    .map((student) => {
      const gradedStudent = { ...student };
      let found = 0;
      for (const newGrade of newGrades) {
        if (newGrade.studentId === student.id) {
          found = 1;
          gradedStudent.grade = newGrade.grade;
          break;
        }
      }
      if (!found) gradedStudent.grade = 'N/A';
      return gradedStudent;
    });
  return cityStuds;
}
