class deleteDealerServices {

    deleteDealer = (id) => {

        return new Promise((resolve, reject) => {

            let dealer;

            db.collection('dealer_details').deleteOne({ dId: id }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result.deletedCount > 0) {

                            console.log(result);
                            global.dealer = "Deleted Successfully";
                            return resolve({ message: "data deleted Successfully", data: "SUCCESS" });
                        } else {
                            return reject({ message: " Failure : Invalid credentials" });
                        }
                    }
                } catch (err) {

                    return reject({ message: "admin Details Not found", error: "" });
                }

            })

        });

    }
}


module.exports = new deleteDealerServices();