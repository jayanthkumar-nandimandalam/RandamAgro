class adminServices{

    login=(name,password)=>{

        return new Promise((resolve, reject) => {


            db.collection('admin_details').findOne({ $and: [{ admin: name }, { password: password }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {

                            return resolve({ message: "Login Successfull", data: "" });
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


module.exports=new adminServices();