const express = require('express');
const controller = require('../controller/TaskController.js');
const router = express.Router();

router.post('/tasks', controller.createTask);

router.get('/tasks', controller.getAllTask);

router.delete('/tasks/:id', controller.deleteTask);

router.put('/tasks/:id', controller.updateTask);

module.exports = router;