class AddDeliveryServices {

    addDelivery = (name, phone, list) => {

        return new Promise((resolve, reject) => {
            var d = new Date();
            if (d.getMonth() < 10) {
                var date = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();
            } else {
                var date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
            }


            let DeliveryObj = {
                name: name,
                phone: phone,
                list: list,
                date: date

            }
            db.collection("Delivery_details").insertOne(DeliveryObj, function(err, res) {
                if (err) {
                    return reject({ message: " Failure while adding delivery", data: "" });
                } else {
                    return resolve({ message: " Successfull", data: "" });
                }
            });


        });

    }
}


module.exports = new AddDeliveryServices();