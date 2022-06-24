module.exports = (req,res,next)=>{
    if(req.body.activity == "") {
        return res.redirect('/edit')
    }
    next()
}