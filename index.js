const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(express.json())
app.use(cors())

const db = require('./models')


const taskRouter = require('./routes/Tasks.Routes')
app.use('/tasks', taskRouter)

const workersRouter = require('./routes/Workers.Route')
app.use('/workers', workersRouter)

const usersRouter = require('./routes/Users.Routes')
app.use('/auth', usersRouter)



db.sequelize.sync().then(()=> {
    app.listen(process.env.PORT || 3001, () => {
        console.log('server runing on port 3001')
    })
    .catch(err => {
        console.log(err);
    })

})