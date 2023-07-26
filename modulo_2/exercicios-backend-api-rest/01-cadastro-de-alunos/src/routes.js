const express = require('express');
const studentsControllers = require('./controllers/studentsControllers')
const routes = express();

routes.get('/students', studentsControllers.listStudents);
routes.get('/students/:id', studentsControllers.getStudents);
routes.post('/students', studentsControllers.registerStudent);
routes.delete('/students/:id', studentsControllers.deleteStudent);

module.exports = routes