const getDeliveryServices = require('../services/getDelivery');

class getDelivery {

    getDelivery = async(req, res) => {

        let date = req.body.date;

        global.res = res;

        try {
            let result = await getDeliveryServices.getDelivery(date);

            if (result) {

                res.render("admingetDeliveryDetails", {
                    Delivery: Delivery,
                    path: "/getDeliveryDetails",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("admingetDeliveryDetails", {
                Delivery: "No details found",
                path: "/getDeliveryDetails",
            });
        }


    }
}

module.exports = new getDelivery();