class deleteEmployeeServices {

    deleteEmployee = (id) => {

        return new Promise((resolve, reject) => {

            let employee;

            db.collection('employee_details').deleteOne({ eId: id }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result.deletedCount > 0) {

                            console.log(result);
                            global.employee = "Deleted Successfully";
                            return resolve({ message: "data deleted Successfully", data: "SUCCESS" });
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


module.exports = new deleteEmployeeServices();