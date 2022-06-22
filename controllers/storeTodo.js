const TodoList = require('../models/TodoList.js')

module.exports = (req, res) => {
    const { editDate, activity} = req.body;
    const date = editDate;
    res.redirect('/edit');
}