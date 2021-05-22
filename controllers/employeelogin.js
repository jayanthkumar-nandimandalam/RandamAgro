const EmployeeloginServices = require('../services/employeelogin');

class EmployeeLogin {

    login = async(req, res) => {

        let id = req.body.name;
        let password = req.body.password;

        global.res = res;

        try {
            let result = await EmployeeloginServices.login(id, password);

            if (result) {
                console.log(result);
                res.redirect('/admin/home');

            }

        } catch (e) {
            console.log(e)
            res.redirect('/employeelogin');
        }


    }
}

module.exports = new EmployeeLogin();