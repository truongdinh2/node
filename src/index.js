const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./route');
const db = require('./config/db')
// mongoose
db.connect();
// lấy dữ liệu json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())
// http logger
// app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//static file
app.use(express.static(path.join(__dirname, 'public')))
//route
route(app)
// app.get('/news',(req,res) => {
//     res.render('news')
// })
//port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})