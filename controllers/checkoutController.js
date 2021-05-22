const express = require('express');
const router = express.Router();
const checkoutServices = require('../services/checkout');
class checkoutController {
    data = async(req, res) => {
        let name = req.body.name;
        let mailId = req.body.email;
        let phnNo = req.body.phone;
        let listArr = req.body.cartObjValue;
        console.log(typeof listArr + "test111");
        global.res = res;
        try {
            let result = await checkoutServices.checkout(name, mailId, phnNo, listArr);

            if (result) {
                console.log("data send")
                //res.redirect('/cart');
                res.render("cart", {
                    checkoutstatus : "Order Placed Successfully",
                    path: "/cart",
                  });
            }

        } catch (e) {
            console.log(e);
            res.redirect('/cart');
        }
    }
}


module.exports = checkoutController;