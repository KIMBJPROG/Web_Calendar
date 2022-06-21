const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(8000, ()=>{
    console.log('Server running at http://127.0.0.1:8000');     
});