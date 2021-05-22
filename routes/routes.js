const express = require('express');
const router = express.Router();
global.express = express;
global.router = router;

const contact = require('../controllers/contactform');
const adminlogin = require('../controllers/adminlogin');
const employeelogin = require('../controllers/employeelogin');
const adminaddDealer = require('../controllers/addDealer');
const adminaddemployee = require('../controllers/addemployee');


const addDelivery = require('../controllers/addDelivery');

const getDelivery = require('../controllers/getDelivery');
const getEmployee = require('../controllers/getEmployee');
const deleteEmployee = require('../controllers/deleteEmployee');

const deleteDealer = require('../controllers/deleteDealer');
const getDealer = require('../controllers/getDealer');


const checkoutcart = require('../controllers/checkoutController');

let contactObj = new contact();
let checkoutcartobj = new checkoutcart();

router.post('/adminlogin', adminlogin.login);

router.post('/employeelogin', employeelogin.login);

router.post('/admin/addDealer', adminaddDealer.addDealer);

router.post('/contactform', contactObj.contact);

router.post('/checkout', checkoutcartobj.data);

router.post('/admin/addemployee', adminaddemployee.addemployee);
router.post('/addDelivery', addDelivery.addDelivery);

router.post('/getDelivery', getDelivery.getDelivery);

router.post('/getEmployee', getEmployee.getEmployee);

router.post('/deleteEmployee', deleteEmployee.deleteEmployee);

router.post('/deleteDealer', deleteDealer.deleteDealer);

router.post('/getDealer', getDealer.getDealer);

module.exports = router;