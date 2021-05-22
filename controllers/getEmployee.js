const getEmployeeServices = require('../services/getEmployee');

class getEmployee {

    getEmployee = async(req, res) => {

        let id = req.body.id;

        global.res = res;

        try {
            let result = await getEmployeeServices.getEmployee(id);

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
                employee: "No details found",
                path: "/admingetEmployeeDetails",
            });
        }


    }
}

module.exports = new getEmployee();