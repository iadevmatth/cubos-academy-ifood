const express = require('express');
const studentsControllers = require('./controllers/studentsControllers')
const routes = express();

// Routes referring at students search
routes.get('/students', studentsControllers.listStudents);
routes.get('/students/:id', studentsControllers.getStudents);

// Routes referring at students manipulation
routes.post('/students', studentsControllers.registerStudent);
routes.delete('/students/:id', studentsControllers.delStudent);
routes.put('/students/:id', studentsControllers.attStudent);

// Routes referring to the courses
routes.get('/courses', studentsControllers.listCourses);
routes.post('/courses', studentsControllers.registerCourse);

module.exports = routes