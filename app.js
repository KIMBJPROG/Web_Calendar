const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const storeTodoController = require('./controllers/storeTodo')
const openEditController = require('./controllers/openEdit')
const editController = require('./controllers/setEdit')
const homeController = require('./controllers/home')
const todoDeleteController = require('./controllers/todoDelete')
const expressSession = require('express-session')
const validationMiddleware = require('./middleware/validationMiddleware')

mongoose.connect('mongodb://localhost/my_calendar', {useNewUrlParser:true});

global.chosenDate = null;

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))
app.use('*', (req, res, next)=>{
    chosenDate = req.session.chosenDate;
    next();
})

app.get('/edit', editController)
app.get('/', homeController);

app.post('/openedit', openEditController)
app.post('/todo/store', validationMiddleware, storeTodoController)
app.post('/edit/delete', todoDeleteController)

app.listen(8000, ()=>{
    console.log('Server running at http://127.0.0.1:8000');     
});