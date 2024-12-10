function grabTopStud(students) {
  const toFilter = students.filter((student) => student.score > 75);

  const studNames = toFilter.map((student) => student.name);
  studNames.sort();

  return studNames;
}

const students = [
  { name: "Ricky", score: 99 },
  { name: "Leonardo", score: 71 },
  { name: "Gles", score: 67 },
];

console.log(grabTopStud(students));
