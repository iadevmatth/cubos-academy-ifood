const { students } = require('../database/database');

const listStudents = (req, res) => {
  return res.status(200).json(students);
};

const getStudents = (req, res) => {
  const { id } = req.params;
  // Verifying if id is a valid number.
  const isValidId = (id) => !isNaN(parseFloat(id)) && isFinite(id);
  // If id is not a number, return error 400 (bad request).
  if (!isValidId(id)) {
    return res.status(400).json({ mensage: 'Invalid Id' })
  };
  // Search the student in database.
  const student = students.find((student) => {
    return student.id === Number(id)
  });
  // If student is not found, return error 404 (not found).
  if (!student) {
    return res.status(404).json({ mensage: 'Student not found' })
  };
  return res.status(200).json(student)
};

module.exports = {
  listStudents,
  getStudents
}