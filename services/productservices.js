class ProductServices {

    display = (name) => {
        // let productresult;

        return new Promise((resolve, reject) => {


            db.collection(name + '_details').find({}).toArray((err, result) => {

                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result !== null) {
                            console.log(typeof result);


                            return resolve({ message: "retrieved successfully", result: result });

                        } else {
                            return reject({ message: "Not retrieved successfully" });
                        }
                    }
                } catch (err) {
                    console.log(err)
                    return reject({ message: " Details Not found", error: "" });
                }

            })

        });

    }
}


module.exports = new ProductServices();