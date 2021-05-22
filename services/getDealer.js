class getDealerServices {

    getDealer = (id) => {

        return new Promise((resolve, reject) => {

            let dealer;

            db.collection('dealer_details').findOne({ dId: id }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {
                            console.log(result);

                            global.dealer = result;

                            return resolve({ message: "Login Successfull", data: "" });
                        } else {
                            return reject({ message: "login Failure : Invalid credentials" });
                        }
                    }
                } catch (err) {
                    return reject({ message: "admin Details Not found", error: "" });
                }

            })

        });

    }
}


module.exports = new getDealerServices();