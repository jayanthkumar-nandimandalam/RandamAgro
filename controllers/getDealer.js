const getDealerServices = require('../services/getDealer');

class getDealer {

    getDealer = async(req, res) => {

        let id = req.body.id;

        global.res = res;

        try {
            let result = await getDealerServices.getDealer(id);

            if (result) {
                console.log(dealer);
                console.log(result);

                res.render("admingetDealerDetails", {
                    dealer: dealer,
                    path: "/admingetDealerDetails",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("admingetDealerDetails", {
                dealer: "No details found",
                path: "/admingetDealerDetails",
            });
        }


    }
}

module.exports = new getDealer();