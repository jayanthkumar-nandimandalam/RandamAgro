const addDeliveryServices = require('../services/addDelivery');

class AddDelivery {

    addDelivery = async(req, res) => {

        let deliveryValue = req.body.deliveryValue;
        let phone = req.body.phone;
        let name = req.body.name;

        global.res = res;

        try {
            let result = await addDeliveryServices.addDelivery(name, phone, deliveryValue);

            if (result) {

                res.render("adminaddDeliveryDetails", {
                    deliveryStatus: "Delivery Added SuccessFully",
                    path: "/adminaddDeliveryDetails",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("adminaddDeliveryDetails", {
                deliveryStatus: "Failed To add Delivery",
                path: "/adminaddDeliveryDetails",
            });
        }


    }
}

module.exports = new AddDelivery();