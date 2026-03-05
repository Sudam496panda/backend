const express = require('express')
const router = express.Router()
const Tasks = require('../model/task.model')

// Create a new task
router.post('/', async (req, res) => {
    const task = await Tasks.create(req.body)
    res.json(task)
})

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Tasks.find()
    res.json(tasks)
})

module.exports = router