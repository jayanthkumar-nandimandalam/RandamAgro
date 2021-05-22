class AddemployeeServices{

    addemployee=(name,eId,phone,location,password)=>{

        return new Promise((resolve, reject) => {


            db.collection('employee_details').findOne({ $and: [{ phone: phone }, { eId: eId }] }, (err, result) => {
                try {
                    if (err) {
                        throw err;
                    } else {

                        if (result !== null) {

                            return reject({ message: "Failure" });
                        } else {

                            let employeeObj={
                                name:name,
                                eId:eId,
                                phone:phone,
                                password:password,
                                location:location
                            }

                            db.collection("employee_details").insertOne(employeeObj, function(err, res) {
                                if (err) throw err;
                              });

                            return resolve({ message: " Successfull", data: "" });
                            
                        }
                    }
                } catch (err) {
                    console.log(err)
                    return reject({ message: "error while adding employee", error: "" });
                }

            })

        });

    }
}


module.exports=new AddemployeeServices();