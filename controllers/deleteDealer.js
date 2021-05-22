const deleteDealerServices = require('../services/deleteDealer');

class deleteDealer {

    deleteDealer = async(req, res) => {

        let id = req.body.id;

        global.res = res;

        try {
            let result = await deleteDealerServices.deleteDealer(id);

            if (result) {

                res.render("admingetDealerDetails", {
                    dealer: dealer,
                    path: "/admingetDealerDetails",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("admingetDealerDetails", {
                dealer: "Deletion Failed",
                path: "/admingetDealerDetails",
            });
        }


    }
}

module.exports = new deleteDealer();