const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/routes');
const logger = require('./logger/logger.js');
const app = express();
const bodyParser = require('body-parser');

const dbConfig = require('./config/dbConfig.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);


const biopesticides = require('./controllers/biopesticides');
const biofungicides = require('./controllers/biofungicides');
const biostimulant = require('./controllers/biostimulant');
const chelatedmicronutrients = require('./controllers/chelatedmicronutrients');
const multimicronutrients = require('./controllers/multimicronutrients');
const organicfertilizers = require('./controllers/organicfertilizers');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/biopesticides', biopesticides.display);
app.get('/biofungicides', biofungicides.display);
app.get('/biostimulant', biostimulant.display);
app.get('/chelatedmicronutrients', chelatedmicronutrients.display);
app.get('/multimicronutrients', multimicronutrients.display);
app.get('/organicfertilizers', organicfertilizers.display);

app.get('/aboutus', (req, res) => {
    res.render("aboutus");
});

app.get('/adminlogin', (req, res) => {
    res.render("adminlogin");
});

app.get('/admin/home', (req, res) => {
    let empAdd;
    let dealerAdd;
    global.dealerAdd = dealerAdd;
    global.empAdd = empAdd;
    res.render("adminhome")
})

app.get('/employeelogin', (req, res) => {
    res.render("employeelogin");
});

app.get('/cart', (req, res) => {
    res.render("cart");
});

app.get('/contact', (req, res) => {

    res.render("contact");
});


app.get('/admin/adddealer', (req, res) => {
    res.render("adminhome");
});

app.get('/admin/addDelivery', (req, res) => {
    let deliveryStatus;
    global.deliveryStatus = deliveryStatus;
    res.render("adminaddDeliveryDetails");
});



app.get('/admin/getdealer', (req, res) => {
    res.render("admingetDealerDetails");
});
app.get('/admin/getdelivery', (req, res) => {
    let Delivery;
    global.Delivery = Delivery;
    res.render("admingetDeliveryDetails");
});

app.get('/admin/getemployee', (req, res) => {
    res.render("admingetEmployeeDetails");
});

app.get('/admin/logout', (req, res) => {
    res.redirect("/adminlogin");
});

app.get('/emphome', (req, res) => {
    res.render("emphome");
});

app.listen(process.env.PORT || 4000, () => {
    wLogger.info(`Server Listening at port `);
})