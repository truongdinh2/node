const Tcl = require('../modules/Courses')
const { oneObjMongoose } = require('../../utils/handlebarToObj')

class NguoiDayController {
    show(req, res, next) {
        Tcl.findOne({slug:req.params.slug})
        .then(tcl => res.render('nguoi-day/show',{tcl:oneObjMongoose(tcl)}))
        .catch(next)
    }
    create(req,res){
        res.render('nguoi-day/create')
    }
    store(req,res,next){
        const newData = new Tcl(req.body);
        newData.save()
        res.redirect('/')
    }
}
module.exports = new NguoiDayController;