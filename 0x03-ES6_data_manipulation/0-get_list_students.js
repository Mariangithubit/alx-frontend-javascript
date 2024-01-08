/* eslint-disable no-underscore-dangle */
// class Student {
//   constructor(id, firstName, location) {
//     this._id = id;
//     this._firstName = firstName;
//     this._location = location;
//   }
// }

export default function getListStudents() {
  // const student1 = new Student(1, 'Guillaume', 'San Francisco');
  // const student2 = new Student(2, 'James', 'Columbia');
  // const student3 = new Student(3, 'Serena', 'San Francisco');
  // return [student1, student2, student3];
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
