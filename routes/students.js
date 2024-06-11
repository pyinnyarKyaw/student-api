const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

let students = [];
let studentIdCounter = 1;

// GET
router.get('/', (req, res) => {
    res.json(students);
});

// POST
router.post('/', (req, res) => {
    const {name, email, age} = req.body;
    if (!name || !email || !age){
        return res.status(400).json({message: "All fields are required"})
    }

    const newStudent = new Student(studentIdCounter++, name, email, age);
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// GET {id}
router.get('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!student){
        return res.status(404).send('Student not found');
    }

    res.json(student);
});

// PATCH
router.patch('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student){
        return res.status(404).send('Student not found');
    }

    const {name, email, age} = req.body;
    if (name) student.name = name;
    if (email) student.email = email;
    if (age) student.age = age;

    res.json(student);
});

// DELETE
router.delete('/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1){
        return res.status(404).send('Student not found');
    }

    students.splice(studentIndex, 1);
    res.status(204).send();
});

module.exports = router;