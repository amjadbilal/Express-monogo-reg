
require('./models/db');
const path = require('path');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const { engine } = require('express-handlebars');
const express = require('express');
// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express();
const PORT = 3000;
const  bodyParser=require('body-parser');

const employeeControler = require('./controllers/employee_controler');
// const productControler = require('./controllers/productcontroler');
// const userControler = require('./controllers/usercontroler');

app.set('views', path.join(__dirname, '/views'));

app.engine('handlebars' , engine({handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('handlebars', engine({handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine','handlebars');

// app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
    res.render('index', {layout : 'main'}); 
});

app.listen(PORT, () => {
    console.log("Express server is running at port:" + PORT);
})

app.use('/employee', employeeControler);
// app.use('/product', productControler);
// app.use('/employee', employeeControler);


