const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')

const TaskRoutes = require('./routes/tasksroute')


app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')


app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(express.json())

app.use('/tasks', TaskRoutes)
app.use(express.static('public'))






conn
    .sync()
    .then(() => {
        app.listen(5000)
    })
    .catch((err) => console.log(err))