module.exports = (req, res) => {
    const { date } = req.body
    req.session.chosenDate = date;
    res.redirect('/edit')
} 