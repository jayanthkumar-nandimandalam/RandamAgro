const addDealerServices = require('../services/addDealer');

class AddDealer {

    addDealer = async(req, res) => {

        let name = req.body.name;
        let dId = req.body.dId;
        let phone = req.body.phone;
        let location = req.body.location;
        let loginId = req.body.loginId;

        global.res = res;

        try {
            let result = await addDealerServices.addDealer(name, dId, phone, location, loginId);

            if (result) {

                res.render("adminhome", {
                    dealerAdd: "Dealer Added SuccessFully",
                    path: "/adminhome",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("adminhome", {
                dealerAdd: "Failed to add Dealer",
                path: "/adminhome",
            });
        }


    }
}

module.exports = new AddDealer();