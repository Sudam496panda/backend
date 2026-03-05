const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');




mongoose.connect("mongodb://localhost:27017/userDB54")
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.error('Could not connect to MongoDB', err) 
});

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(3000);   