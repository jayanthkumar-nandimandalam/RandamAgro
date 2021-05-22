class getDeliveryServices {

    getDelivery = (date) => {

        return new Promise((resolve, reject) => {
            let Delivery;
            console.log(date)
            db.collection('Delivery_details').find({ date: date }).toArray(function(err, result) {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {
                            console.log(result);
                            global.Delivery = result;
                            return resolve({ message: "Login Successfull", data: "" });
                        } else {

                            console.log(result);
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


module.exports = new getDeliveryServices();