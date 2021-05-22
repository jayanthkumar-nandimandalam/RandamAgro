const adminloginServices=require('../services/adminlogin');

class AdminLogin{

    login=async(req,res)=>{
        
        let id=req.body.name;
        let password=req.body.password;

        global.res = res;

        try {
            let result = await adminloginServices.login(id, password);

            if (result) {

                res.redirect('/admin/home');
            }

        } catch (e) {
            console.log(e)
            res.redirect('/adminlogin');
        }


    }
}

module.exports=new AdminLogin();