const express = require('express');
const router = express.Router();
const contactformServices = require('../services/contactform');
class contactformController {

    contact = async(req, res) => {
        console.log("contactform sucess")
        let name = req.body.name;
        let mailId = req.body.email;
        let phnNo = req.body.phone;
        let msg = req.body.message;
        global.res = res;

        try {
            let result = await contactformServices.contact(name, mailId, phnNo, msg);

            if (result) {
                console.log("data send ")
                res.render("contact", {
                    value : "Message sent successfull",
                    path: "/contact",
                  });
            }

        } catch (e) {
            console.log(e)
            value = "Message unsuccessfull";
            global.response = value;
            res.redirect('/contact');
        }
    }
}


module.exports = contactformController;