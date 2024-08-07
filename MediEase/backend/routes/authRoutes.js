const express = require('express');
const router = express.Router();

const { login, signup, register, allPatients, getPatient,getText,getReport, saveReport, getSummary,chat } = require('../controller/authController');

router.post('/login', login);
router.post('/signup', signup);
router.post('/register', register);
router.get('/allPatients', allPatients);
router.get('/getPatient/:id',getPatient);
router.get('/openai/getText',getText);
router.post('/openai/getReport',getReport);
router.post('/saveReport',saveReport);
router.get('/getSummary/:id',getSummary);
router.post('/chat',chat);

module.exports = router;