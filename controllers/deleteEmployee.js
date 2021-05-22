const deleteEmployeeServices = require('../services/deleteEmployee');

class deleteEmployee {

    deleteEmployee = async(req, res) => {

        let id = req.body.id;

        global.res = res;

        try {
            let result = await deleteEmployeeServices.deleteEmployee(id);

            if (result) {
                console.log(employee);

                res.render("admingetEmployeeDetails", {
                    employee: employee,
                    path: "/admingetEmployeeDetails",
                });
            }

        } catch (e) {
            console.log(e)
            res.render("admingetEmployeeDetails", {
                employee: "Deletion Failed",
                path: "/admingetEmployeeDetails",
            });
        }


    }
}

module.exports = new deleteEmployee();