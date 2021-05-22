class getEmployeeServices {

    getEmployee = (id) => {

        return new Promise((resolve, reject) => {

            let employee;

            db.collection('employee_details').findOne({ eId: id }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {

                            console.log(result);
                            global.employee = result;
                            return resolve({ message: "data send Successfully", data: "SUCCESS" });
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


module.exports = new getEmployeeServices();