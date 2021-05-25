class NewsController {
    //get '/news'
    show(req,res){
        res.render('news')
    }
    index(req, res) {
        res.render('home')
        // res.send('hih')
    }
}
module.exports = new NewsController;