class AddDealerServices {

    addDealer = (name, dId, phone, location, id) => {

        return new Promise((resolve, reject) => {


            db.collection('dealer_details').findOne({ $and: [{ phone: phone }, { dId: dId }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {

                            return reject({ message: "Failure" });
                        } else {

                            let dealerObj = {
                                name: name,
                                dId: dId,
                                phone: phone,
                                location: location,
                                id: id
                            }

                            db.collection("dealer_details").insertOne(dealerObj, function(err, res) {
                                if (err) throw err;
                            });

                            return resolve({ message: " Successfull", data: "" });

                        }
                    }
                } catch (err) {
                    console.log(err)
                    return reject({ message: "error while adding dealer", error: "" });
                }

            })

        });

    }
}


module.exports = new AddDealerServices();