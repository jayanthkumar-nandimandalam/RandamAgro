const addEmployeeServices = require('../services/addEmployee');

class AddEmployee {

    addemployee = async(req, res) => {


        console.log("success add employee controller")
        let name = req.body.name;
        let eId = req.body.empId;
        let phone = req.body.phonenumber;
        let location = req.body.location;
        let password = req.body.password;

        global.res = res;

        try {
            let result = await addEmployeeServices.addemployee(name, eId, phone, location, password);

            if (result) {


                res.render("adminhome", {
                    empAdd: "Employee Added SuccessFully",
                    path: "/adminhome",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("adminhome", {
                empAdd: "Failed to add employee",
                path: "/adminhome",
            });
        }


    }
}

module.exports = new AddEmployee();