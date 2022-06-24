const TodoList = require('../models/TodoList.js')
const date = new Date()
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let dateString = year.toString()+'/'+month.toString()+'/'+day.toString() 
module.exports = async (req, res) => {
    const todayList = await TodoList.findOne({ 'date': dateString})
    res.render('index', {
        todayList
    })
}