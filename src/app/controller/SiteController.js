const Tcl = require('../modules/Courses')
const { mutipleObjMongoose } = require('../../utils/handlebarToObj')
class SiteController {

    index(req, res, next) {
        Tcl.find({})
            .then(tcl => {
                return res.render('home', { tcl: mutipleObjMongoose(tcl) }
                )
            })
            .catch(next)
    }
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController;