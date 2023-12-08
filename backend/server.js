const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/Posts');

const app = express();

const db = require('./models');

app.disable('x-powered-by');
app.use(express.json());
app.use(cors());

app.use('/tasks', tasksRouter);

db.sequelize.sync().then(() => {
    app.listen('3001', () => {
        
    });
});
