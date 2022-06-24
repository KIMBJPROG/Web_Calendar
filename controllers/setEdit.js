const TodoList = require('../models/TodoList.js')

module.exports = async (req, res) => {
    const todo = await TodoList.findOne({ 'date':chosenDate })
    res.render('edit', {
        todo
    })
}