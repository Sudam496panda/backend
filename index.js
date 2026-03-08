 require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/task.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB connection error:", err);
});

// Routes
app.use('/api/tasks', taskRoutes);

// Server Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});