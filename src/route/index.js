const newRouter = require("./news");
const siteRouter = require("./site");
const nguoiDayRouter = require("./nguoiday");

function route(app) {
    // route pass
    app.use('/news',newRouter);
    
    app.use('/nguoi-day',nguoiDayRouter);
    // route site
    app.use('/',siteRouter)
}
module.exports = route;