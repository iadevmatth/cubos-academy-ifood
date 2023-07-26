let { courses, identifyCourse } = require('../database/databaseCourses');
let { students, identifyStudent } = require('../database/databaseStudents');

// Student Controllers
const listStudents = (req, res) => {
  return res.status(200).json(students);
};

const getStudents = (req, res) => {
  const { id } = req.params;
  // Verifying if id is a valid number.
  const isValidId = (id) => !isNaN(parseFloat(id)) && isFinite(id);
  // If id is not a number, return error 400 (bad request).
  if (!isValidId(id)) {
    return res.status(400).json({ message: 'Invalid Id' })
  };
  // Search the student in database.
  const student = students.find((student) => {
    return student.id === Number(id)
  });
  // If student is not found, return error 404 (not found).
  if (!student) {
    return res.status(404).json({ message: 'Student not found' })
  };
  return res.status(200).json(student)
};

const registerStudent = (req, res) => {
  const { name, last_name, year, course } = req.body;

  if (!name || !last_name || !year || !course) {
    return res.status(400).json({ message: 'One of the fields is not filled in.' })
  };

  if (!Number(year)) {
    return res.status(400).json({ message: 'The year is Not a Number.' })
  }

  if (!name.trim() || !last_name.trim() || !course.trim()) {
    return res.status(400).json({ message: 'The fields (name, last name and course) must be text only.' })
  }

  if (year < 18) {
    return res.status(422).json({ message: 'Underage students are not allowed' })
  };

  const student = {
    id: identifyStudent++,
    name,
    last_name,
    year,
    course
  };

  students.push(student);

  return res.status(201).json(student);

};

const attStudent = (req, res) => {
  const { id } = req.params;
  const { name, last_name, year, course } = req.body;

  // Verifying if id is a valid number.
  const isValidId = (id) => !isNaN(parseFloat(id)) && isFinite(id);
  // If id is not a number, return error 400 (bad request).
  if (!isValidId(id)) {
    return res.status(400).json({ message: 'Invalid Id' })
  };

  if (!name || !last_name || !year || !course) {
    return res.status(400).json({ message: 'One of the fields is not filled in.' })
  };

  if (!Number(year)) {
    return res.status(400).json({ message: 'The year is Not a Number.' })
  }

  if (!name.trim() || !last_name.trim() || !course.trim()) {
    return res.status(400).json({ message: 'The fields (name, last name and course) must be text only.' })
  }

  if (year < 18) {
    return res.status(422).json({ message: 'Underage students are not allowed' })
  };

  // Search the student in database.
  const student = students.find((student) => {
    return student.id === Number(id)
  });
  // If student is not found, return error 404 (not found).
  if (!student) {
    return res.status(404).json({ message: 'Student not found' })
  };

  student.name = name
  student.last_name = last_name
  student.year = year
  student.course = course

  return res.status(204).send();

};

const delStudent = (req, res) => {
  const { id } = req.params;
  // Verifying if id is a valid number.
  const isValidId = (id) => !isNaN(parseFloat(id)) && isFinite(id);
  // If id is not a number, return error 400 (bad request).
  if (!isValidId(id)) {
    return res.status(400).json({ mensage: 'Invalid Id' })
  };

  const student = students.find((student) => {
    return student.id === Number(id);
  });

  if (!student) {
    return res.status(404).json({ mensage: 'Student not found.' })
  };

  students = students.filter((student) => {
    return student.id !== Number(id)
  })

  return res.status(200).json(student);
};

// Courses Controllers
const listCourses = (req, res) => {
  return res.status(200).json(courses);
};

const registerCourse = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: ' (NAME) field not filled in.' })
  };

  if (!name.trim()) {
    return res.status(400).json({ message: 'The fields (name) must be text only.' })
  };

  const courseName = courses.find((course) => {
    return course.name === name
  });

  if (courseName) {
    return res.status(409).json({ message: 'The course already exists.' })
  };

  const courseAdd = {
    id: identifyCourse++,
    name
  };

  courses.push(courseAdd);

  return res.status(201).json(courseAdd)


};

module.exports = {
  listStudents,
  getStudents,
  registerStudent,
  attStudent,
  delStudent,
  listCourses,
  registerCourse
};