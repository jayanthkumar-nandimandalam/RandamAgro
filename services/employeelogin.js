class employeeServices {

    login = (eId, password) => {
        let emp;

        return new Promise((resolve, reject) => {


            db.collection('employee_details').findOne({ $and: [{ eId: eId }, { password: password }] }, (err, result) => {

                try {
                    if (err) {
                        throw err;
                    } else {
                        if (result !== null) {
                            global.emp = result;
                            return resolve({ message: "Login Successfull" });

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


module.exports = new employeeServices();